import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, FileText } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Footer from '../components/Footer'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'gabriel.rayos@berkeley.edu',
    link: 'mailto:gabriel.rayos@berkeley.edu',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Gabriel Rayos',
    link: 'https://linkedin.com/in/gabriel-rayos',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@gabrielrayos',
    link: 'https://github.com/gabrielrayos',
  },
  {
    icon: FileText,
    label: 'Resume',
    value: 'Download CV',
    link: '#',
  },
]

const springConfig = { type: 'spring', stiffness: 100, damping: 15, mass: 0.8 }

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ...springConfig,
          opacity: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }}
        className="max-w-4xl w-full"
      >
        <div className="text-center mb-12">
          <h1 className="font-serif font-light text-5xl md:text-7xl mb-4">Get in Touch</h1>
          <p className="font-sans text-lg italic text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or learning more about my work?
            <br />
            <span className="text-primary/60">Let's connect and explore opportunities together.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.a
                key={method.label}
                href={method.link}
                target={method.label !== 'Email' ? '_blank' : undefined}
                rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 120,
                  damping: 18
                }}
                whileHover={{
                  y: -12,
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
              >
                <Card className="h-full hover:border-primary transition-all cursor-pointer relative overflow-hidden group">
                  {/* Animated background gradient on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />

                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-4 mb-2">
                      <motion.div
                        whileHover={{
                          rotate: [0, -10, 10, -10, 0],
                          transition: { duration: 0.5 }
                        }}
                        className="p-3 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors"
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <CardTitle className="font-serif font-light text-2xl group-hover:text-primary transition-colors">
                        {method.label}
                      </CardTitle>
                    </div>
                    <CardDescription className="leading-relaxed text-base">
                      {method.value}
                    </CardDescription>
                  </CardHeader>

                  {/* Corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/50 transition-all"
                    initial={false}
                  />
                </Card>
              </motion.a>
            )
          })}
        </div>

        {/* Additional note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="font-sans text-sm text-muted-foreground/60">
            Currently based in Berkeley, CA
          </p>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
