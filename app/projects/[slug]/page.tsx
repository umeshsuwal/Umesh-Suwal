"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useParams } from "next/navigation"
import Link from "next/link"

const projects = {
  dictionary: {
    title: "Dictionary App",
    framework: "React, Tailwind Css",
    tech: "Vite + Dictionary Api",
    type: "Dictionary App, English Dictionary",
    image: "/projects/dictionary.png",
    description:
      "A English Dictionary App Created Using React JS ,Tailwind CSS and dictionary API",
    icon: "/projects/dictionary-icon.png",
    live: "https://dictionary-app-english.netlify.app/",
  },
  calculatoria: {
    title: "Calculatoria",
    framework: "Tailwind Css , React",
    tech: "Vite",
    type: "Unit/Currency-Converter App, Calculator App",
    image: "/projects/calculatoria.png",
    description:
      "A Calculator App Created Using React JS, Tailwind CSS with feature of Unit Converter and Currency Converter",
    icon: "/projects/calculatoria-icon.png",
    live: "https://calculatoria.vercel.app/",
  },
  notes: {
    title: "Notes App",
    framework: "React, Tailwind Css",
    tech: "TypeScript + Vite",
    type: "Notes App",
    image: "/projects/notes-app.png",
    description:
      "A note have specially i created to store my poems, quotes and notes with the themes feature that makes the looks beautiful and fun to use",
    icon: "/projects/notes-icon.png",
    live: "https://notes-app-by-umesh.vercel.app/",
  },
}

export default function ProjectDetail() {
  const params = useParams()
  const slug = params.slug as string
  const project = projects[slug as keyof typeof projects]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
      <div className="bg-background rounded-2xl p-8 border">
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Frameworks</p>
              <p className="font-medium">{project.framework}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Tech</p>
              <p className="font-medium">{project.tech}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Project Type</p>
              <p className="font-medium">{project.type}</p>
            </div>
          </div>

          <div>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border-1 border-background mb-4">
              <Image src={project.icon} alt={project.tech} width={54} height={54} className="overflow-hidden rounded-xl"/>
            </div>
            <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
            <p className="text-muted-foreground">{project.description}</p>
          </div>

          <Image
            src={project.image || "/projects/default.png"}
            alt={project.tech}
            width={600}
            height={400}
            className="rounded-xl w-full"
          />

          <Button className="rounded-xl"><Link href={project.live}>Visit Website</Link></Button>
        </div>
      </div>
    </motion.div>
  )
}

