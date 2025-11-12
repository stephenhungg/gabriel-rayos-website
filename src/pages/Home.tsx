import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ShinyText from '../components/ShinyText'

export default function Home() {
  const [animationPhase, setAnimationPhase] = useState<'intro' | 'main'>('intro')

  useEffect(() => {
    const timer = setTimeout(() => setAnimationPhase('main'), 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative">

      {/* Flowing abstract lines that morph into grid */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.5 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.8,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        {/* Horizontal lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute w-full h-px"
            style={{ top: `${(i + 1) * 12.5}%` }}
            initial={{
              scaleX: 0,
              y: Math.random() * 200 - 100,
              rotate: (Math.random() - 0.5) * 45,
            }}
            animate={{
              scaleX: animationPhase === 'intro' ? [0, 1, 0.8, 1] : 1,
              y: 0,
              rotate: 0,
            }}
            transition={{
              duration: animationPhase === 'intro' ? 2.5 : 0.8,
              delay: i * 0.08,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            {/* White layer - bright during intro, then breathes */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground to-transparent"
              initial={{ opacity: 0 }}
              animate={{
                opacity: animationPhase === 'intro'
                  ? [0, 0.8, 0.6, 0.2]
                  : [0.2, 0.25, 0.15, 0.25, 0.2],
              }}
              transition={{
                duration: animationPhase === 'intro' ? 2.5 : 5,
                delay: animationPhase === 'intro' ? i * 0.08 : i * 0.15,
                ease: [0.45, 0.05, 0.55, 0.95],
                repeat: animationPhase === 'main' ? Infinity : 0,
              }}
            />
            {/* Blue layer - fades in after intro, then breathes opposite to white */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ opacity: 0 }}
              animate={{
                opacity: animationPhase === 'intro'
                  ? 0
                  : [0.1, 0.25, 0.4, 0.25, 0.1],
              }}
              transition={{
                duration: 5,
                delay: animationPhase === 'main' ? i * 0.15 + 2.5 : 0,
                ease: [0.45, 0.05, 0.55, 0.95],
                repeat: animationPhase === 'main' ? Infinity : 0,
              }}
            />
          </motion.div>
        ))}

        {/* Vertical lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute h-full w-px"
            style={{ left: `${(i + 1) * 12.5}%` }}
            initial={{
              scaleY: 0,
              x: Math.random() * 200 - 100,
              rotate: (Math.random() - 0.5) * 45,
            }}
            animate={{
              scaleY: animationPhase === 'intro' ? [0, 1, 0.8, 1] : 1,
              x: 0,
              rotate: 0,
            }}
            transition={{
              duration: animationPhase === 'intro' ? 2.5 : 0.8,
              delay: i * 0.08,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            {/* White layer - bright during intro, then breathes */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground to-transparent"
              initial={{ opacity: 0 }}
              animate={{
                opacity: animationPhase === 'intro'
                  ? [0, 0.8, 0.6, 0.2]
                  : [0.2, 0.25, 0.15, 0.25, 0.2],
              }}
              transition={{
                duration: animationPhase === 'intro' ? 2.5 : 5,
                delay: animationPhase === 'intro' ? i * 0.08 : i * 0.15 + 0.1,
                ease: [0.45, 0.05, 0.55, 0.95],
                repeat: animationPhase === 'main' ? Infinity : 0,
              }}
            />
            {/* Blue layer - fades in after intro, then breathes opposite to white */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-primary to-transparent"
              initial={{ opacity: 0 }}
              animate={{
                opacity: animationPhase === 'intro'
                  ? 0
                  : [0.1, 0.25, 0.4, 0.25, 0.1],
              }}
              transition={{
                duration: 5,
                delay: animationPhase === 'main' ? i * 0.15 + 2.6 : 0,
                ease: [0.45, 0.05, 0.55, 0.95],
                repeat: animationPhase === 'main' ? Infinity : 0,
              }}
            />
          </motion.div>
        ))}

        {/* Flowing particles */}
        {animationPhase === 'intro' && [...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-foreground rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                window.innerWidth / 2 + (Math.random() - 0.5) * 400,
                window.innerWidth / 2,
              ],
              y: [
                Math.random() * window.innerHeight,
                window.innerHeight / 2 + (Math.random() - 0.5) * 400,
                window.innerHeight / 2,
              ],
              opacity: [0, 0.8, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.03,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}

        {/* Center burst effect */}
        {animationPhase === 'intro' && (
          <>
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`burst-${i}`}
                className="absolute top-1/2 left-1/2 origin-left h-px bg-gradient-to-r from-foreground to-transparent"
                style={{
                  rotate: `${i * 30}deg`,
                  width: '40%',
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{
                  scaleX: [0, 1, 0.5],
                  opacity: [0, 0.9, 0],
                }}
                transition={{
                  duration: 2,
                  delay: 1 + i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}
          </>
        )}

      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: animationPhase === 'main' ? 1 : 0 }}
        transition={{
          delay: animationPhase === 'main' ? 0 : 0,
          duration: 0.8,
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
          className="font-sans text-xl md:text-2xl text-muted-foreground mb-4"
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
          className="font-sans italic text-base md:text-lg text-muted-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Designing innovative mechanical systems and pushing the boundaries of engineering.
          <br />
          <span className="text-primary/60">Formula racing enthusiast, researcher, and builder.</span>
        </motion.p>

        {/* Scroll indicator */}
        {animationPhase === 'main' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: [0.45, 0.05, 0.55, 0.95]
              }}
              className="text-primary/50 text-sm font-sans"
            >
              <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent mx-auto mb-2" />
              Explore
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
