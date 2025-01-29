"use client"

import { motion } from "framer-motion"
import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <main className="container pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto bg-white rounded-2xl p-8 border text-center"
        >
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
              <Image
                src="/placeholder.svg?height=96&width=96"
                alt="Profile"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold mb-2">Page not found.</h1>
            <p className="text-muted-foreground mb-6">The page does not exist</p>
            <div className="flex justify-center gap-4">
              <Button asChild className="rounded-xl">
                <Link href="/">Back to Home</Link>
              </Button>
              <Button variant="outline" asChild className="rounded-xl">
                <Link href="/contact">See My Work</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

