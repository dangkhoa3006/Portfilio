'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Dynamic import chỉ để trì hoãn render 3D đến khi client load xong
// => Giúp giảm TTFB và tránh lỗi "window is not defined"
const Badge3D = dynamic(() => import('@/components/Badge3D'), {
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
}

export default function Badge3DWrapper({
  fullName = 'Đăng Khoa',
  jobTitle = 'Full Stack Developer',
  userImageUrl = '/image/avt.jpg',
}: Props) {
  return (
    <div
      className="relative w-full h-full overflow-visible"
      style={{
        zIndex: 50,
        pointerEvents: 'auto',
        background: 'transparent',
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
      }}
    >
      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center text-white/70 text-sm">
            Loading 3D…
          </div>
        }
      >
        <Badge3D
          fullName={fullName}
          jobTitle={jobTitle}
          userImageUrl={userImageUrl}
        />
      </Suspense>
    </div>
  )
}
