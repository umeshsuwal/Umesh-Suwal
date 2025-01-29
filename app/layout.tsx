import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Nav } from "@/components/nav"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Umesh Suwal",
  description: "Personal portfolio showcasing my skills and projects",
  icons: {
    icon: '/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background text-foreground">
            <Nav />
            <main className="container max-w-3xl mx-auto px-4 pt-24 pb-8">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

