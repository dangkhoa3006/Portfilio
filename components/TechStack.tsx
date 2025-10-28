'use client'

import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import type { LogoItem } from '@/components/LogoLoop'

const LogoLoop = dynamic(() => import('@/components/LogoLoop'), {
  ssr: false,
  loading: () => <div className="h-16" />
})

type Props = {
  logos: LogoItem[]
  speed?: number
  logoHeight?: number
  gap?: number
}

export default function TechStack({ logos, speed = 60, logoHeight = 56, gap = 40 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className="w-full max-w-5xl mx-auto px-6">
      {visible ? (
        <LogoLoop
          logos={logos}
          speed={speed}
          direction="left"
          logoHeight={logoHeight}
          gap={gap}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#1e3a8a"
          ariaLabel="Technology stack"
        />
      ) : (
        <div className="h-[72px] w-full bg-white/5 rounded-xl animate-pulse" />
      )}
    </div>
  )
}


