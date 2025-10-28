'use client'

import { useEffect, useRef } from 'react'

// Nền lưới giống hình mẫu: grid nhỏ + điểm sáng chuyển động nhẹ
export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })!

    let animationFrame = 0
    // Giảm DPR để mượt hơn trên máy yếu
    const DPR = 1

    const resize = () => {
      const { innerWidth, innerHeight } = window
      canvas.width = Math.floor(innerWidth * DPR)
      canvas.height = Math.floor(innerHeight * DPR)
      canvas.style.width = `${innerWidth}px`
      canvas.style.height = `${innerHeight}px`
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      rebuildGrid()
      rebuildDots()
    }

    // Layer grid vẽ sẵn vào offscreen để không phải vẽ lặp lại mỗi frame
    const gridCanvas = document.createElement('canvas')
    const gridCtx = gridCanvas.getContext('2d')!

    const gridSize = 32
    const dotRadius = 2
    const dots: Array<{ x: number; y: number; phase: number }> = []

    const rebuildGrid = () => {
      gridCanvas.width = window.innerWidth
      gridCanvas.height = window.innerHeight
      const gctx = gridCtx
      // nền gradient tối
      const g = gctx.createLinearGradient(0, 0, 0, window.innerHeight)
      g.addColorStop(0, '#0b0b0f')
      g.addColorStop(1, '#121225')
      gctx.fillStyle = g
      gctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      // vẽ lưới 1 lần
      gctx.strokeStyle = 'rgba(255,255,255,0.06)'
      gctx.lineWidth = 1
      for (let x = 0; x <= window.innerWidth; x += gridSize) {
        gctx.beginPath()
        gctx.moveTo(x + 0.5, 0)
        gctx.lineTo(x + 0.5, window.innerHeight)
        gctx.stroke()
      }
      for (let y = 0; y <= window.innerHeight; y += gridSize) {
        gctx.beginPath()
        gctx.moveTo(0, y + 0.5)
        gctx.lineTo(window.innerWidth, y + 0.5)
        gctx.stroke()
      }
    }

    const rebuildDots = () => {
      dots.length = 0
      const cols = Math.ceil(window.innerWidth / gridSize) + 2
      const rows = Math.ceil(window.innerHeight / gridSize) + 2
      for (let r = -1; r < rows; r++) {
        for (let c = -1; c < cols; c++) {
          dots.push({ x: c * gridSize, y: r * gridSize, phase: Math.random() * Math.PI * 2 })
        }
      }
    }

    resize()
    window.addEventListener('resize', resize)

    const draw = (t: number) => {
      // vẽ nền grid từ offscreen
      ctx.drawImage(gridCanvas, 0, 0)

      // chấm sáng nhẹ có nhịp thở
      for (const d of dots) {
        const pulse = 0.3 + 0.5 * Math.abs(Math.sin(t * 0.001 + d.phase))
        ctx.beginPath()
        ctx.arc(d.x, d.y, dotRadius * pulse, 0, Math.PI * 2)
        const radial = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, dotRadius * 2)
        radial.addColorStop(0, 'rgba(0,255,255,0.25)')
        radial.addColorStop(1, 'rgba(0,255,255,0)')
        ctx.fillStyle = radial
        ctx.fill()
      }

      animationFrame = requestAnimationFrame(draw)
    }

    // Tôn trọng reduce-motion: nếu người dùng muốn giảm chuyển động, không animate dots
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (!prefersReduced) {
      animationFrame = requestAnimationFrame(draw)
    } else {
      ctx.drawImage(gridCanvas, 0, 0)
    }

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
      {/* overlay mờ cho chiều sâu */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />
    </div>
  )
}


