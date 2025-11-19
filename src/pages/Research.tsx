import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const researchInitiatives = [
  {
    title: 'Acoustic Holography Research — Piezoelectric Transducer Experimental Setup',
    affiliation: 'Liwei Lin Lab, UC Berkeley',
    period: 'Fall 2025 – Present',
    role: 'Undergraduate Researcher (Experimental Design & Prototyping)',
    tools: ['SolidWorks', '3D Printing', 'Acrylic Fabrication', 'PCB Integration', 'Experimental Design'],
    overview:
      'Designing the experimental platform that will enable acoustic hologram testing, cell imaging, and acoustic field validation using piezoelectric transducers.',
    media: [
      { src: '/images/Research/1 - Setup.png', caption: 'Base platform concept with transducer mount' },
      { src: '/images/Research/2 - Setup.png', caption: 'Acrylic tank and alignment fixture study' },
    ],
    sections: [
      {
        title: 'Problem & Constraints',
        items: [
          'Precisely align a petri dish above a PCB-mounted piezo transducer inside a water-filled acoustic tank.',
          'Maintain optical clarity for imaging while minimizing mechanical noise and vibrations.',
          'Enable modular swaps of custom acoustic holograms (phase plates) and future hardware revisions.',
        ],
      },
      {
        title: 'Design Process',
        items: [
          'Created a 3D-printed base with datum features for the PCB, transducer, and hologram fixtures.',
          'Modeled acrylic tank walls focusing on rigidity, optical clarity, and easy sealing for water testing.',
          'Developed a petri-dish holder that maintains consistent height and alignment during microscopy.',
          'Planned for water depth, standing-wave behavior, imaging angle, and attenuation constraints.',
        ],
      },
      {
        title: 'Current Work & Next Steps',
        items: [
          'Integrating the base assembly with the transducer PCB and validating mechanical alignment.',
          'Preparing the water tank, running preliminary cell-movement trials, and characterizing optical performance.',
          'Designing 3D-printed acoustic holograms to target specific field distributions.',
          'Iterating geometries, materials, and multi-layer hologram concepts once acoustic data is collected.',
        ],
      },
      {
        title: 'Outcome (In Progress)',
        items: [
          'Built foundational infrastructure for acoustic hologram testing with controllable alignment.',
          'Enabled visualization of cell patterns formed by acoustic fields.',
          'Established workflows that blend wave mechanics, PCB integration, and bio-acoustic experimentation.',
        ],
      },
    ],
  },
]

export default function Research() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div>
          <h1 className="font-serif font-light text-5xl md:text-7xl mb-4">Research</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl">
            Translating acoustic physics into hands-on experimental rigs. Current work focuses on piezoelectric transducers that sculpt
            acoustic fields to manipulate biological cells.
          </p>
        </div>

        {researchInitiatives.map((project) => (
          <Card key={project.title} className="hover:border-primary/70 transition-colors">
            <CardHeader className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-muted-foreground/70">
                <span>{project.period}</span>
                <Separator orientation="vertical" className="h-4" />
                <span>{project.role}</span>
              </div>
              <CardTitle className="font-serif font-light text-3xl">{project.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">{project.overview}</CardDescription>
              <p className="text-sm text-muted-foreground">Affiliation: {project.affiliation}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {tool}
                  </span>
                ))}
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.media.map((asset) => (
                  <motion.figure key={asset.src} whileHover={{ scale: 1.02 }} className="rounded-lg overflow-hidden border">
                    <img src={asset.src} alt={asset.caption} className="w-full h-48 object-cover" loading="lazy" />
                    <figcaption className="px-3 py-2 text-sm text-muted-foreground">{asset.caption}</figcaption>
                  </motion.figure>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        ))}
      </motion.div>
    </div>
  )
}
