import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const research = [
  {
    title: 'Research Project Alpha',
    description: 'Investigating advanced materials and their applications in mechanical systems.',
    period: '2024 - Present',
    topics: ['Materials Science', 'Mechanical Testing', 'Analysis'],
  },
  {
    title: 'Research Project Beta',
    description: 'Exploring computational methods for optimizing mechanical designs.',
    period: '2023 - 2024',
    topics: ['Computational Mechanics', 'Optimization', 'Simulation'],
  },
]

export default function Research() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-serif font-light text-5xl md:text-7xl mb-4">Research</h1>
        <p className="font-sans text-lg text-muted-foreground mb-12">
          Academic research and scholarly contributions in mechanical engineering.
        </p>

        <div className="space-y-8">
          {research.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="font-serif font-light text-2xl">
                      {item.title}
                    </CardTitle>
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                  </div>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {item.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="font-serif font-light text-2xl">Publications</CardTitle>
              <CardDescription>Academic papers and conference presentations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground italic">
                Publications list coming soon...
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}
