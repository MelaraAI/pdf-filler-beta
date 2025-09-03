"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, ArrowLeft } from "lucide-react"
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

export default function FAQPage() {
  const { theme } = useTheme()
  const [colorTheme, setColorTheme] = useState<ColorTheme>(defaultTheme)
  const [openItems, setOpenItems] = useState<number[]>([])

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

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: "What is the AI-powered PDF Form Filler?",
      answer: "Our AI-powered PDF Form Filler is an advanced tool that automatically fills out PDF forms using artificial intelligence. It can understand form fields, extract information from various sources, and complete forms accurately and efficiently."
    },
    {
      question: "How does the AI understand what information to fill in?",
      answer: "Our AI uses advanced natural language processing and machine learning algorithms to analyze form fields and match them with appropriate data. It can interpret context, understand field types, and make intelligent decisions about what information belongs where."
    },
    {
      question: "Is my data secure when using the PDF Form Filler?",
      answer: "Yes, security is our top priority. All data is encrypted in transit and at rest. We use enterprise-grade security measures and comply with industry standards for data protection. Your information is never shared with third parties without your explicit consent."
    },
    {
      question: "What types of PDF forms are supported?",
      answer: "Our system supports a wide variety of PDF forms including government forms, tax documents, applications, contracts, surveys, and custom business forms. The AI can adapt to different form structures and layouts."
    },
    {
      question: "Can I review and edit the filled forms before submission?",
      answer: "Absolutely! Our system provides a comprehensive review interface where you can check all filled fields, make corrections, and ensure accuracy before finalizing your documents. You maintain full control over the final output."
    },
    {
      question: "How accurate is the AI form filling?",
      answer: "Our AI achieves over 95% accuracy in most cases. However, we always recommend reviewing the filled forms before submission to ensure everything meets your specific requirements and preferences."
    },
    {
      question: "What file formats are supported besides PDF?",
      answer: "Currently, we specialize in PDF forms, but we're working on expanding support to include other document formats like Word documents, Excel spreadsheets, and web forms in future updates."
    },
    {
      question: "Is there a limit to how many forms I can process?",
      answer: "Form processing limits depend on your subscription plan. Free users get 1,000 runs per month, while paid plans offer higher limits. Check our pricing page for detailed information about plan limits."
    },
    {
      question: "Can I integrate this with my existing workflow?",
      answer: "Yes! We offer API access and integrations with popular business tools. You can automate form filling as part of your existing processes and workflows."
    },
    {
      question: "Do you offer customer support?",
      answer: "We provide comprehensive customer support including documentation, tutorials, and direct assistance. Premium plans include priority support with faster response times."
    }
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
        <div className="mx-auto max-w-4xl">
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
              Frequently Asked Questions
            </h1>
            <p className="text-lg opacity-70 max-w-2xl mx-auto"
              style={{ color: theme === "dark" ? "white" : "#333333" }}
            >
              Find answers to common questions about our AI-powered PDF Form Filler
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="overflow-hidden backdrop-blur-lg border transition-all duration-300 hover:shadow-lg"
                  style={{
                    backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.9)",
                    borderColor: theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(148, 163, 184, 0.3)"
                  }}
                >
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                    onClick={() => toggleItem(index)}
                  >
                    <h3 className="text-lg font-medium pr-4"
                      style={{ color: theme === "dark" ? "white" : "#333333" }}
                    >
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="h-5 w-5" 
                        style={{ color: colorTheme.primary }}
                      />
                    </motion.div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openItems.includes(index) ? "auto" : 0,
                      opacity: openItems.includes(index) ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-sm opacity-80 leading-relaxed"
                        style={{ color: theme === "dark" ? "white" : "#333333" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Card
              className="p-8 backdrop-blur-lg border"
              style={{
                backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.9)",
                borderColor: theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(148, 163, 184, 0.3)"
              }}
            >
              <h3 className="text-xl font-bold mb-4"
                style={{ color: theme === "dark" ? "white" : "#333333" }}
              >
                Still have questions?
              </h3>
              <p className="text-sm opacity-70 mb-6"
                style={{ color: theme === "dark" ? "white" : "#333333" }}
              >
                Can&apos;t find what you&apos;re looking for? Get in touch with our support team.
              </p>
              <Button
                className="rounded-full px-8 py-3 text-white transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`,
                  boxShadow: `0 10px 30px ${colorTheme.primary}20`,
                }}
              >
                Contact Support
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
