import os
import re
import asyncio
import requests
from urllib.parse import urljoin, urlparse
from playwright.async_api import async_playwright

BASE_URL = "https://tkachenko-valeriy.tilda.ws"
SAVE_DIR = "tilda_images"
MAX_PAGES = 30

os.makedirs(SAVE_DIR, exist_ok=True)

IMG_EXTS = (".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".bmp", ".avif")


def same_domain(a: str, b: str) -> bool:
    return urlparse(a).netloc == urlparse(b).netloc


def normalize_url(raw: str, current_url: str) -> str | None:
    if not raw:
        return None
    raw = raw.strip().strip('"').strip("'")
    if not raw:
        return None

    if raw.startswith("//"):
        return "https:" + raw
    if raw.startswith("/"):
        return urljoin(current_url, raw)
    if raw.startswith("http://") or raw.startswith("https://"):
        return raw
    return urljoin(current_url, raw)


def looks_like_image(url: str) -> bool:
    low = url.lower()
    return any(ext in low for ext in IMG_EXTS) or "/tild" in low


def safe_name(url: str, idx: int) -> str:
    path = urlparse(url).path
    name = os.path.basename(path)
    if not name:
        name = f"image_{idx}.jpg"
    if "." not in name:
        name += ".jpg"
    return name


async def collect_pages_and_images():
    visited = set()
    queue = [BASE_URL]
    found_images = set()

    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=[
                "--disable-blink-features=AutomationControlled",
                "--no-sandbox",
            ],
        )

        context = await browser.new_context(
            user_agent=(
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/123.0.0.0 Safari/537.36"
            ),
            viewport={"width": 1440, "height": 2200},
            locale="ru-RU",
            extra_http_headers={
                "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            },
        )

        page = await context.new_page()

        while queue and len(visited) < MAX_PAGES:
            url = queue.pop(0)
            if url in visited:
                continue

            print(f"[PAGE] {url}")
            visited.add(url)

            try:
                await page.goto(url, wait_until="domcontentloaded", timeout=45000)
                await page.wait_for_timeout(2500)

                # дочистить lazy-load
                last_height = 0
                for _ in range(8):
                    height = await page.evaluate("document.body.scrollHeight")
                    if height == last_height:
                        break
                    last_height = height
                    await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                    await page.wait_for_timeout(1200)

                html = await page.content()

                # 1) забираем ссылки прямо из DOM
                dom_urls = await page.eval_on_selector_all(
                    "*",
                    """
                    els => {
                      const out = [];
                      const attrs = [
                        "src", "href", "poster",
                        "data-original", "data-src", "data-lazy",
                        "data-content-cover-bg", "data-img-zoom-url",
                        "data-cover-bg", "data-artboard-bg-image",
                        "srcset", "data-srcset", "style"
                      ];

                      for (const el of els) {
                        for (const attr of attrs) {
                          const v = el.getAttribute(attr);
                          if (v) out.push(v);
                        }
                      }
                      return out;
                    }
                    """
                )

                for raw in dom_urls:
                    if not raw:
                        continue

                    if "srcset" in raw:
                        parts = [x.strip().split(" ")[0] for x in raw.split(",")]
                        for part in parts:
                            u = normalize_url(part, url)
                            if u and looks_like_image(u):
                                found_images.add(u)
                        continue

                    for bg in re.findall(r'url\\((.*?)\\)', raw):
                        u = normalize_url(bg, url)
                        if u and looks_like_image(u):
                            found_images.add(u)

                    u = normalize_url(raw, url)
                    if u and looks_like_image(u):
                        found_images.add(u)

                # 2) raw HTML — часто у тильды картинки торчат прямо там
                for m in re.findall(r"https?://[^\"')\s>]+", html):
                    if looks_like_image(m):
                        found_images.add(m)

                for m in re.findall(r"/[^\"')\s>]+(?:jpg|jpeg|png|webp|gif|svg|bmp|avif)", html, flags=re.I):
                    u = normalize_url(m, url)
                    if u and looks_like_image(u):
                        found_images.add(u)

                # 3) ссылки на другие страницы сайта
                hrefs = await page.eval_on_selector_all(
                    "a[href]",
                    "els => els.map(a => a.href)"
                )

                for href in hrefs:
                    href = href.split("#")[0]
                    if href and same_domain(href, BASE_URL) and href not in visited and href not in queue:
                        queue.append(href)

            except Exception as e:
                print("FAIL PAGE", url, e)

        await browser.close()

    return found_images


def download_images(images: set[str]):
    session = requests.Session()
    session.headers.update({
        "User-Agent": (
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/123.0.0.0 Safari/537.36"
        ),
        "Referer": BASE_URL,
    })

    for idx, url in enumerate(sorted(images), 1):
        try:
            r = session.get(url, timeout=30)
            r.raise_for_status()

            name = safe_name(url, idx)
            path = os.path.join(SAVE_DIR, name)

            if os.path.exists(path):
                base, ext = os.path.splitext(name)
                path = os.path.join(SAVE_DIR, f"{base}_{idx}{ext}")

            with open(path, "wb") as f:
                f.write(r.content)

            print("OK", path)

        except Exception as e:
            print("FAIL IMG", url, e)


async def main():
    images = await collect_pages_and_images()
    print(f"Найдено картинок: {len(images)}")
    download_images(images)

if __name__ == "__main__":
    asyncio.run(main())