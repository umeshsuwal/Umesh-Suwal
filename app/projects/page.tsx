"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import Link from "next/link"

const projects = [
  {
    title: "Dictionary App",
    description: "Dictionary Api, English Dictionary",
    icon: "/projects/dictionary-icon.png",
    slug: "dictionary",
  },
  {
    title: "Calculatoria",
    description: "Unit/Currency-Converter, Calculator",
    icon: "/projects/calculatoria-icon.png",
    slug: "calculatoria",
  },
  {
    title: "Notes App",
    description: "Instant Notes, Online Notes",
    icon: "/projects/notes-icon.png",
    slug: "notes",
  },
]

export default function ProjectsPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
      <div className="bg-card rounded-2xl p-6 border">
        <h1 className="text-3xl font-bold mb-8">My Projects</h1>
        <div className="space-y-3">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <ProjectCard title={project.title} description={project.description} icon={project.icon} />
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

