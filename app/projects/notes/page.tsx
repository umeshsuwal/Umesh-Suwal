"use client"

import { motion } from "framer-motion"
import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function RectangleProject() {
  const project = {
    title: "Notes App",
    framework: "React, Tailwind Css",
    tech: "TypeScript + Vite",
    type: "Notes App",
    image: "/projects/notes-app.png",
    description:
      "A note have specially i created to store my poems, quotes and notes with the themes feature that makes the looks beautiful and fun to use",
    icon: "/projects/notes-icon.png",
    live: "https://notes-app-by-umesh.vercel.app/",
  }

  return (
    <div className="min-h-screen pb-8 bg-gray-50">
      <Nav />
      <main className="container pt-24">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-background rounded-2xl p-8 border">
          <div className="grid md:grid-cols-2 gap-12">
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
              <Button className="rounded-xl"><Link href={project.live}>Visit Website</Link></Button>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.tech}
                width={600}
                height={400}
                className="rounded-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

