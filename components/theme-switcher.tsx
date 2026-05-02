"use client"

import { useState, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Moon, Sun } from 'lucide-react'

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check if dark mode is already set in localStorage
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch id="theme-mode" checked={isDarkMode} onCheckedChange={toggleTheme} />
      <Label htmlFor="theme-mode" className="flex items-center space-x-2">
        {isDarkMode ? (
          <>
            <Moon className="h-4 w-4" />
            {/* <span>Dark Mode</span> */}
          </>
        ) : (
          <>
            <Sun className="h-4 w-4" />
            {/* <span>Light Mode</span> */}
          </>
        )}
      </Label>
    </div>
  )
}