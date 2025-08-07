"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface ZyfloWindowMockupProps {
  children: React.ReactNode
  className?: string
}

const ZyfloWindowMockup = React.forwardRef<HTMLDivElement, ZyfloWindowMockupProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full max-w-2xl mx-auto rounded-xl border border-border/50",
          "bg-background/50 backdrop-blur-sm shadow-2xl overflow-hidden",
          "before:absolute before:inset-0 before:bg-gradient-to-br",
          "before:from-primary/10 before:to-transparent before:pointer-events-none",
          className
        )}
      >
        {/* Window header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30 bg-muted/30">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 text-center text-sm text-muted-foreground">
            Interactive Demo
          </div>
        </div>
        
        {/* Window content */}
        <div className="relative min-h-[200px]">
          {children}
        </div>
      </div>
    )
  }
)

ZyfloWindowMockup.displayName = "ZyfloWindowMockup"

export default ZyfloWindowMockup
