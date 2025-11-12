import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const projects = [
  {
    title: 'Project One',
    description: 'Description of an amazing project showcasing mechanical engineering skills.',
    tags: ['CAD', 'Simulation', 'Manufacturing'],
  },
  {
    title: 'Project Two',
    description: 'Another innovative project demonstrating technical expertise.',
    tags: ['Design', 'Analysis', 'Prototyping'],
  },
  {
    title: 'Project Three',
    description: 'A cutting-edge project pushing boundaries in mechanical engineering.',
    tags: ['Robotics', 'Control Systems', 'Testing'],
  },
]

const springConfig = { type: 'spring', stiffness: 100, damping: 15, mass: 0.8 }

export default function Projects() {
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
        <h1 className="font-serif font-light text-5xl md:text-7xl mb-4">Projects</h1>
        <p className="font-sans text-lg text-muted-foreground mb-12">
          A collection of work showcasing engineering solutions and innovations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
                  <CardTitle className="font-serif font-light text-2xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.5, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                          delay: index * 0.1 + i * 0.05,
                          type: 'spring',
                          stiffness: 200,
                          damping: 15
                        }}
                        whileHover={{
                          scale: 1.1,
                          transition: { type: 'spring', stiffness: 400, damping: 15 }
                        }}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>

                {/* Corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/50 transition-all"
                  initial={false}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
