import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

type ProjectSection = {
  id: string
  title: string
  timeframe: string
  role: string
  tools: string[]
  overview: string
  media?: { src: string; caption: string }[]
  sections: {
    title: string
    items: string[]
  }[]
  notes?: string
}

const projectSections: ProjectSection[] = [
  {
    id: 'vendi',
    title: 'Vendi — Compact Snack Vending Machine',
    timeframe: 'Feb 2025 – May 2025',
    role: 'Hardware & Mechanical Design Team (CAD + Manufacturing)',
    tools: ['OnShape', 'DFM/DFA', 'CAD', 'Manufacturing', 'Arduino'],
    overview:
      'A compact vending machine built by an interdisciplinary student team. I owned the mechanical design of the frame, enclosure, and dispensing hardware while coordinating closely with the electronics group.',
    media: [
      { src: '/images/Personal Projects/-1 - Vendi.png', caption: 'Exterior rendering focused on user interface' },
      { src: '/images/Personal Projects/-2 Vendi.png', caption: 'Frame layout and enclosure proportions' },
      { src: '/images/Personal Projects/-3 Vendi.jpg', caption: 'Detail of the spiral-coil dispensing mechanism' },
    ],
    sections: [
      {
        title: 'Design Process',
        items: [
          'Modeled the structural frame in OnShape with DFM/DFA principles to reduce part count and simplify fabrication.',
          'Integrated the spiral-coil dispensing mechanism and tuned drop paths for reliable snack delivery.',
          'Owned enclosure, bracket, and alignment features that keep internal assemblies serviceable.',
          'Collaborated with the controls team to accommodate Arduino-driven servos, wiring runs, and UI hardware.',
          'Supported fabrication/assembly to keep CAD intent aligned with the physical build.',
        ],
      },
      {
        title: 'Technical Decisions & Outcome',
        items: [
          'Added front and rear access doors to streamline restocking and maintenance workflows.',
          'Designed a secure retrieval door that prevents back-feeding but still feels smooth to the user.',
          'Optimized internal geometry for servo mounts, cable management, and consistent coil rotation.',
          'Validated 100% dispensing reliability through repeated test cycles.',
          'Improved serviceability via simplified internals and accessible panel layouts.',
        ],
      },
    ],
  },
  {
    id: 'line-following-robot',
    title: 'Autonomous Line-Following Robot',
    timeframe: 'Jul 2025 – Aug 2025',
    role: 'Sole Designer, Fabricator & Programmer',
    tools: ['SolidWorks', 'Arduino', '3D Printing'],
    overview:
      'A palm-sized platform that detects and follows taped paths using a custom chassis, IR sensor array, and Arduino logic.',
    media: [
      { src: '/images/Personal Projects/_1 - Line Following Robot.HEIC', caption: '3D-printed chassis with IR sensor array' },
      { src: '/images/Personal Projects/_2 Line Following Robot.HEIC', caption: 'Electronics packaging and drivetrain layout' },
    ],
    sections: [
      {
        title: 'Design & Build',
        items: [
          'Modeled a compact chassis in SolidWorks with mounting bosses for motors, PCB, and sensor bar.',
          '3D printed multiple iterations to dial in stiffness around motor mounts while minimizing weight.',
          'Prototyped wiring harnesses and quick-swap battery mounts for rapid testing loops.',
          'Programmed forward, stop, and turning behaviors in Arduino; tuned thresholds per sensor channel.',
        ],
      },
      {
        title: 'Technical Notes & Outcome',
        items: [
          'Identified instability from inconsistent IR sensors under varied lighting—key insight for next revision.',
          'Collected performance data that validated the control logic despite sensor limitations.',
          'Achieved partial autonomous navigation with clear path-following proof-of-concept.',
          'Planned upgrades focus on higher-quality sensor modules and refined PID tuning.',
        ],
      },
    ],
  },
  {
    id: 'wind-turbine',
    title: 'Miniature Wind Turbine',
    timeframe: 'Feb 2025 – May 2025',
    role: 'Mechanical Designer & Structural Analyst',
    tools: ['SolidWorks', 'FEA', '3D Printing'],
    overview:
      'Developed a fully functional 3-blade turbine with a 16-inch tower, enclosed generator housing, and validated aero/structural performance.',
    media: [
      { src: '/images/Personal Projects/.1 - Wind Turbine.jpg', caption: 'Benchtop test of the assembled turbine with instrumentation' },
      { src: '/images/Personal Projects/.2 - Wind Turbine.png', caption: 'Tower CAD render highlighting the helical support structure' },
      { src: '/images/Personal Projects/.3 - Wind Turbine.png', caption: 'Blade detail showing custom airfoil profile and root interface' },
      { src: '/images/Personal Projects/.4 - Wind Turbine.png', caption: 'Drawing sheet capturing key dimensions and tolerances' },
    ],
    sections: [
      {
        title: 'Design & Analysis',
        items: [
          'Modeled aerodynamic blades, tower, and housing in SolidWorks with tailored airfoil geometry.',
          'Researched angles of attack and blade pitch to maximize power output from a compact footprint.',
          'Used FEA to refine stiffness-to-weight ratio and ensure stability at high RPM.',
        ],
      },
      {
        title: 'Testing Metrics',
        items: [
          'Wind speed test at 25 mph produced 5354 rpm, 3.38 V, and 0.394 W output.',
          'Achieved 5.88 N/mm stiffness after iterative reinforcement of critical sections.',
          'Demonstrated strong correlation between blade geometry, stiffness, and electrical performance.',
        ],
      },
    ],
  },
  {
    id: 'bed-stand',
    title: 'Multipurpose Attachable Bed Stand',
    timeframe: 'Feb 2025 – May 2025',
    role: 'Sole Designer (Concept → CAD → Analysis)',
    tools: ['SolidWorks', 'GD&T', 'FEA', 'DFM/DFA', '3D Printing'],
    overview:
      'A bedside accessory that clamps onto common bed frames to hold everyday items—designed for stability, compactness, and 3D-printable manufacturing.',
    media: [
      { src: '/images/Personal Projects/1 - Bedstand.png', caption: 'Overall assembly render with clamped fit' },
      { src: '/images/Personal Projects/2- Bed Stand.png', caption: 'Exploded view showing modular trays' },
      { src: '/images/Personal Projects/3 - Bedstand.png', caption: 'Detail of adjustable clamp interface' },
    ],
    sections: [
      {
        title: 'Design Process',
        items: [
          'Created an adjustable clamping mechanism compatible with multiple bed frame profiles.',
          'Generated detailed part drawings with GD&T to ensure precise mating surfaces.',
          'Applied DFM/DFA to keep the design fully 3D-printable with minimal support material.',
          'Ran FEA on load-bearing members to confirm deflection and stress limits.',
        ],
      },
      {
        title: 'Outcome',
        items: [
          'Delivered a functional, user-friendly stand with dedicated zones for phone, earbuds, bottle, and charging cable.',
          'Geometry and tolerances support repeatable prints and easy assembly.',
          'Validated clamp stability and ergonomic access during bedside use.',
        ],
      },
    ],
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
          opacity: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        }}
      >
        <h1 className="font-serif font-light text-5xl md:text-7xl mb-4">Projects</h1>
        <p className="font-sans text-lg text-muted-foreground mb-12 max-w-3xl">
          Personal builds that move from concept to validated hardware. Each project links CAD, analysis, manufacturing, and testing to
          produce tangible results.
        </p>

        <div className="space-y-16">
          {projectSections.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, type: 'spring', stiffness: 120, damping: 18 }}
            >
              <Card className="hover:border-primary/70 transition-colors">
                <CardHeader className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-wide text-muted-foreground/80">
                    <span>{project.timeframe}</span>
                    <Separator orientation="vertical" className="h-4" />
                    <span>{project.role}</span>
                  </div>
                  <CardTitle className="font-serif font-light text-3xl">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.overview}</CardDescription>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {project.media && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {project.media.map((asset) => (
                        <motion.figure
                          key={asset.src}
                          whileHover={{ scale: 1.02 }}
                          className="rounded-lg overflow-hidden border bg-muted/20"
                        >
                          <img src={asset.src} alt={asset.caption} className="w-full h-48 object-cover" loading="lazy" />
                          <figcaption className="px-3 py-2 text-sm text-muted-foreground">{asset.caption}</figcaption>
                        </motion.figure>
                      ))}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.sections.map((section) => (
                      <div key={`${project.id}-${section.title}`}>
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

                  {project.notes && (
                    <p className="text-sm text-muted-foreground/80 italic border-t pt-4">{project.notes}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
