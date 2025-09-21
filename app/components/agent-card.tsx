import { Play, Star } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Card } from "@/app/components/ui/card"
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
  isBookmarked?: boolean
  onToggleBookmark?: (toolId: string) => void
}

export function AgentCard({ agent, colorTheme, isBookmarked = false, onToggleBookmark }: AgentCardProps) {
  const { theme } = useTheme()
  const router = useRouter()

  const handleRun = () => {
    if (agent.route) {
      router.push(agent.route)
    } else {
      console.log(`Running ${agent.title}`)
    }
  }

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (onToggleBookmark) {
      onToggleBookmark(agent.id)
    }
  }
  return (
    <Card className="bg-card border border-border/40 p-6 hover:bg-card/80 transition-all duration-200 shadow-lg hover:shadow-xl relative">
      {/* Bookmark Star */}
      {onToggleBookmark && (
        <button
          onClick={handleBookmarkClick}
          className="absolute top-2 left-2 p-0.5 rounded-full hover:bg-opacity-20 hover:bg-gray-500 transition-all duration-200"
        >
          <Star 
            className={`w-3 h-3 transition-all duration-200 ${isBookmarked ? 'fill-current' : 'fill-none'}`}
            style={{ 
              color: isBookmarked ? (colorTheme?.primary || '#3b82f6') : (theme === "dark" ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.3)"),
              stroke: isBookmarked ? (colorTheme?.primary || '#3b82f6') : (theme === "dark" ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.3)")
            }}
          />
        </button>
      )}
      
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
            onClick={handleRun}
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
