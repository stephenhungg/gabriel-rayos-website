import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ShinyText from '../components/ShinyText'
import { Link } from 'react-router-dom'
import ShaderBackground from '../components/ShaderBackground'

export default function Home() {
  const [animationPhase, setAnimationPhase] = useState<'intro' | 'main'>('intro')

  useEffect(() => {
    // Transition to main phase after shader intro (approx 3s)
    const timer = setTimeout(() => setAnimationPhase('main'), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative">
      
      {/* Shader Background - Visible immediately for the morph intro */}
      <div className="absolute inset-0 z-0">
        <ShaderBackground />
        {/* Overlay to ensure text readability - Darker gradient for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background/30 backdrop-blur-[3px]" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: animationPhase === 'main' ? 1 : 0 }}
        transition={{
          duration: 1.0,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="text-center z-10 relative"
      >
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: animationPhase === 'main' ? 1 : 0,
            y: animationPhase === 'main' ? 0 : 20,
          }}
          transition={{
            delay: animationPhase === 'main' ? 0.2 : 0,
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="mb-6"
        >
          <h1 className="font-serif font-light text-6xl md:text-8xl lg:text-9xl relative inline-block">
            {animationPhase === 'main' && (
              <ShinyText text="Gabriel Rayos" speed={5} />
            )}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: animationPhase === 'main' ? 1 : 0,
            y: animationPhase === 'main' ? 0 : 20,
          }}
          transition={{
            delay: animationPhase === 'main' ? 0.35 : 0,
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="font-sans text-xl md:text-2xl text-foreground/80 mb-4 font-medium"
        >
          UC Berkeley &mdash; Mechanical Engineering
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: animationPhase === 'main' ? 1 : 0,
            y: animationPhase === 'main' ? 0 : 20,
          }}
          transition={{
            delay: animationPhase === 'main' ? 0.5 : 0,
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="font-sans italic text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed font-medium drop-shadow-sm"
        >
          Designing innovative mechanical systems and pushing the boundaries of engineering.
          <br />
          <span className="text-primary font-semibold">Formula racing enthusiast, researcher, and builder.</span>
        </motion.p>

        {/* Call to action */}
        {animationPhase === 'main' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-8 py-3 font-sans text-sm uppercase tracking-[0.2em] text-primary hover:bg-primary/20 transition-colors"
            >
              View Projects
            </Link>
            <a
              href="/Gabriel Rayos - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 font-sans text-sm uppercase tracking-[0.2em] text-foreground hover:border-primary/40 hover:text-primary transition-colors"
            >
              Resume
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 font-sans text-sm uppercase tracking-[0.2em] text-foreground hover:border-primary/40 transition-colors"
            >
              Let&apos;s Talk
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
