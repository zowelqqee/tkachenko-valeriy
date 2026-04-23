import { existsSync, readdirSync } from 'node:fs'
import path from 'node:path'
import Image from 'next/image'

const GALLERY_DIR = path.join(process.cwd(), 'public', 'images', 'gallery')
const GALLERY_URL_PREFIX = '/images/gallery'
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])
const FILE_NAME_SORTER = new Intl.Collator('ru', {
  numeric: true,
  sensitivity: 'base',
})

function getGalleryPhotos() {
  if (!existsSync(GALLERY_DIR)) return []

  return readdirSync(GALLERY_DIR)
    .filter((filename) => IMAGE_EXTENSIONS.has(path.extname(filename).toLowerCase()))
    .sort((a, b) => FILE_NAME_SORTER.compare(a, b))
    .map((filename, index) => ({
      src: encodeURI(`${GALLERY_URL_PREFIX}/${filename}`),
      alt: `Атмосфера мероприятия ${index + 1}`,
    }))
}

export function GallerySection() {
  const photos = getGalleryPhotos()

  return (
    <section id="gallery" className="bg-canvas py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-10 h-px bg-accent" />
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
            Фотографии
          </span>
        </div>

        <div className="flex items-end justify-between mb-8 gap-4">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            АТМОСФЕРА НАШИХ СОБЫТИЙ
          </h2>
        </div>

        {photos.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {photos.map((photo, index) => (
              <div
                key={photo.src}
                className={`group relative overflow-hidden rounded-lg bg-surface ${
                  index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
                style={{ aspectRatio: index === 0 ? '16/9' : '4/3' }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={
                    index === 0
                      ? '(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw'
                      : '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
                  }
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-border bg-surface/60 px-6 py-12 text-center text-muted">
            В папке <code className="text-accent/80 text-xs">/public/images/gallery/</code> пока
            нет изображений.
          </div>
        )}
      </div>
    </section>
  )
}
