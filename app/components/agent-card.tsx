"use client"

import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"

interface Agent {
  id: string
  title: string
  description: string
  icon: string
  iconBg: string
  isPro: boolean
  route?: string
}

interface AgentCardProps {
  agent: Agent
}

export function AgentCard({ agent }: AgentCardProps) {
  const { theme } = useTheme()
  const router = useRouter()

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
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4"
            onClick={handleRun}
          >
            <Play className="w-3 h-3 mr-1" />
            Run
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
