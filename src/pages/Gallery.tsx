import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type GalleryCard = {
  id: string
  src: string
  size?: 'wide' | 'tall' | 'large'
  title: string
  description: string
}

const galleryItems: GalleryCard[] = [
  {
    id: 'gallery-2178',
    src: '/images/Gallery/IMG_2178.heic',
    size: 'tall',
    title: 'Maker Space Morning',
    description: 'Candid snapshot before heading out for the day.',
  },
  {
    id: 'gallery-3005',
    src: '/images/Gallery/IMG_3005.heic',
    size: 'wide',
    title: 'Sunrise Stroll',
    description: 'Blue skies, empty roads, and some quiet time.',
  },
  {
    id: 'gallery-3221',
    src: '/images/Gallery/IMG_3221.heic',
    title: 'Weekend Lookout',
    description: 'Pausing to take in the view during a mini road trip.',
  },
  {
    id: 'gallery-4439',
    src: '/images/Gallery/IMG_4439.HEIC',
    size: 'tall',
    title: 'Studio Snapshot',
    description: 'Quick flick from an afternoon of tinkering.',
  },
  {
    id: 'gallery-4580',
    src: '/images/Gallery/IMG_4580.heic',
    title: 'After-Hours Hang',
    description: 'Late-night vibes with friends and music.',
  },
  {
    id: 'gallery-4649',
    src: '/images/Gallery/IMG_4649.heic',
    size: 'wide',
    title: 'Chrome & Carbon',
    description: 'Detail shot because textures matter.',
  },
  {
    id: 'gallery-4716',
    src: '/images/Gallery/IMG_4716.HEIC',
    title: 'Gear Laid Out',
    description: 'Ready-to-go kit before a busy weekend.',
  },
  {
    id: 'gallery-4825',
    src: '/images/Gallery/IMG_4825.heic',
    size: 'large',
    title: 'City Nights',
    description: 'Neon reflections from an impromptu walk.',
  },
  {
    id: 'gallery-4862',
    src: '/images/Gallery/IMG_4862.heic',
    title: 'Midday Window Light',
    description: 'Calm moment caught between errands.',
  },
  {
    id: 'gallery-4891',
    src: '/images/Gallery/IMG_4891.HEIC',
    size: 'tall',
    title: 'Desk Setup',
    description: 'Traveling workspace keeping things simple.',
  },
  {
    id: 'gallery-5963',
    src: '/images/Gallery/IMG_5963.heic',
    title: 'Morning Brew',
    description: 'Coffee, notebook, and a reset.',
  },
  {
    id: 'gallery-6754',
    src: '/images/Gallery/IMG_6754.heic',
    size: 'wide',
    title: 'Desert Road',
    description: 'Golden hour light on an empty stretch.',
  },
  {
    id: 'gallery-6864',
    src: '/images/Gallery/IMG_6864.HEIC',
    title: 'Crew Selfie',
    description: 'Snapshot with the homies—no agenda.',
  },
  {
    id: 'gallery-9372',
    src: '/images/Gallery/IMG_9372.heic',
    size: 'wide',
    title: 'Bay Sunset',
    description: 'Wind-down walk with a ridiculous sky.',
  },
]

export default function Gallery() {
  const [cachedCount, setCachedCount] = useState(0)
  const totalImages = galleryItems.length
  const allCached = cachedCount >= totalImages
  const progress = Math.min(100, Math.round((cachedCount / totalImages) * 100))

  useEffect(() => {
    let isMounted = true
    const uniqueSources = Array.from(new Set(galleryItems.map((item) => item.src)))

    uniqueSources.forEach((src) => {
      const img = new Image()
      const handleComplete = () => {
        if (!isMounted) return
        setCachedCount((prev) => Math.min(prev + 1, uniqueSources.length))
      }
      img.onload = handleComplete
      img.onerror = handleComplete
      img.src = src
      if (img.complete) {
        handleComplete()
      }
    })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-16 relative">
      {!allCached && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            className="w-16 h-16 rounded-full border-2 border-primary/40 border-t-primary mb-6"
          />
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">Caching gallery</p>
          <div className="w-64 h-1 bg-border/60 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.4 }}
              className="h-full bg-primary"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">{progress}%</p>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: allCached ? 1 : 0.2, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 15,
          mass: 0.8,
          opacity: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        }}
        className="space-y-10"
      >
        <div className="text-center md:text-left max-w-4xl mx-auto md:mx-0">
          <h1 className="font-serif font-light text-5xl md:text-7xl mb-4">Gallery</h1>
          <p className="font-sans text-lg text-muted-foreground">
            Off-track snapshots, travel flicks, and the random scenes that make life feel cinematic.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-4 md:gap-5">
          {galleryItems.map((item, index) => {
            const sizeClass =
              item.size === 'large'
                ? 'col-span-2 row-span-2'
                : item.size === 'wide'
                  ? 'col-span-2'
                  : item.size === 'tall'
                    ? 'row-span-2'
                    : ''

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, type: 'spring', stiffness: 160, damping: 20 }}
                whileHover={{ scale: 1.02 }}
                className={`overflow-hidden rounded-xl border border-border/60 bg-muted/20 relative group ${sizeClass}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
