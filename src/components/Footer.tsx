import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="fixed bottom-4 left-0 right-0 z-40 pointer-events-none">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center"
        >
          <a
            href="https://github.com/stephenhungg"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto font-sans text-sm text-muted-foreground/60 hover:text-primary transition-colors duration-300"
          >
            made by stephen hung
          </a>
        </motion.div>
      </div>
    </footer>
  )
}
