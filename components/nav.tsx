"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, Mail, User, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ThemeSelector } from "./theme-selector";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-sm border-b"
    >
      <div className="container max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
        <Image
          src="/logo.png"
          alt="Logo"
          width={48}
          height={48}
          className="object-fill m-[-8px]"
        />
        
        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="p-2 rounded-full hover:bg-accent">
            <Home className="w-6 h-6" />
          </Link>
          <Link href="/profile" className="p-2 rounded-full hover:bg-accent">
            <User className="w-6 h-6" />
          </Link>
          <Link href="/projects" className="p-2 rounded-full hover:bg-accent">
            <Briefcase className="w-6 h-6" />
          </Link>
          <Link href="/contact" className="p-2 rounded-full hover:bg-accent">
            <Mail className="w-6 h-6" />
          </Link>
        </div>
        <div className="hidden md:block">
        <ThemeSelector />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/90 backdrop-blur-sm border-b p-4 flex flex-col items-center space-y-4">
          <Link href="/" className="p-2 rounded hover:bg-accent" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/profile" className="p-2 rounded hover:bg-accent" onClick={() => setIsOpen(false)}>
            Profile
          </Link>
          <Link href="/projects" className="p-2 rounded hover:bg-accent" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="/contact" className="p-2 rounded hover:bg-accent" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </motion.nav>
  );
}