"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { Card } from "@/app/components/ui/card"
import { Check, X } from "lucide-react"
import { useTheme } from "next-themes"

interface ColorTheme {
  name: string
  primary: string
  secondary: string
  accent: string
  background: string
}

interface PricingModalProps {
  isOpen: boolean
  onCloseAction: () => void
  colorTheme: ColorTheme
}

const defaultTheme: ColorTheme = {
  name: "Ocean",
  primary: "#4f46e5",
  secondary: "#06b6d4",
  accent: "#0891b2",
  background: "from-blue-950 to-cyan-950",
}

export default function PricingModal({ isOpen, onCloseAction, colorTheme = defaultTheme }: PricingModalProps) {
  const { theme } = useTheme()
  const [isAnnual, setIsAnnual] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseAction()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
      
      // Hide scrollbar for modal
      const style = document.createElement('style')
      style.id = 'pricing-modal-styles'
      style.textContent = `
        .pricing-modal::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
      `
      document.head.appendChild(style)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
      
      // Remove modal styles
      const existingStyle = document.getElementById('pricing-modal-styles')
      if (existingStyle) {
        document.head.removeChild(existingStyle)
      }
    }
  }, [isOpen, onCloseAction])

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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop with blur */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCloseAction}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto bg-gradient-to-b rounded-2xl shadow-2xl mx-4 pricing-modal"
            style={{
              background: theme === "dark" 
                ? `linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))`
                : `linear-gradient(135deg, rgba(248, 250, 252, 0.95), rgba(226, 232, 240, 0.95))`,
              backdropFilter: "blur(20px)",
              border: theme === "dark" ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.1)",
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
          >
            {/* Close Button */}
            <button
              onClick={onCloseAction}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-all duration-200 z-10"
              style={{ color: theme === "dark" ? "white" : "#333333" }}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Content */}
            <div className="p-8">
              <motion.div
                className="mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-6 max-w-6xl w-full">
                  {plans.map((plan, index) => (
                    <motion.div
                      key={plan.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
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
                          backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.7)",
                          borderColor: plan.isPopular 
                            ? colorTheme.primary
                            : theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(148, 163, 184, 0.2)"
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
                          className="w-full mb-6 transition-all duration-300"
                          style={{
                            background: plan.isPopular 
                              ? `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`
                              : plan.name === "Lifetime"
                                ? "linear-gradient(135deg, #f59e0b, #ef4444)"
                                : `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`,
                            color: "white"
                          }}
                          variant={plan.buttonVariant}
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
