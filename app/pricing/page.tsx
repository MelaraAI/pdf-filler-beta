"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { Card } from "@/app/components/ui/card"
import { Check, ArrowLeft } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import Image from "next/image"

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

export default function PricingPage() {
  const { theme } = useTheme()
  const [isAnnual, setIsAnnual] = useState(false)
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
      // Set default theme to Ocean
      setColorTheme(defaultTheme)
      localStorage.setItem("colorTheme", JSON.stringify(defaultTheme))
    }

    // Hide scrollbar globally for this page
    const style = document.createElement('style')
    style.textContent = `
      body::-webkit-scrollbar {
        width: 0px;
        background: transparent;
      }
      html {
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const plans = [
    {
      name: "Free",
      monthlyPrice: 0,
      annualPrice: 0,
      description: "Get started with essential PDF tools and explore our platform.",
      features: [
        "500 credits per month", 
        "Access to basic PDF tools:",
        "• PDF Viewer & Simple Editing",
        "• PDF Splitter & Merger", 
        "• Basic PDF Converter",
        "File size limit: 10MB",
        "Community support"
      ],
      buttonText: "Get Started Free",
      buttonVariant: "secondary" as const,
      isCurrentPlan: false,
    },
    {
      name: "Starter",
      monthlyPrice: 20,
      annualPrice: 16,
      description: "Perfect for professionals who need more power and flexibility.",
      features: [
        "2,000 credits per month",
        "Everything in Free, plus:",
        "• PDF OCR & Text Recognition",
        "• PDF Password Protection",
        "• Advanced PDF Converter",
        "• PDF Watermarking",
        "• PDF Form Filling",
        "File size limit: 50MB",
        "Priority email support",
        "💡 Most popular for small teams!"
      ],
      buttonText: "Choose Starter",
      buttonVariant: "default" as const,
    },
    {
      name: "Pro",
      monthlyPrice: 30,
      annualPrice: 24,
      description: "Unlock all premium features for maximum productivity.",
      features: [
        "5,000 credits per month",
        "Everything in Starter, plus:",
        "• All PDF Tools Unlocked",
        "• PDF Digital Signatures",
        "• Advanced PDF Annotations",
        "• Batch Processing",
        "• API Access",
        "• Custom PDF Templates",
        "File size limit: 200MB",
        "Priority phone & chat support",
        "🚀 Best value for power users!"
      ],
      buttonText: "Choose Pro",
      buttonVariant: "default" as const,
      isPopular: true,
    },
    {
      name: "Lifetime",
      monthlyPrice: 299,
      annualPrice: null,
      description: "One-time payment. Pro features forever. Limited time offer!",
      features: [
        "✨ ALL Pro benefits FOREVER",
        "5,000+ credits every month",
        "Complete PDF toolkit access",
        "Future feature updates included",
        "Unlimited file processing",
        "Premium support for life",
        "No monthly fees ever again",
        "🔥 Save $1,000+ over 3 years",
        "⚡ Limited availability",
        "🎯 Best deal - pay once, use forever!"
      ],
      buttonText: "Get Lifetime Access",
      buttonVariant: "outline" as const,
      isContactUs: false,
    },
  ]

  return (
    <div
      className={`min-h-screen w-full bg-gradient-to-b ${
        theme === "dark" ? colorTheme.background : "from-slate-50 to-slate-100"
      } transition-all duration-1000 overflow-x-hidden`}
      style={{
        color: theme === "dark" ? "white" : "#333333",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {/* Header */}
      <header className="w-full px-6 py-6">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", damping: 20 }}
          >
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2 hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-200/50 rounded-full"
                style={{
                  color: theme === "dark" ? "white" : "#333333"
                }}
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center gap-2"
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
            <span className="text-xl font-bold">Powered by Melara AI</span>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-6 pb-12 min-h-screen flex flex-col justify-center">
        <div className="mx-auto max-w-7xl w-full flex flex-col justify-center min-h-[calc(100vh-120px)]">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", damping: 20 }}
          >
            <h1 
              className="text-4xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`,
              }}
            >
              Choose Your PDF Plan
            </h1>
            <p className="text-lg opacity-80 mb-6" style={{ color: theme === "dark" ? "white" : "#333333" }}>
              Unlock powerful PDF tools with flexible credit-based pricing
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm ${!isAnnual ? "font-medium" : "opacity-70"}`}
                style={{ color: theme === "dark" ? "white" : "#333333" }}
              >
                Monthly
              </span>
              <motion.button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300"
                style={{
                  background: isAnnual 
                    ? `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`
                    : theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(148, 163, 184, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-lg"
                  style={{
                    transform: isAnnual ? "translateX(1.5rem)" : "translateX(0.25rem)"
                  }}
                />
              </motion.button>
              <span className={`text-sm ${isAnnual ? "font-medium" : "opacity-70"}`}
                style={{ color: theme === "dark" ? "white" : "#333333" }}
              >
                Annual
              </span>
              {isAnnual && (
                <motion.span
                  className="px-3 py-1 rounded-full text-sm font-medium text-white"
                  style={{
                    background: `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Save 20%
                </motion.span>
              )}
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 max-w-6xl w-full">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: `0 25px 50px ${colorTheme.primary}20`,
                    transition: { duration: 0.3 } 
                  }}
                  className="flex justify-center"
                >
                <Card
                  className="relative overflow-visible p-6 h-full backdrop-blur-lg border transition-all duration-300 w-full max-w-sm mx-auto"
                  style={{
                    backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.9)",
                    borderColor: plan.isPopular 
                      ? colorTheme.primary
                      : theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(148, 163, 184, 0.3)"
                  }}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <span 
                        className="px-3 py-1 rounded-full text-sm font-medium text-white whitespace-nowrap"
                        style={{
                          background: `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`
                        }}
                      >
                        Most Popular
                      </span>
                    </div>
                  )}

                  {plan.name === "Lifetime" && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <span 
                        className="px-3 py-1 rounded-full text-sm font-medium text-white whitespace-nowrap animate-pulse"
                        style={{
                          background: "linear-gradient(135deg, #f59e0b, #ef4444)"
                        }}
                      >
                        🔥 Limited Time
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2"
                      style={{ color: theme === "dark" ? "white" : "#333333" }}
                    >
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      {plan.name === "Lifetime" ? (
                        <>
                          <div className="text-3xl font-bold"
                            style={{ color: theme === "dark" ? "white" : "#333333" }}
                          >
                            $299
                          </div>
                          <div className="text-sm opacity-70"
                            style={{ color: theme === "dark" ? "white" : "#333333" }}
                          >
                            one-time payment
                          </div>
                          <div className="text-xs mt-1 px-2 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white inline-block">
                            🔥 Limited Time: Save $1,000+
                          </div>
                        </>
                      ) : plan.monthlyPrice === null ? (
                        <div className="text-2xl font-bold opacity-70"
                          style={{ color: theme === "dark" ? "white" : "#333333" }}
                        >
                          Custom Pricing
                        </div>
                      ) : (
                        <>
                          <div className="text-3xl font-bold"
                            style={{ color: theme === "dark" ? "white" : "#333333" }}
                          >
                            ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                          </div>
                          {plan.monthlyPrice > 0 && (
                            <div className="text-sm opacity-70"
                              style={{ color: theme === "dark" ? "white" : "#333333" }}
                            >
                              {isAnnual ? "per month, billed annually" : "per month"}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                    <p className="text-sm opacity-70"
                      style={{ color: theme === "dark" ? "white" : "#333333" }}
                    >
                      {plan.description}
                    </p>
                  </div>

                  <Button
                    className={`w-full mb-6 transition-all duration-300 ${
                      plan.isPopular
                        ? "text-white shadow-lg"
                        : plan.isCurrentPlan
                          ? "opacity-60"
                          : ""
                    }`}
                    style={{
                      background: plan.isPopular 
                        ? `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`
                        : plan.isContactUs
                          ? "transparent"
                          : plan.isCurrentPlan
                            ? theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(148, 163, 184, 0.2)"
                            : `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`,
                      borderColor: plan.isContactUs ? colorTheme.primary : "transparent",
                      color: plan.isContactUs 
                        ? colorTheme.primary 
                        : plan.isCurrentPlan
                          ? theme === "dark" ? "white" : "#333333"
                          : "white"
                    }}
                    variant={plan.buttonVariant}
                    disabled={plan.isCurrentPlan}
                  >
                    {plan.buttonText}
                  </Button>

                  <div className="space-y-3">
                    <div className="text-sm opacity-70 mb-2"
                      style={{ color: theme === "dark" ? "white" : "#333333" }}
                    >
                      {plan.name === "Free" ? "Includes:" : ""}
                    </div>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: colorTheme.primary }} />
                        <span className="text-sm opacity-80"
                          style={{ color: theme === "dark" ? "white" : "#333333" }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
