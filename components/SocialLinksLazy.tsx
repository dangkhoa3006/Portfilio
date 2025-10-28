'use client'

import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

const SocialLinks = dynamic(() => import('@/components/SocialLinks'), {
  ssr: false,
  loading: () => <div className="h-12" />
})

type Props = { className?: string }

export default function SocialLinksLazy({ className }: Props) {
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
      { rootMargin: '300px' }
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {visible ? <SocialLinks className={className} /> : <div className="h-12" />}
    </div>
  )
}


