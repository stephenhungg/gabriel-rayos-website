import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

const galleryItems = [
  { id: 1, title: 'Image 1', category: 'Projects' },
  { id: 2, title: 'Image 2', category: 'Formula Racing' },
  { id: 3, title: 'Image 3', category: 'Research' },
  { id: 4, title: 'Image 4', category: 'Projects' },
  { id: 5, title: 'Image 5', category: 'Formula Racing' },
  { id: 6, title: 'Image 6', category: 'Research' },
  { id: 7, title: 'Image 7', category: 'Projects' },
  { id: 8, title: 'Image 8', category: 'Formula Racing' },
  { id: 9, title: 'Image 9', category: 'Research' },
]

const springConfig = { type: 'spring', stiffness: 100, damping: 15, mass: 0.8 }

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ...springConfig,
          opacity: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }}
      >
        <h1 className="font-serif font-light text-5xl md:text-7xl mb-4">Gallery</h1>
        <p className="font-sans text-lg text-muted-foreground mb-12">
          A visual showcase of projects, events, and experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                delay: index * 0.04,
                type: 'spring',
                stiffness: 150,
                damping: 18
              }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
            >
              <Card className="aspect-square overflow-hidden hover:border-primary transition-all cursor-pointer group relative">
                <div className="w-full h-full bg-muted flex items-center justify-center relative overflow-hidden">
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Diagonal lines that slide in on hover */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 180,
                      damping: 25
                    }}
                  >
                    <div className="absolute top-1/4 -left-1/4 w-full h-px bg-primary/30 rotate-45 origin-left" />
                    <div className="absolute top-1/2 -left-1/4 w-full h-px bg-primary/20 rotate-45 origin-left" />
                    <div className="absolute top-3/4 -left-1/4 w-full h-px bg-primary/10 rotate-45 origin-left" />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="text-center z-10 relative"
                    initial={{ y: 0 }}
                    whileHover={{ y: -10 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    <motion.p
                      className="font-serif font-light text-2xl mb-2 group-hover:text-primary transition-colors"
                    >
                      {item.title}
                    </motion.p>
                    <motion.p
                      className="text-sm text-muted-foreground"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {item.category}
                    </motion.p>
                  </motion.div>

                  {/* Corner accents */}
                  <motion.div
                    className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/60 transition-all duration-300"
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/60 transition-all duration-300"
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
