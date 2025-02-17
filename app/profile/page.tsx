"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const handleDownload = () => {
    const pdfUrl = "/resume.pdf";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "umeshsuwal-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

export default function ProfilePage() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
      <div className="bg-card rounded-2xl p-8 border">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-lg">
            <Image
              src="/user.jpeg"
              alt="Umesh Suwal"
              width={148}
              height={148}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Umesh Suwal</h1>
            <p className="text-xl text-muted-foreground mb-4">Student</p>
            <p className="text-muted-foreground mb-6 max-w-2xl">
            I am a passionate Computer Science student exploring the world of web design and development. 
            I enjoy experimenting with various frameworks and tech stacks to build modern, responsive, and user-friendly web applications. 
            Constantly learning and refining my skills, I aim to create intuitive digital experiences while staying up-to-date with the latest technologies.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={handleDownload}>Download Resume</Button>
              <Button variant="outline">Contact Me</Button>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 bg-card rounded-2xl p-8 border"
      >
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Bhaktapur Multiple Campus</h3>
            <p className="text-muted-foreground">Bachelor of Science in Computer Science and Information Technology</p>
            <p className="mt-2">
            I am currently pursuing a B.Sc. in Computer Science and Information Technology (B.Sc. CSIT) degree, from Bhaktapur Multiple Campus, located in Dudhpati, Bhaktapur, Nepal.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Bagiswori Secondary School</h3>
            <p className="text-muted-foreground">National Examination Board</p>
            <p className="mt-2">
              I completed my class 12 high school education at Bagiswori Secondary School - Bhaktapur, where I studied Science.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Bagiswori Secondary School</h3>
            <p className="text-muted-foreground">Secondary Education Examination</p>
            <p className="mt-2">
            I completed my class 10 education at Bagiswori Secondary Schhol, Chymhasinga, Bhaktapur.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

