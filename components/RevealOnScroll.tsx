'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
  delayMs?: number
  distance?: number
}

export default function RevealOnScroll({ children, delayMs = 0, distance = 12 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Tôn trọng tuỳ chọn giảm chuyển động
    const prefersReduced = typeof window !== 'undefined' &&
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setVisible(true), delayMs)
            io.disconnect()
          }
        })
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delayMs])

  return (
    <div
      ref={ref}
      style={{
        transform: visible ? 'translateY(0px)' : `translateY(${distance}px)`,
        opacity: visible ? 1 : 0,
        transition: 'transform 500ms cubic-bezier(0.22,1,0.36,1), opacity 500ms ease',
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  )
}


