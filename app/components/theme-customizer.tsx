"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Palette, X, Check, Plus, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import SaucyLoader from "./SaucyLoader"

interface ColorTheme {
  name: string
  primary: string
  secondary: string
  accent: string
  background: string
}

const colorThemes: ColorTheme[] = [
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
  {
    name: "Rose",
    primary: "#e11d48",
    secondary: "#f43f5e",
    accent: "#fb7185",
    background: "from-rose-950 to-pink-950",
  },
  {
    name: "Cyber",
    primary: "#00ff88",
    secondary: "#00d4ff",
    accent: "#ff0080",
    background: "from-slate-950 to-gray-950",
  },
  // New themes
  {
    name: "Amber",
    primary: "#f59e0b",
    secondary: "#f97316",
    accent: "#84cc16",
    background: "from-amber-950 to-orange-950",
  },
  {
    name: "Ice",
    primary: "#06b6d4",
    secondary: "#60a5fa",
    accent: "#a78bfa",
    background: "from-slate-950 to-blue-950",
  },
  {
    name: "Lime",
    primary: "#22c55e",
    secondary: "#84cc16",
    accent: "#06b6d4",
    background: "from-emerald-950 to-lime-950",
  },
  {
    name: "Magma",
    primary: "#ef4444",
    secondary: "#f97316",
    accent: "#f43f5e",
    background: "from-red-950 to-amber-950",
  },
  {
    name: "Candy",
    primary: "#fb7185",
    secondary: "#a78bfa",
    accent: "#f472b6",
    background: "from-pink-950 to-fuchsia-950",
  },
  {
    name: "Midnight",
    primary: "#6366f1",
    secondary: "#22d3ee",
    accent: "#f59e0b",
    background: "from-slate-950 to-gray-950",
  },
]

interface ThemeCustomizerProps {
  onThemeChangeAction: (theme: ColorTheme) => void
  currentTheme: ColorTheme
  inline?: boolean
}

