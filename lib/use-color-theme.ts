"use client"

import { useState, useEffect } from "react"

export interface ColorTheme {
  name: string
  primary: string
  secondary: string
  accent: string
  background: string
}

const defaultColorThemes: ColorTheme[] = [
  {
    name: "Ocean",
    primary: "#4f46e5",
    secondary: "#06b6d4",
    accent: "#0891b2",
    background: "from-blue-950 to-cyan-950",
  },
  {
    name: "Sunset",
    primary: "#f59e0b",
    secondary: "#ef4444",
    accent: "#ec4899",
    background: "from-orange-950 to-red-950",
  },
  {
    name: "Forest",
    primary: "#059669",
    secondary: "#10b981",
    accent: "#14b8a6",
    background: "from-emerald-950 to-teal-950",
  },
  {
    name: "Purple",
    primary: "#8b5cf6",
    secondary: "#a855f7",
    accent: "#c084fc",
    background: "from-purple-950 to-violet-950",
  },
]

export function useColorTheme() {
  const [colorTheme, setColorTheme] = useState<ColorTheme>(defaultColorThemes[0])

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("colorTheme")
    if (savedTheme) {
      try {
        const parsed = JSON.parse(savedTheme)
        setColorTheme(parsed)
      } catch (error) {
        console.error("Failed to parse saved theme:", error)
      }
    }
  }, [])

  const changeColorTheme = (newTheme: ColorTheme) => {
    setColorTheme(newTheme)
    localStorage.setItem("colorTheme", JSON.stringify(newTheme))
    
    // Update CSS custom properties
    const root = document.documentElement
    root.style.setProperty("--theme-primary", newTheme.primary)
    root.style.setProperty("--theme-secondary", newTheme.secondary)
    root.style.setProperty("--theme-accent", newTheme.accent)
  }

  return {
    colorTheme,
    changeColorTheme,
    availableThemes: defaultColorThemes
  }
}