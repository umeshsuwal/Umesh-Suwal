"use client"

import { motion } from "framer-motion"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
      <div className="bg-card rounded-2xl p-6 border">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
            <p className="text-muted-foreground mb-8">
              I'm always open to new opportunities. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <span>user_umesh@proton.me</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary" />
                <span>+977 986-1488885</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Bhaktapur, Nepal</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </motion.div>
  )
}

