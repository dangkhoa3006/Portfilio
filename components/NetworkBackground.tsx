'use client'

import { useEffect, useRef } from 'react'

// Hiệu ứng mạng lưới điểm-nối nhẹ, phủ lên grid hiện tại
export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })!

    let raf = 0
    const DPR = Math.min(1.5, window.devicePixelRatio || 1)

    type Node = { x: number; y: number; vx: number; vy: number }
    const nodes: Node[] = []
    const LINKS_RANGE = 180 // px – dày hơn chút
    const NODES_BASE = 36
    const MOUSE_INFLUENCE = 220
    const MOUSE_REPEL = 2.0

    const mouse = { x: 0, y: 0, active: false }

    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window
      canvas.width = Math.floor(w * DPR)
      canvas.height = Math.floor(h * DPR)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)

      const targetCount = Math.round((w * h) / (1280 * 720) * NODES_BASE)
      nodes.length = 0
      for (let i = 0; i < targetCount; i++) {
        const speed = 15 + Math.random() * 25 // px/s
        const angle = Math.random() * Math.PI * 2
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
        })
      }
    }

    let lastTime = 0
    const step = (time: number) => {
      if (!lastTime) lastTime = time
      let dt = (time - lastTime) / 1000
      lastTime = time
      // clamp để tránh nhảy khung lớn
      if (dt > 0.05) dt = 0.016
      const { innerWidth: w, innerHeight: h } = window

      ctx.clearRect(0, 0, w, h)
      // tạo cảm giác phát sáng nhẹ
      ctx.save()
      ctx.globalCompositeOperation = 'lighter'

      // Vẽ liên kết
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < LINKS_RANGE) {
            const alpha = 0.18 * (1 - d / LINKS_RANGE)
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`
            ctx.lineWidth = 0.9
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // Vẽ nodes
      for (const n of nodes) {
        // Đẩy node ra xa con trỏ để "tách ra"
        if (mouse.active) {
          const mdx = n.x - mouse.x
          const mdy = n.y - mouse.y
          const md = Math.hypot(mdx, mdy) || 1
          if (md < MOUSE_INFLUENCE) {
            const force = (1 - md / MOUSE_INFLUENCE) * MOUSE_REPEL
            n.vx += (mdx / md) * force * 60 // scale theo fps
            n.vy += (mdy / md) * force * 60
          }
        }

        // cập nhật vị trí theo thời gian thực và dội lại khi chạm biên
        n.x += n.vx * dt
        n.y += n.vy * dt
        const pad = 2
        if (n.x < pad) {
          n.x = pad
          n.vx = Math.abs(n.vx)
        }
        if (n.x > w - pad) {
          n.x = w - pad
          n.vx = -Math.abs(n.vx)
        }
        if (n.y < pad) {
          n.y = pad
          n.vy = Math.abs(n.vy)
        }
        if (n.y > h - pad) {
          n.y = h - pad
          n.vy = -Math.abs(n.vy)
        }

        const r = 2.6
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 3)
        g.addColorStop(0, 'rgba(56,189,248,0.65)')
        g.addColorStop(1, 'rgba(56,189,248,0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
        ctx.fill()
        // ma sát rất nhẹ
        n.vx *= 0.998
        n.vy *= 0.998
      }

      ctx.restore()
      raf = requestAnimationFrame(step)
    }

    resize()
    window.addEventListener('resize', resize)
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }
    const onMouseLeave = () => (mouse.active = false)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('touchmove', (e) => {
      const t = e.touches[0]
      if (!t) return
      mouse.x = t.clientX
      mouse.y = t.clientY
      mouse.active = true
    }, { passive: true })

    // luôn animate để đảm bảo thấy hiệu ứng rõ ràng
    raf = requestAnimationFrame(step)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  )
}


