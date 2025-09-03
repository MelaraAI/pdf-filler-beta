"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
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
  }, [])

  const plans = [
    {
      name: "Free",
      monthlyPrice: 0,
      annualPrice: 0,
      description: "Try 100+ AI agents and build your own, completely free.",
      features: ["Unlimited AI agent drafts", "1,000 runs per month"],
      buttonText: "Current Plan",
      buttonVariant: "secondary" as const,
      isCurrentPlan: true,
    },
    {
      name: "Starter",
      monthlyPrice: 20,
      annualPrice: 16,
      description: "Build and launch custom Agents.",
      features: [
        "Everything in Free, plus:",
        "Publish up to 5 agents",
        "5,000 runs per month",
        "Unlimited users",
        "Just Me",
      ],
      buttonText: "Choose Starter",
      buttonVariant: "default" as const,
    },
    {
      name: "Pro",
      monthlyPrice: 60,
      annualPrice: 48,
      description: "Scale your Agents with powerful automatic triggers.",
      features: [
        "Everything in Starter, plus:",
        "Publish up to 15 agents",
        "25,000 runs per month",
        "Unlimited users",
        "Up to 5 collaborators",
        "Trigger agents via API",
        "Trigger agents via Email",
        "Scheduled agent runs",
        "MCP",
      ],
      buttonText: "Choose Pro",
      buttonVariant: "default" as const,
      isPopular: true,
    },
    {
      name: "Agency",
      monthlyPrice: 175,
      annualPrice: 140,
      description: "For MindStudio resellers and integration partners.",
      features: [
        "Everything in Pro, plus:",
        "Publish up to 50 agents",
        "100,000 runs per month",
        "Unlimited users",
        "Up to 15 collaborators",
        "Embed AI Agents",
      ],
      buttonText: "Contact Us",
      buttonVariant: "outline" as const,
      isContactUs: true,
    },
    {
      name: "Custom",
      monthlyPrice: null,
      annualPrice: null,
      description: "Advanced AI infrastructure, security, and support.",
      features: [
        "Everything in Pro, plus:",
        "Publish unlimited agents",
        "Unlimited runs per month",
        "Unlimited users",
        "Unlimited collaborators",
        "Bring your own API Keys",
        "SLA / SSO",
        "Premium support",
        "Team training included",
      ],
      buttonText: "Contact Us",
      buttonVariant: "outline" as const,
      isContactUs: true,
    },
  ]

  return (
    <div
      className={`min-h-screen w-full bg-gradient-to-b ${
        theme === "dark" ? colorTheme.background : "from-slate-50 to-slate-100"
      } transition-all duration-1000`}
      style={{
        color: theme === "dark" ? "white" : "#333333"
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
      <div className="px-6 pb-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-8 text-center"
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
              Choose a Plan
            </h1>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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
              >
                <Card
                  className="relative overflow-visible p-6 h-full backdrop-blur-lg border transition-all duration-300"
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

                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2"
                      style={{ color: theme === "dark" ? "white" : "#333333" }}
                    >
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      {plan.monthlyPrice === null ? (
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
                              per month + usage, billed annually
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
  )
}
