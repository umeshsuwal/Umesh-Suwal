"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ContactForm } from "@/components/contact-form"
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

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
      <div className="bg-card rounded-2xl p-6 border mb-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">I'm Umesh Suwal</h1>
            <p className="text-muted-foreground">
              Student of Bsc.CSIT at Tribhuvan University.
              <br />
              Currently learning Web Designing.
            </p>
          </div>
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-background shadow-lg mr-2 mt-2 mb-[-32px]">
            <Image
              src="/umesh.jpg"
              alt="Profile"
              width={176}
              height={176}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <Button asChild className="rounded-xl">
            <Link href="/contact">Hire Me</Link>
          </Button>
          <Button variant="outline" className="rounded-xl" >
            <Link href="mailto:user_umesh@proton.me">Send Mail</Link>
          </Button>
        </div>
      </div>

      <div className="bg-card rounded-2xl p-6 border mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Projects</h2>
          <Button variant="ghost" asChild className="text-sm">
            <Link href="/projects">View All</Link>
          </Button>
        </div>
        <div className="space-y-3">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <ProjectCard title={project.title} description={project.description} icon={project.icon} />
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-card rounded-2xl p-6 border">
        <ContactForm />
      </div>
    </motion.div>
  )
}

