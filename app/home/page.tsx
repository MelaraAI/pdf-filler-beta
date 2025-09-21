"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useColorTheme } from '@/lib/use-color-theme'
import { Search } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { AgentCard } from "@/app/components/agent-card"
import ThemeCustomizer from '../components/theme-customizer'
import ThemeToggle from '../components/theme-toggle'
import { 
  FileText, 
  MessageSquare, 
  Settings, 
  User,
  Home as HomeIcon,
  Menu,
  X
} from 'lucide-react'

const navigationItems = [
  {
    id: 'pdf-tools',
    title: 'PDF Tools',
    description: 'Upload, process, and manage your PDF documents',
    icon: FileText,
    href: '/pdf-components/dashboard',
    color: '#4f46e5'
  },
  {
    id: 'chat-ai',
    title: 'AI Chat',
    description: 'Interact with AI assistant for various tasks',
    icon: MessageSquare,
    href: '/chat',
    color: '#059669'
  },
  {
    id: 'profile',
    title: 'Profile',
    description: 'Manage your account settings and preferences',
    icon: User,
    href: '/profile',
    color: '#dc2626'
  },
  {
    id: 'settings',
    title: 'Settings',
    description: 'Configure application settings and preferences',
    icon: Settings,
    href: '/settings',
    color: '#7c3aed'
  }
]

export default function HomePage() {
  const { theme } = useTheme()
  const { colorTheme, changeColorTheme } = useColorTheme()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('pdf-tools')

  const pdfAgents = [
    {
      id: "pdf-form-filler",
      title: "PDF Form Filler",
      description: "Upload and automatically fill PDF forms with AI assistance",
      icon: "📝",
      iconBg: "bg-blue-600",
      isPro: false,
    },
    {
      id: "pdf-analyzer",
      title: "PDF Analyzer",
      description: "Extract and analyze content from PDF documents",
      icon: "🔍",
      iconBg: "bg-green-600",
      isPro: false,
    },
    {
      id: "pdf-merger",
      title: "PDF Merger",
      description: "Combine multiple PDF files into one document",
      icon: "🔗",
      iconBg: "bg-purple-600",
      isPro: true,
    },
    {
      id: "pdf-converter",
      title: "PDF Converter",
      description: "Convert PDFs to various formats and vice versa",
      icon: "🔄",
      iconBg: "bg-orange-600",
      isPro: false,
    },
    {
      id: "pdf-editor",
      title: "PDF Editor",
      description: "Edit text, images, and annotations in PDF files",
      icon: "✏️",
      iconBg: "bg-red-600",
      isPro: true,
    },
    {
      id: "pdf-compress",
      title: "PDF Compressor",
      description: "Reduce PDF file sizes while maintaining quality",
      icon: "🗜️",
      iconBg: "bg-cyan-600",
      isPro: false,
    },
  ]

  const renderContent = () => {
    if (activeSection === 'pdf-tools') {
      return (
        <div className={`min-h-screen text-foreground p-3 sm:p-4 lg:p-6 ${
          theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-gray-100'
        }`}>
          <div className="max-w-full">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 lg:mb-8 gap-4">
              <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>PDF Tools</h1>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <div className="relative">
                  <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
                  <Input
                    placeholder="Search PDF Tools"
                    className={`pl-10 w-full sm:w-64 lg:w-80 border ${theme === 'dark' ? 'bg-gray-800 border-gray-600 text-white placeholder:text-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-500'}`}
                  />
                  <span className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    ⌘+K
                  </span>
                </div>
                <Button 
                  className="text-white font-medium hover:opacity-90 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`,
                    boxShadow: `0 4px 20px ${colorTheme.primary}30`
                  }}
                >
                  Create New Tool
                </Button>
              </div>
            </div>

            {/* PDF Tools Section */}
            <section>
              <div className="mb-4 lg:mb-6">
                <h2 
                  className={`text-xl sm:text-2xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                  style={{ 
                    background: `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  PDF Processing Tools
                </h2>
                <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Powerful tools to process, edit, and manage your PDF documents.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                {pdfAgents.map((agent) => (
                  <AgentCard key={agent.id} agent={agent} colorTheme={colorTheme} />
                ))}
              </div>
            </section>
          </div>
        </div>
      )
    }

    return (
      <div className="p-3 sm:p-6 lg:p-12">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-8 sm:mb-12">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Welcome Home
            </h1>
            <p className={`text-base sm:text-lg lg:text-xl ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Choose from our suite of powerful tools to enhance your productivity
            </p>
          </div>

          <div className={`rounded-2xl p-8 ${
            theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'
          } shadow-xl backdrop-blur-sm border ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <h2 className={`text-2xl font-semibold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Access
            </h2>
            <p className={`text-base ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Use the sidebar navigation to access different tools and features. 
              Click on any item in the sidebar to get started with your productivity journey.
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Theme Components */}
      <ThemeCustomizer 
        onThemeChangeAction={changeColorTheme}
        currentTheme={colorTheme}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[320px_1fr] 2xl:grid-cols-[350px_1fr] min-h-screen">
        {/* Sidebar */}
        <motion.aside
          className={`fixed left-0 top-0 z-40 h-full transition-transform duration-300 lg:translate-x-0 lg:static lg:block ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } w-full lg:w-auto ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r flex-shrink-0 overflow-y-auto`}
          initial={{ x: -256 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between p-4 lg:p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 lg:gap-3 min-w-0">
              <HomeIcon className={`w-6 lg:w-8 h-6 lg:h-8 flex-shrink-0 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              <h1 className={`text-lg lg:text-xl font-bold truncate ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Dashboard
              </h1>
            </div>
            <div className="flex items-center gap-1 lg:gap-2 flex-shrink-0">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                className="text-xs lg:text-sm px-2 lg:px-3 py-1 lg:py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => {
                  window.location.href = '/login-styled';
                }}
              >
                Login
              </Button>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <nav className="p-3 lg:p-4 space-y-1 lg:space-y-2">
          {navigationItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.button
                key={item.id}
                onClick={() => activeSection === item.id ? null : setActiveSection(item.id)}
                className={`w-full flex items-center gap-2 lg:gap-3 p-2 lg:p-3 rounded-lg transition-all duration-200 text-left group ${
                  activeSection === item.id 
                    ? 'text-white shadow-lg'
                    : (theme === 'dark' 
                        ? 'hover:bg-gray-700 text-gray-300 hover:text-white' 
                        : 'hover:bg-gray-100 text-gray-700 hover:text-gray-900')
                }`}
                style={activeSection === item.id ? {
                  background: `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`,
                  boxShadow: `0 4px 20px ${colorTheme.primary}30`
                } : {}}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div 
                  className="p-1.5 lg:p-2 rounded-lg flex-shrink-0"
                  style={{ 
                    backgroundColor: activeSection === item.id 
                      ? `${colorTheme.accent}30` 
                      : `${item.color}20` 
                  }}
                >
                  <Icon 
                    className="w-4 lg:w-5 h-4 lg:h-5"
                    style={{ 
                      color: activeSection === item.id 
                        ? 'white' 
                        : item.color 
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-xs lg:text-sm truncate">{item.title}</h3>
                  <p className={`text-xs lg:text-xs leading-tight truncate ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </motion.button>
            )
          })}
        </nav>
      </motion.aside>

      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

        {/* Main Content */}
        <div className="min-h-screen overflow-x-hidden">
          {/* Mobile header */}
          <header className={`lg:hidden ${
            theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } border-b p-4 sticky top-0 z-30`}>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Menu className="w-6 h-6" />
            </button>
          </header>

          {/* Content area */}
          <main className="w-full">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  )
}
