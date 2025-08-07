"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useSpring, useMotionValue, type Easing, easeOut } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"

export const PossibleZyfloCursorVariant = [
  "default",
  "spot-blur",
  "dot",
  "ring",
  "inverted"
] as const

export type ZyfloCursorVariant = (typeof PossibleZyfloCursorVariant)[number]

const cursorVariants = cva("absolute pointer-events-none", {
  variants: {
    variant: {
      default: "size-6 rounded-full border-2 border-primary",
      "spot-blur": "size-12 rounded-full bg-primary/30 blur-xl",
      dot: "size-2 rounded-full bg-primary",
      ring: "size-6 rounded-full border-2 border-primary",
      inverted: "size-6 rounded-full bg-foreground mix-blend-difference"
    }
  },
  defaultVariants: { variant: "default" }
})

interface ZyfloCursorProps extends VariantProps<typeof cursorVariants> {
  containerRef?: React.RefObject<HTMLElement | HTMLDivElement | null>
  delay?: number
  easing?: Easing
  srOnly?: string
  label?: string
  color?: string
}

const useHoverState = () => {
  const [isHovering, setIsHovering] = useState(false)

  const onMouseEnter = (e: Event) => {
    const target = e.target as HTMLElement
    if (
      target.tagName === "A" ||
      target.classList.contains("zyflo-hover") ||
      target.closest("a, .zyflo-hover")
    ) {
      setIsHovering(true)
    }
  }

  const onMouseLeave = (e: Event) => {
    const target = e.target as HTMLElement
    if (
      target.tagName === "A" ||
      target.classList.contains("zyflo-hover") ||
      target.closest("a, .zyflo-hover")
    ) {
      setIsHovering(false)
    }
  }

  return { isHovering, onMouseEnter, onMouseLeave }
}

const ZyfloCursor: React.FC<ZyfloCursorProps> = ({
  containerRef,
  variant = "default",
  delay = 0.1,
  easing = easeOut,
  srOnly,
  label,
  color
}) => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const { isHovering, onMouseEnter, onMouseLeave } = useHoverState()

  const springConfig = {
    bounce: 0.1,
    stiffness: 400,
    damping: 25,
    mass: 0.5
  }

  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      const offsetX = variant === "spot-blur" ? 24 : variant === "dot" ? 4 : variant === "inverted" ? 12 : 12
      const offsetY = variant === "spot-blur" ? 24 : variant === "dot" ? 4 : variant === "inverted" ? 12 : 12
      
      mouseX.set(e.clientX - offsetX)
      mouseY.set(e.clientY - offsetY)
    }

    // Add event listeners to window for global mouse tracking
    window.addEventListener("mousemove", updateCursorPosition)
    
    // Still add hover detection to the container if it exists
    const container = containerRef?.current
    if (container) {
      container.addEventListener("mouseenter", onMouseEnter, true)
      container.addEventListener("mouseleave", onMouseLeave, true)
    }

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition)
      if (container) {
        container.removeEventListener("mouseenter", onMouseEnter, true)
        container.removeEventListener("mouseleave", onMouseLeave, true)
      }
    }
  }, [containerRef, mouseX, mouseY, onMouseEnter, onMouseLeave, variant])

  const renderCursor = () => {
    const styles = {
      left: cursorX,
      top: cursorY,
      borderColor: color,
      backgroundColor: variant === "spot-blur" ? `${color}4D` : variant === "inverted" ? color : color
    }

    const hoverStyles = {
      scale: isHovering ? 1.5 : 1,
      opacity: isHovering ? 0.4 : 1
    }

    const commonProps = {
      className: cursorVariants({ variant }),
      style: styles,
      animate: hoverStyles,
      transition: { delay, ease: easing }
    }

    switch (variant) {
      case "spot-blur":
      case "dot":
      case "ring":
      case "inverted":
        return (
          <div className="relative">
            <motion.div {...commonProps} />
          </div>
        )
      default:
        return (
          <div className="relative">
            <motion.div {...commonProps} />
            <motion.div
              className="absolute ml-[12px] mt-[12px] size-2 rounded-full"
              style={{
                ...styles,
                backgroundColor: color ? color : "hsl(var(--primary))"
              }}
              animate={hoverStyles}
              transition={{ delay, ease: easing }}
            />
          </div>
        )
    }
  }

  return (
    <div
      ref={cursorRef}
      className="fixed inset-0 pointer-events-none z-50"
      aria-label={label}
      onMouseEnter={
        onMouseEnter as unknown as React.MouseEventHandler<HTMLDivElement>
      }
      onMouseLeave={
        onMouseLeave as unknown as React.MouseEventHandler<HTMLDivElement>
      }
    >
      {renderCursor()}
      {srOnly && <span className="sr-only">{srOnly}</span>}
    </div>
  )
}

export default ZyfloCursor
