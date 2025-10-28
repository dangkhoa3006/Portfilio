'use client'

import React, { useEffect, useRef, useState, Suspense } from 'react'
import dynamic from 'next/dynamic'

const Badge3DWrapper = dynamic(() => import('@/components/Badge3DWrapper'), {
    ssr: false,
    loading: () => (
        <div className="absolute inset-0 flex items-center justify-center text-white/70 text-sm">
            Loading 3D…
        </div>
    ),
})

type Props = {
    fullName?: string
    jobTitle?: string
    userImageUrl?: string
    className?: string
}

export default function Badge3DLazy(props: Props) {
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
        <div ref={ref} className={`relative w-full h-full ${props.className ?? ''}`}>
            {visible ? (
                <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center text-white/70 text-sm">Loading 3D…</div>}>
                    <Badge3DWrapper {...props} />
                </Suspense>
            ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white/70 text-sm">Loading 3D…</div>
            )}
        </div>
    )
}


