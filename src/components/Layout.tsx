import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/berkeley-formula', label: 'Berkeley Formula' },
  { path: '/research', label: 'Research' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
]

const resumeLink = { path: '/Gabriel Rayos - Resume.pdf', label: 'Resume' }

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Desktop Navigation */}
      <header 
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-8 py-6 transition-all duration-300 ${
          isHome ? 'bg-transparent' : 'bg-background/80 backdrop-blur-md border-b border-white/5'
        }`}
      >
        <Link to="/" className="text-xl font-serif font-bold tracking-tight hover:text-primary transition-colors z-50">
          GR
        </Link>

        <nav className="flex items-center gap-8">
          {navLinks.filter(l => l.path !== '/').map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-widest uppercase transition-colors relative group ${
                location.pathname === link.path ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
            </Link>
          ))}
          <a
            href={resumeLink.path}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors border border-white/10 hover:border-primary/50 px-4 py-2 rounded-full"
          >
            {resumeLink.label}
          </a>
        </nav>
      </header>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <div className="relative">
              {isHome && !isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.15, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
                />
              )}
              <Button
                variant="outline"
                size="icon"
                className="relative rounded-full border-2 hover:border-primary hover:bg-primary/10 transition-all"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-background border-l-2 border-border">
            <nav className="flex flex-col gap-6 mt-12">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`group relative font-serif font-light text-3xl transition-colors ${
                        isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
              >
                 <a
                  href={resumeLink.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="group relative font-serif font-light text-3xl transition-colors text-foreground hover:text-primary block mt-4"
                >
                  {resumeLink.label}
                </a>
              </motion.div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Page Content */}
      <main className={`flex-grow ${!isHome ? 'pt-24' : ''}`}>
        {children}
      </main>
    </div>
  )
}
