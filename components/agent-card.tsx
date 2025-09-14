import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Agent {
  id: string
  title: string
  description: string
  icon: string
  iconBg: string
  isPro: boolean
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
  return (
    <Card className="bg-card border border-border/40 p-6 hover:bg-card/80 transition-all duration-200 shadow-lg hover:shadow-xl">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-lg ${agent.iconBg} flex items-center justify-center text-xl flex-shrink-0`}>
          {agent.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white mb-1">{agent.title}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">{agent.description}</p>
        </div>
        <div className="flex flex-col items-center gap-1 flex-shrink-0">
          <Button 
            size="sm" 
            className="text-white rounded-lg px-4 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: colorTheme 
                ? `linear-gradient(135deg, ${colorTheme.primary}, ${colorTheme.secondary})`
                : 'linear-gradient(135deg, #4f46e5, #06b6d4)',
              boxShadow: colorTheme 
                ? `0 4px 15px ${colorTheme.primary}30`
                : '0 4px 15px #4f46e530'
            }}
          >
            <Play className="w-3 h-3" />
          </Button>
          {agent.isPro && <span className="text-xs text-muted-foreground">Pro Agent</span>}
        </div>
      </div>
    </Card>
  )
}
