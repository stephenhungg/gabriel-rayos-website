import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

const pageTransition = {
  type: 'spring',
  stiffness: 120,
  damping: 18,
  mass: 0.8
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -40, scale: 0.96 }}
      transition={{
        ...pageTransition,
        opacity: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
      }}
    >
      {children}
    </motion.div>
  )
}
