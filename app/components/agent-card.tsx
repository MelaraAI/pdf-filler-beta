"use client"

import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import { useColorTheme } from "@/lib/use-color-theme"

interface Agent {
  id: string
  title: string
  description: string
  icon: string
  iconBg: string
  isPro: boolean
  route?: string
}

interface ColorTheme {
  name: string
  primary: string
  secondary: string
  accent: string
  background: string
}

interface AgentCardProps {
  agent: Agent
  colorTheme?: ColorTheme
}

export function AgentCard({ agent, colorTheme }: AgentCardProps) {
  const { theme } = useTheme()
  const router = useRouter()
  const { colorTheme: defaultColorTheme } = useColorTheme()
  
  // Use passed colorTheme or default from hook
  const activeColorTheme = colorTheme || defaultColorTheme

  const handleRun = () => {
    if (agent.route) {
      router.push(agent.route)
    } else {
      // Default behavior for tools without specific routes
      console.log(`Running ${agent.title}`)
    }
  }

  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300 backdrop-blur-lg border"
      style={{
        backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.9)",
        borderColor: theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(148, 163, 184, 0.3)"
      }}
    >
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-lg ${agent.iconBg} flex items-center justify-center text-xl flex-shrink-0`}>
          {agent.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold mb-1"
            style={{ color: theme === "dark" ? "white" : "#333333" }}
          >
            {agent.title}
          </h3>
          <p className="text-xs leading-relaxed opacity-70"
            style={{ color: theme === "dark" ? "white" : "#333333" }}
          >
            {agent.description}
          </p>
        </div>
        <div className="flex flex-col items-center gap-1 flex-shrink-0">
          <Button 
            size="sm" 
            className="text-white rounded-lg px-4 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={handleRun}
            style={{
              background: `linear-gradient(135deg, ${activeColorTheme.primary}, ${activeColorTheme.secondary})`,
              boxShadow: `0 4px 15px ${activeColorTheme.primary}30`
            }}
          >
            <Play className="w-3 h-3" />
          </Button>
          {agent.isPro && (
            <span className="text-xs opacity-70"
              style={{ color: theme === "dark" ? "white" : "#333333" }}
            >
              Pro Tool
            </span>
          )}
        </div>
      </div>
    </Card>
  )
}
