"use client"

import * as React from "react"
import { Palette } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { themes } from "@/lib/themes"

export function ThemeSelector() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full">
          <Palette className="h-10 w-10" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[280px] z-30">
        <DropdownMenuLabel>Choose a theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="p-2">
          <div className="grid grid-cols-2 gap-2">
            {themes.map((t) => (
              <Button
                key={t.name}
                variant="outline"
                size="sm"
                className={`w-full p-2 flex items-center justify-center hover:bg-accent ${
                  theme === t.name ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setTheme(t.name)}
              >
                <span className="text-sm font-medium">{t.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

