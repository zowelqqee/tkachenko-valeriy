# Продюсерский центр Ткаченко — сайт

Next.js 16 · TypeScript · Tailwind CSS v4 · App Router · Fully static

---

## Запуск

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve production build
```

---

## Как добавить новое событие

Откройте `data/events.ts` и добавьте объект в массив `events`:

```typescript
{
  id: 'evt-008',              // уникальный ID
  slug: 'my-new-event',       // уникальный slug (используется в URL)
  title: 'НАЗВАНИЕ СОБЫТИЯ',
  shortTitle: 'Краткое',      // для карточек (необязательно)
  description: 'Описание...',
  genre: 'Рок',               // Рок | Джаз | Поп | Стендап | Классика | Блюз
  date: '2026-09-20',         // YYYY-MM-DD
  time: '20:00',              // HH:MM
  datetimeISO: '2026-09-20T20:00:00+03:00', // полный ISO для сортировки
  venue: 'Название площадки',
  city: 'Москва',             // необязательно
  priceFrom: 2500,            // число, рублей
  currency: 'RUB',
  ageRating: '16+',           // 0+ | 6+ | 12+ | 16+ | 18+
  buyTicketUrl: 'https://...',
  posterImage: '/images/posters/my-new-event.jpg', // файл в public/
  featured: false,            // true — выводит в главный слот "Ближайшее событие"
  published: true,            // false — скрывает с сайта
},
```

Добавьте постер в `public/images/posters/<slug>.jpg`.
Если постера нет — компонент покажет цветной градиент по жанру.

---

## Как изменить текст сайта

Все тексты и конфигурация находятся в `data/site.ts`:

- `heroTitle` / `heroTitleAccent` / `heroSubtitle` — Hero секция
- `company.description[]` — текст блока «О нас»
- `stats[]` — цифры (200+, 10 лет…)
- `company.contact` — телефон, email, адрес, соцсети

---

## Как изменить юридические страницы

Редактируйте `data/legal.ts`. Каждая страница — массив секций с заголовком и абзацами.

---

## Добавление фотографий в галерею

Поместите файлы в `public/images/gallery/`:
```
photo-1.jpg  photo-2.jpg  photo-3.jpg  ...  photo-6.jpg
```

Компонент `GallerySection` сейчас показывает плейсхолдеры.
Раскомментируйте использование `<Image>` в `components/GallerySection/index.tsx`
и передайте реальные пути — они уже описаны в массиве `GALLERY_PHOTOS`.

---

## Структура проекта

```
data/          — весь контент (события, тексты, юридические страницы)
lib/           — чистые функции (фильтры, сортировка, форматирование дат)
types/         — TypeScript интерфейсы
components/    — переиспользуемые UI-компоненты
app/           — страницы (App Router)
  page.tsx           — Главная
  afisha/page.tsx    — Афиша (поиск + фильтры)
  oplata/page.tsx    — Способы оплаты
  vozvrat-biletov/   — Возврат билетов
public/images/ — постеры и фотографии
```
