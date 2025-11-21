import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const drivetrainProjects = [
  {
    title: 'Wheel Center Design Project',
    timeframe: '2025 season prep',
    role: 'Sole Mechanical Designer & Analyst',
    tools: ['SolidWorks', 'FEA', 'DFM', 'CNC Machining', 'Materials Selection'],
    overview:
      'Developed an 8-spoke aluminum wheel center that meets weight, stiffness, and manufacturability constraints for the BFR drivetrain.',
    media: [
      { src: '/images/BFR/1- Wheel Hub.png', caption: 'Final exterior render highlighting spoke geometry' },
      { src: '/images/BFR/2- Wheel Hub.png', caption: 'Pocketing strategy for mass reduction' },
      { src: '/images/BFR/3- Wheel Hub.png', caption: 'Hub region with fillets and lug holes' },
      { src: '/images/BFR/4- Wheel Hub.png', caption: 'Section view of load paths and wall thickness' },
      { src: '/images/BFR/5 - Wheel Hub.png', caption: 'Cutaway showing weight-relief slots' },
    ],
    sections: [
      {
        title: 'Problem Definition',
        items: [
          'Target weight below 0.33 lbs while maintaining ≥1.3 factor of safety.',
          'Limit tip displacement to ≤0.5 mm under peak loads of 687 lbf torque, 185 lbf (Y), and 296 lbf (Z).',
          'Ensure geometry is fully manufacturable on 3-axis CNC equipment.',
        ],
      },
      {
        title: 'Design Execution',
        items: [
          'Modeled a lightweight 8-spoke layout with load paths tuned for torque and lateral stiffness.',
          'Selected 7075-T6 aluminum for high specific strength and machinability.',
          'Integrated fillets, lug hole placement, and weight-reduction slots to balance rigidity and mass.',
          'Applied GD&T to critical interfaces to preserve alignment through machining and assembly.',
        ],
      },
      {
        title: 'Stress Analysis & Results',
        items: [
          'FEA captured Von Mises stress distribution, deflection, and combined loading cases.',
          'Iterative optimization removed non-load-bearing material while increasing fillet radii.',
          'Final metrics: 0.32994 lbs, factor of safety 1.377, max displacement 0.6819 mm.',
        ],
      },
    ],
  },
  {
    title: 'FSAE Tripod Housing Development — Inboard & Outboard Joints',
    timeframe: 'Fall 2025 – Present',
    role: 'Manufacturing Lead & Design Research Engineer (Drivetrain Subteam)',
    tools: ['ANSYS', 'SolidWorks', 'Lathe', 'CNC', 'EDM', 'Materials Research'],
    overview:
      'Ongoing effort to understand, manufacture, and eventually redesign the tripod housings that couple the driveshaft to the differential.',
    sections: [
      {
        title: 'Design Research',
        items: [
          'Mapped load transfer between tripod trunnions and housing channels using Hertzian contact theory.',
          'Studied bolt preload, compression zones, and surface interactions that govern wear and fatigue.',
          'Documented sensitivity of contact patches to small changes in radius, width, and surface finish.',
        ],
      },
      {
        title: 'Simulation & Verification',
        items: [
          'Established ANSYS workflows for contact stress, bolt preload, and displacement studies.',
          'Ran convergence checks and meshing strategies that can be reused for the redesign.',
          'Framed future upgrades around higher engine torque inputs and lateral loading scenarios.',
        ],
      },
      {
        title: 'Manufacturing Leadership',
        items: [
          'Leading the fabrication pipeline spanning lathe work, CNC milling, and EDM for tight internal geometries.',
          'Coordinating tooling access, fixturing, and tolerance control with the design team.',
          'Preparing documentation so the next design iteration can move quickly once new load cases are finalized.',
        ],
      },
    ],
  },
]

const skillHighlights = [
  'Manual lathe operations: facing, turning, drilling, parting, and tolerance control.',
  'Vertical mill workflows: squaring stock, pocketing, drilling patterns, slotting, edge finishing.',
  'Bandsaw, drill press, sanding, and deburring techniques for safe stock prep and refinement.',
  'Fabricated go/no-go gauge plates used for jigging and quality control with metrology verification.',
  'Hands-on experience informs DFM decisions and bridges the gap between CAD intent and shop realities.',
]

const machiningShowcase = {
  src: '/images/BFR/1 - Machining.HEIC',
  caption: 'Machining workflows for drivetrain hardware',
}

export default function BerkeleyFormula() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div>
          <h1 className="font-serif font-light text-5xl md:text-7xl mb-4">Berkeley Formula Racing</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl">
            Designing and machining drivetrain hardware for UC Berkeley&apos;s Formula SAE program. I focus on structural components that
            translate power reliably while remaining manufacturable within our student shop.
          </p>
        </div>

        <div className="space-y-10">
          {drivetrainProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:border-primary/70 transition-colors">
                <CardHeader className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-muted-foreground/70">
                    <span>{project.timeframe}</span>
                    <Separator orientation="vertical" className="h-4" />
                    <span>{project.role}</span>
                  </div>
                  <CardTitle className="font-serif font-light text-3xl">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.overview}</CardDescription>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {project.media && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {project.media.map((asset) => (
                        <motion.figure key={asset.src} whileHover={{ scale: 1.02 }} className="rounded-lg overflow-hidden border">
                          <img src={asset.src} alt={asset.caption} className="w-full h-48 object-cover" loading="lazy" />
                          <figcaption className="px-3 py-2 text-sm text-muted-foreground">{asset.caption}</figcaption>
                        </motion.figure>
                      ))}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {project.sections.map((section) => (
                      <div key={`${project.title}-${section.title}`}>
                        <h3 className="font-serif font-medium text-xl mb-3">{section.title}</h3>
                        <ul className="space-y-2 text-muted-foreground leading-relaxed">
                          {section.items.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card>
            <CardHeader>
              <CardTitle className="font-serif font-light text-2xl">Machining Skills & Fabrication Development</CardTitle>
              <CardDescription>
                Translating CAD intent to the shop floor strengthens manufacturability decisions across every subsystem.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                {skillHighlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <motion.figure
                className="mt-8 rounded-xl overflow-hidden border bg-background/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <img src={machiningShowcase.src} alt={machiningShowcase.caption} className="w-full h-64 object-cover" loading="lazy" />
                <figcaption className="px-4 py-3 text-sm text-muted-foreground">{machiningShowcase.caption}</figcaption>
              </motion.figure>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
