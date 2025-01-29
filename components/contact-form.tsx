"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-background rounded-2xl p-6 border"
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-1">Get in Touch</h2>
        <p className="text-sm text-muted-foreground">I'm always open to new opportunities. Feel free to reach out!</p>
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="Name" />
          <Input type="email" placeholder="Email" />
        </div>
        <Input placeholder="Subject" />
        <Textarea placeholder="Message" className="min-h-[120px]" />
        <Button className="w-full rounded-xl" size="lg" type="submit">
          Send Message
        </Button>
      </form>
    </motion.div>
  )
}

