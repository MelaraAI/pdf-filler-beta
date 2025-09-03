"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AgentCard } from "@/app/components/agent-card"
import { useTheme } from "next-themes"
import Image from "next/image"
import UserSettings from "@/app/components/user-settings"

interface ColorTheme {
  name: string
  primary: string
  secondary: string
  accent: string
  background: string
}

const defaultTheme: ColorTheme = {
  name: "Ocean",
  primary: "#4f46e5",
  secondary: "#06b6d4",
  accent: "#0891b2",
  background: "from-blue-950 to-cyan-950",
}

export default function Dashboard() {
  const { theme } = useTheme()
  const [colorTheme, setColorTheme] = useState<ColorTheme>(defaultTheme)

  useEffect(() => {
    const saved = localStorage.getItem("colorTheme")
    if (saved) {
      try {
        setColorTheme(JSON.parse(saved))
      } catch (error) {
        console.error("Failed to parse saved theme:", error)
        setColorTheme(defaultTheme)
        localStorage.setItem("colorTheme", JSON.stringify(defaultTheme))
      }
    } else {
      setColorTheme(defaultTheme)
      localStorage.setItem("colorTheme", JSON.stringify(defaultTheme))
    }
  }, [])

  const handleThemeChange = (newTheme: ColorTheme) => {
    setColorTheme(newTheme)
    localStorage.setItem("colorTheme", JSON.stringify(newTheme))
  }

  const pdfTools = [
    {
      id: "pdf-filler",
      title: "PDF Form Filler",
      description: "Automatically fill PDF forms with intelligent field detection",
      icon: "📝",
      iconBg: "bg-blue-600",
      isPro: false,
      route: "/pdf-components/dashboard"
    },
    {
      id: "pdf-merger",
      title: "PDF Merger",
      description: "Combine multiple PDFs into a single document",
      icon: "🔗",
      iconBg: "bg-green-500",
      isPro: true,
    },
    {
      id: "pdf-splitter",
      title: "PDF Splitter",
      description: "Split large PDFs into individual pages or sections",
      icon: "✂️",
      iconBg: "bg-orange-500",
      isPro: true,
    },
  ]

  const advancedPdfTools = [
    {
      id: "pdf-converter",
      title: "PDF Converter",
      description: "Convert PDFs to Word, Excel, PowerPoint, and more",
      icon: "🔄",
      iconBg: "bg-purple-600",
      isPro: true,
    },
    {
      id: "pdf-compressor",
      title: "PDF Compressor",
      description: "Reduce PDF file size without losing quality",
      icon: "🗜️",
      iconBg: "bg-red-500",
      isPro: true,
    },
    {
      id: "pdf-editor",
      title: "PDF Editor",
      description: "Edit text, images, and pages in your PDFs",
      icon: "✏️",
      iconBg: "bg-indigo-500",
      isPro: true,
    },
    {
      id: "pdf-ocr",
      title: "PDF OCR",
      description: "Convert scanned PDFs into searchable text",
      icon: "👁️",
      iconBg: "bg-cyan-500",
      isPro: true,
    },
    {
      id: "pdf-password",
      title: "PDF Password Manager",
      description: "Add or remove passwords and security from PDFs",
      icon: "🔐",
      iconBg: "bg-yellow-600",
      isPro: true,
    },
    {
      id: "pdf-watermark",
      title: "PDF Watermark",
      description: "Add custom watermarks and stamps to your PDFs",
      icon: "💧",
      iconBg: "bg-teal-500",
      isPro: true,
    },
    {
      id: "pdf-signatures",
      title: "PDF Digital Signatures",
      description: "Electronically sign and verify PDF documents",
      icon: "✍️",
      iconBg: "bg-pink-500",
      isPro: true,
    },
    {
      id: "pdf-annotations",
      title: "PDF Annotator",
      description: "Add comments, highlights, and notes to PDFs",
      icon: "📌",
      iconBg: "bg-purple-500",
      isPro: true,
    },
  ]

  const handleLogout = () => {
    window.location.href = '/'
  }

  return (
    <div
      className={`min-h-screen w-full bg-gradient-to-b ${
        theme === "dark" ? colorTheme.background : "from-slate-50 to-slate-100"
      } transition-all duration-1000`}
      style={{
        backgroundImage: theme === "dark" 
          ? `linear-gradient(to bottom, ${colorTheme.background})`
          : "linear-gradient(to bottom, rgb(248, 250, 252), rgb(241, 245, 249))"
      }}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-20 animate-pulse"
          style={{ background: `radial-gradient(circle, ${colorTheme.primary}, transparent)` }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 animate-pulse"
          style={{ background: `radial-gradient(circle, ${colorTheme.secondary}, transparent)` }}
        />
      </div>

      <header className="relative z-10 px-6 pt-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", damping: 20 }}
          >
            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20"
              style={{ 
                background: `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})` 
              }}
            >
              <Image 
                src="/m-logo-clear.png" 
                alt="Melara AI Logo" 
                width={42} 
                height={42} 
                className="object-contain"
              />
            </motion.div>
            <span className="text-xl font-bold">PDF Tools Dashboard</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", damping: 20, delay: 0.2 }}
          >
            <UserSettings 
              onThemeChangeAction={handleThemeChange} 
              currentTheme={colorTheme} 
              onLogoutAction={handleLogout}
            />
          </motion.div>
        </div>
      </header>

      <div className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", damping: 20 }}
          >
            <div>
              <h1 className="text-4xl font-bold mb-2"
                style={{ color: theme === "dark" ? "white" : "#333333" }}
              >
                PDF Tools
              </h1>
              <p className="text-lg opacity-70"
                style={{ color: theme === "dark" ? "white" : "#333333" }}
              >
                Powerful PDF utilities for all your document needs
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
                  style={{ color: theme === "dark" ? "rgb(148, 163, 184)" : "rgb(100, 116, 139)" }}
                />
                <Input
                  placeholder="Search tools..."
                  className="w-80 pl-9 pr-16 h-12 rounded-xl border backdrop-blur-lg"
                  style={{
                    backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.8)",
                    borderColor: theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(148, 163, 184, 0.3)",
                    color: theme === "dark" ? "white" : "#333333"
                  }}
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs"
                  style={{ color: theme === "dark" ? "rgb(148, 163, 184)" : "rgb(100, 116, 139)" }}
                >
                  ⌘+K
                </span>
              </div>
              <Button 
                className="text-white font-medium transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`,
                  boxShadow: `0 10px 30px ${colorTheme.primary}20`,
                }}
              >
                Build New Tool
              </Button>
            </div>
          </motion.div>

          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2"
                style={{ color: theme === "dark" ? "white" : "#333333" }}
              >
                Essential PDF Tools
              </h2>
              <p className="opacity-70"
                style={{ color: theme === "dark" ? "white" : "#333333" }}
              >
                Core PDF utilities for everyday document tasks.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pdfTools.map((agent, index) => (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <AgentCard agent={agent} />
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2"
                style={{ color: theme === "dark" ? "white" : "#333333" }}
              >
                Advanced PDF Tools
              </h2>
              <p className="opacity-70"
                style={{ color: theme === "dark" ? "white" : "#333333" }}
              >
                Professional PDF editing, conversion, and security tools.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedPdfTools.map((agent, index) => (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <AgentCard agent={agent} />
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
