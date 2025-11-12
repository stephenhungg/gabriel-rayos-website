import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function BerkeleyFormula() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-serif font-light text-5xl md:text-7xl mb-4">Berkeley Formula Racing</h1>
        <p className="font-sans text-lg text-muted-foreground mb-12">
          Building high-performance formula-style race cars from the ground up.
        </p>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif font-light text-3xl">Team Overview</CardTitle>
              <CardDescription>
                Competing in Formula SAE events with cutting-edge engineering solutions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Berkeley Formula Racing is a student-run organization that designs, builds, and races
                formula-style vehicles. The team brings together students from various engineering
                disciplines to create competitive race cars that push the boundaries of performance
                and innovation.
              </p>
            </CardContent>
          </Card>

          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif font-light">Role & Contributions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Subsystem design and analysis</li>
                  <li>• CAD modeling and simulation</li>
                  <li>• Manufacturing and assembly</li>
                  <li>• Testing and optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-serif font-light">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Competition participation and results</li>
                  <li>• Technical innovations implemented</li>
                  <li>• Performance improvements achieved</li>
                  <li>• Team collaboration and leadership</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