export default function ThemeCustomizer({ onThemeChangeAction, currentTheme, inline = false }: ThemeCustomizerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [customColors, setCustomColors] = useState({
    primary: "#4f46e5",
    secondary: "#06b6d4", 
    accent: "#0891b2"
  })
  const { theme, setTheme } = useTheme()

  const handleThemeChange = async (selectedTheme: ColorTheme) => {
    setIsLoading(true)
    // Simulate loading time for theme application
    await new Promise(resolve => setTimeout(resolve, 1500))
    onThemeChangeAction(selectedTheme)
    setIsLoading(false)
    setIsOpen(false)
  }

  const handleCustomTheme = async () => {
    const customTheme: ColorTheme = {
      name: "Custom",
      primary: customColors.primary,
      secondary: customColors.secondary,
      accent: customColors.accent,
      background: "from-slate-950 to-gray-950"
    }
    setIsLoading(true)
    // Simulate loading time for custom theme application
    await new Promise(resolve => setTimeout(resolve, 1500))
    onThemeChangeAction(customTheme)
    setIsLoading(false)
    setIsOpen(false)
  }

  return (
    <>
      <SaucyLoader 
        currentTheme={currentTheme}
        isLoading={isLoading}
        size="md"
        message="Applying theme"
      />
      
      <motion.div
        className={inline ? "relative" : "fixed right-4 top-1/2 z-50 -translate-y-1/2"}
        initial={{ x: inline ? 0 : 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: inline ? 0 : 1, duration: 0.5 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className={`rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 ${inline ? "p-2" : ""}`}
          style={{
            background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
            boxShadow: `0 10px 30px ${currentTheme.primary}20`
          }}
          size="icon"
        >
          <Palette className={`${inline ? "h-4 w-4" : "h-5 w-5"} text-white`} />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed right-4 top-4 z-50 w-96 max-h-[100vh] rounded-3xl p-6 backdrop-blur-lg border transition-all duration-300 overflow-hidden flex flex-col"
              style={{
                backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.9)",
                borderColor: theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(148, 163, 184, 0.3)"
              }}
              initial={{ x: 100, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: 100, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <div className="mb-4 flex items-center justify-between flex-shrink-0">
                <h3 
                  className="text-lg font-semibold"
                  style={{ color: theme === "dark" ? "white" : "#333333" }}
                >
                  Color Themes
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-200/50"
                  style={{ color: theme === "dark" ? "white" : "#333333" }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Custom Theme Creator */}
              <div className="mb-6 p-4 rounded-2xl border flex-shrink-0"
                style={{
                  backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(148, 163, 184, 0.1)",
                  borderColor: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(148, 163, 184, 0.2)"
                }}
              >
                <h4 className="text-sm font-medium mb-3"
                  style={{ color: theme === "dark" ? "white" : "#333333" }}
                >
                  Create Custom Theme
                </h4>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <Label className="text-xs" 
                        style={{ color: theme === "dark" ? "rgb(148, 163, 184)" : "rgb(100, 116, 139)" }}
                      >
                        Primary
                      </Label>
                      <div className="flex items-center gap-2">
                        <Input
                          type="color"
                          value={customColors.primary}
                          onChange={(e) => setCustomColors(prev => ({ ...prev, primary: e.target.value }))}
                          className="w-8 h-8 p-0 border-0 rounded cursor-pointer"
                        />
                        <Input
                          type="text"
                          value={customColors.primary}
                          onChange={(e) => setCustomColors(prev => ({ ...prev, primary: e.target.value }))}
                          className="text-xs h-8 flex-1"
                          style={{
                            backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.8)",
                            borderColor: theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(148, 163, 184, 0.3)",
                            color: theme === "dark" ? "white" : "#333333"
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs"
                        style={{ color: theme === "dark" ? "rgb(148, 163, 184)" : "rgb(100, 116, 139)" }}
                      >
                        Secondary
                      </Label>
                      <div className="flex items-center gap-2">
                        <Input
                          type="color"
                          value={customColors.secondary}
                          onChange={(e) => setCustomColors(prev => ({ ...prev, secondary: e.target.value }))}
                          className="w-8 h-8 p-0 border-0 rounded cursor-pointer"
                        />
                        <Input
                          type="text"
                          value={customColors.secondary}
                          onChange={(e) => setCustomColors(prev => ({ ...prev, secondary: e.target.value }))}
                          className="text-xs h-8 flex-1"
                          style={{
                            backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.8)",
                            borderColor: theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(148, 163, 184, 0.3)",
                            color: theme === "dark" ? "white" : "#333333"
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs"
                        style={{ color: theme === "dark" ? "rgb(148, 163, 184)" : "rgb(100, 116, 139)" }}
                      >
                        Accent
                      </Label>
                      <div className="flex items-center gap-2">
                        <Input
                          type="color"
                          value={customColors.accent}
                          onChange={(e) => setCustomColors(prev => ({ ...prev, accent: e.target.value }))}
                          className="w-8 h-8 p-0 border-0 rounded cursor-pointer"
                        />
                        <Input
                          type="text"
                          value={customColors.accent}
                          onChange={(e) => setCustomColors(prev => ({ ...prev, accent: e.target.value }))}
                          className="text-xs h-8 flex-1"
                          style={{
                            backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.8)",
                            borderColor: theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(148, 163, 184, 0.3)",
                            color: theme === "dark" ? "white" : "#333333"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={handleCustomTheme}
                    className="w-full h-8 text-xs rounded-lg"
                    style={{
                      background: `linear-gradient(135deg, ${customColors.primary}, ${customColors.secondary})`,
                      color: "white"
                    }}
                  >
                    <Plus className="w-3 h-3 mr-1" />
                    Apply Custom Theme
                  </Button>
                </div>
              </div>

              {/* Light/Dark Mode Toggle */}
              <div className="mb-6 p-4 rounded-2xl border flex-shrink-0"
                style={{
                  backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(148, 163, 184, 0.1)",
                  borderColor: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(148, 163, 184, 0.2)"
                }}
              >
                <h4 className="text-sm font-medium mb-3"
                  style={{ color: theme === "dark" ? "white" : "#333333" }}
                >
                  Appearance Mode
                </h4>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`flex-1 rounded-lg transition-all duration-300 ${
                      theme === "light" 
                        ? "bg-white/20 dark:bg-white/20" 
                        : "hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-200/50"
                    }`}
                    style={{
                      backgroundColor: theme === "light" 
                        ? "rgba(148, 163, 184, 0.2)"
                        : "transparent",
                      color: theme === "dark" ? "white" : "#333333"
                    }}
                    onClick={() => setTheme("light")}
                  >
                    <Sun className="h-4 w-4 mr-2" />
                    Light
                  </Button>
                  <Button
                    variant="ghost" 
                    size="sm"
                    className={`flex-1 rounded-lg transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-white/20 dark:bg-white/20"
                        : "hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-200/50"
                    }`}
                    style={{
                      backgroundColor: theme === "dark"
                        ? "rgba(255, 255, 255, 0.2)"
                        : "transparent",
                      color: theme === "dark" ? "white" : "#333333"
                    }}
                    onClick={() => setTheme("dark")}
                  >
                    <Moon className="h-4 w-4 mr-2" />
                    Dark
                  </Button>
                </div>
              </div>

              {/* Predefined Themes */}
              <div className="flex-1 overflow-hidden flex flex-col">
                <h4 className="text-sm font-medium mb-3 flex-shrink-0"
                  style={{ color: theme === "dark" ? "white" : "#333333" }}
                >
                  Predefined Themes
                </h4>
                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-3">
                    {colorThemes.map((colorTheme, index) => (
                      <motion.button
                        key={colorTheme.name}
                        className={`relative overflow-hidden rounded-xl p-4 text-left transition-all ${
                          currentTheme.name === colorTheme.name
                            ? "ring-2 ring-white ring-offset-2 ring-offset-transparent"
                            : ""
                        }`}
                        style={{
                          background: `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`,
                        }}
                        onClick={() => handleThemeChange(colorTheme)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="relative z-10">
                          <div className="mb-2 text-sm font-medium text-white">{colorTheme.name}</div>
                          <div className="flex gap-1">
                            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: colorTheme.primary }} />
                            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: colorTheme.secondary }} />
                            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: colorTheme.accent }} />
                          </div>
                        </div>
                        {currentTheme.name === colorTheme.name && (
                          <motion.div
                            className="absolute right-2 top-2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", damping: 15, stiffness: 300 }}
                          >
                            <Check className="h-4 w-4 text-white" />
                          </motion.div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              <div 
                className="mt-4 text-xs flex-shrink-0"
                style={{ color: theme === "dark" ? "rgb(148, 163, 184)" : "rgb(100, 116, 139)" }}
              >
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
