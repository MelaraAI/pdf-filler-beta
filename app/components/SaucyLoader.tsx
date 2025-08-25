"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface ColorTheme {
  name: string
  primary: string
  secondary: string
  accent: string
  background: string
}

interface SaucyLoaderProps {
  currentTheme: ColorTheme
  isLoading?: boolean
  size?: "sm" | "md" | "lg"
  message?: string
}

export default function SaucyLoader({
  currentTheme,
  isLoading = true,
  size = "md",
  message = "Loading...",
}: SaucyLoaderProps) {
  const [dots, setDots] = useState("")

  useEffect(() => {
    if (!isLoading) return

    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."))
    }, 500)

    return () => clearInterval(interval)
  }, [isLoading])

  if (!isLoading) return null

  const sizeClasses = {
    sm: "w-20 h-20",
    md: "w-32 h-32",
    lg: "w-40 h-40",
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
      <div className="flex flex-col items-center gap-8">
        <div className={`relative ${sizeClasses[size]} flex items-center justify-center`}>
          {/* Main morphing blob */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-80"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${currentTheme.primary}40, ${currentTheme.secondary}60, ${currentTheme.accent}40)`,
              filter: "blur(1px)",
            }}
            animate={{
              borderRadius: [
                "60% 40% 30% 70%/60% 30% 70% 40%",
                "30% 60% 70% 40%/50% 60% 30% 60%",
                "50% 40% 60% 30%/40% 50% 60% 70%",
                "40% 70% 30% 60%/70% 40% 50% 30%",
                "60% 40% 30% 70%/60% 30% 70% 40%",
              ],
              scale: [1, 1.1, 0.9, 1.05, 1],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Secondary blob layer */}
          <motion.div
            className="absolute inset-2 rounded-full opacity-60"
            style={{
              background: `radial-gradient(circle at 70% 70%, ${currentTheme.accent}50, ${currentTheme.primary}30, ${currentTheme.secondary}50)`,
              filter: "blur(2px)",
            }}
            animate={{
              borderRadius: [
                "40% 60% 70% 30%/40% 70% 30% 60%",
                "70% 30% 40% 60%/60% 40% 70% 30%",
                "30% 70% 60% 40%/30% 60% 40% 70%",
                "60% 40% 30% 70%/70% 30% 60% 40%",
                "40% 60% 70% 30%/40% 70% 30% 60%",
              ],
              scale: [0.8, 1.2, 0.9, 1.1, 0.8],
              rotate: [360, 270, 180, 90, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Inner pulsing blob core */}
          <motion.div
            className="absolute inset-6 rounded-full opacity-90"
            style={{
              background: `linear-gradient(45deg, ${currentTheme.primary}, ${currentTheme.secondary}, ${currentTheme.accent})`,
              filter: "blur(0.5px)",
            }}
            animate={{
              borderRadius: [
                "50% 50% 50% 50%/50% 50% 50% 50%",
                "80% 20% 60% 40%/40% 60% 80% 20%",
                "20% 80% 40% 60%/60% 40% 20% 80%",
                "60% 40% 80% 20%/20% 80% 60% 40%",
                "50% 50% 50% 50%/50% 50% 50% 50%",
              ],
              scale: [1, 0.8, 1.2, 0.9, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="flex gap-4">
          {[0, 1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              className="rounded-full opacity-70"
              style={{
                width: `${12 + index * 2}px`,
                height: `${12 + index * 2}px`,
                background: `radial-gradient(circle, ${
                  index % 3 === 0
                    ? currentTheme.primary
                    : index % 3 === 1
                      ? currentTheme.secondary
                      : currentTheme.accent
                }80, transparent)`,
                filter: "blur(0.5px)",
              }}
              animate={{
                borderRadius: [
                  "50% 50% 50% 50%",
                  "60% 40% 80% 20%",
                  "20% 80% 40% 60%",
                  "80% 20% 60% 40%",
                  "50% 50% 50% 50%",
                ],
                y: [0, -15, 0, -10, 0],
                x: [0, Math.sin(index) * 8, 0],
                scale: [1, 1.3, 0.8, 1.1, 1],
                opacity: [0.7, 1, 0.5, 0.9, 0.7],
              }}
              transition={{
                duration: 2 + index * 0.3,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative px-6 py-3 rounded-full"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.primary}20, ${currentTheme.secondary}20, ${currentTheme.accent}20)`,
            backdropFilter: "blur(10px)",
            border: `1px solid ${currentTheme.primary}30`,
          }}
          animate={{
            borderRadius: ["25px", "30px 20px 25px 35px", "20px 35px 30px 25px", "35px 25px 20px 30px", "25px"],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          initial={{ opacity: 0, y: 10 }}
        >
          <span className="text-white text-lg font-medium">{message}</span>
          <span className="inline-block w-8 text-left" style={{ color: currentTheme.primary }}>
            {dots}
          </span>
        </motion.div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-20"
              style={{
                width: `${8 + (i % 4) * 4}px`,
                height: `${8 + (i % 4) * 4}px`,
                background: `radial-gradient(circle, ${
                  i % 3 === 0 ? currentTheme.primary : i % 3 === 1 ? currentTheme.secondary : currentTheme.accent
                }, transparent)`,
                left: `${10 + ((i * 7) % 80)}%`,
                top: `${20 + ((i * 11) % 60)}%`,
                filter: "blur(1px)",
              }}
              animate={{
                borderRadius: [
                  "50%",
                  `${60 + i * 5}% ${40 - i * 2}% ${30 + i * 3}% ${70 - i * 4}%`,
                  `${30 + i * 2}% ${70 - i * 3}% ${60 + i * 4}% ${40 - i * 1}%`,
                  "50%",
                ],
                y: [0, -30 - i * 2, 0],
                x: [0, Math.sin(i) * 20, 0],
                scale: [1, 1.5, 0.8, 1.2, 1],
                opacity: [0.2, 0.6, 0.1, 0.4, 0.2],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
