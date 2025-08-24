'use client'

import { useEffect, useRef, useState } from 'react'

interface AuroraCanvasProps {
  className?: string
  reducedMotion?: boolean
}

export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return reducedMotion
}

export function AuroraCanvas({ className = '', reducedMotion = false }: AuroraCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || reducedMotion) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation variables
    let time = 0
    const auroraLayers = [
      { color: 'rgba(59, 240, 229, 0.3)', speed: 0.5, amplitude: 0.3 },
      { color: 'rgba(166, 255, 154, 0.2)', speed: 0.3, amplitude: 0.4 },
      { color: 'rgba(255, 92, 168, 0.15)', speed: 0.7, amplitude: 0.2 },
    ]

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      auroraLayers.forEach((layer, index) => {
        ctx.beginPath()
        ctx.strokeStyle = layer.color
        ctx.lineWidth = 2

        const mouseInfluence = mousePosition.x * 0.1
        const timeOffset = time * layer.speed + index * Math.PI / 3

        for (let x = 0; x <= canvas.width; x += 2) {
          const normalizedX = x / canvas.width
          const wave = Math.sin(normalizedX * 4 + timeOffset + mouseInfluence) * layer.amplitude
          const y = canvas.height * 0.3 + wave * canvas.height * 0.4 + Math.sin(time * 0.5) * 50

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
      })

      time += 0.01
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [reducedMotion, mousePosition.x])

  if (reducedMotion) {
    return (
      <div className={`absolute inset-0 bg-gradient-to-b from-deep-space via-ink-black to-deep-space ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-aurora-cyan/10 via-lime-green/5 to-magenta/10" />
      </div>
    )
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(to bottom, var(--deep-space), var(--ink-black), var(--deep-space))',
        }}
      />
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-black/50 via-transparent to-transparent" />
    </div>
  )
}
