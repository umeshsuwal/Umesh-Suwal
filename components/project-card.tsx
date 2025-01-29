"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  icon: string
}

export function ProjectCard({ title, description, icon }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }} className="cursor-pointer">
      <div className="group flex items-center justify-between p-4 my-2 bg-background rounded-2xl border hover:shadow-sm transition-shadow">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-primary/10 flex items-center justify-center">
            <Image src={icon || "/projects/default.png"} alt={title} width={44} height={44} className="object-cover overflow-hidden" />
          </div>
          <div>
            <h3 className="font-medium text-base">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
      </div>
    </motion.div>
  )
}

