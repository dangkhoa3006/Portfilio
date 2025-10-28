'use client'

import RevealOnScroll from '@/components/RevealOnScroll'
import TypingAnimation from '@/components/TypingAnimation'
import LogoLoop from '@/components/LogoLoop'
import Badge3DWrapper from '@/components/Badge3DWrapper'
import SocialLinks from '@/components/SocialLinks'
import techLogos from '@/data/techLogos'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 overflow-x-hidden">
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto w-full overflow-x-hidden">
        <div className="lg:hidden">
          <div className="text-center space-y-5 px-4">
            <h3 className="text-sm text-white/80">Hello, It's Me</h3>
            <h1 className="text-4xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Đăng Khoa</span>
            </h1>
            <div className="text-base text-white flex flex-wrap items-baseline justify-center gap-x-2 mb-3">
              <span className="whitespace-nowrap">And I am a</span>
              <TypingAnimation texts={["Full Stack Developer","Backend Engineer","UI/UX Designer","Problem Solver","Tech Enthusiast"]} speed={80} deleteSpeed={40} pauseTime={2500} />
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-md mx-auto">
              I am a passionate developer who loves creating amazing digital experiences and solving complex problems with innovative solutions. With expertise in modern web technologies, I build scalable applications that make a difference.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="relative w-[300px] h-[420px]" style={{ border: 'none', outline: 'none', boxShadow: 'none', background: 'transparent' }}>
                <div className="absolute inset-0">
                  <Badge3DWrapper fullName="Khoa Dang" jobTitle="Full Stack Developer" userImageUrl="/image/avt.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <RevealOnScroll>
            <div className="text-center lg:text-left space-y-4 lg:space-y-6 px-6 lg:px-0">
              <div className="space-y-4">
                <h3 className="text-base lg:text-lg text-white/80">Hello, I'm</h3>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Đăng Khoa
                  </span>
                </h1>
                <div className="text-lg md:text-xl lg:text-2xl text-white min-h-[2.5rem] flex flex-wrap items-baseline justify-center lg:justify-start gap-x-2 mb-4 relative z-10">
                  <span className="whitespace-nowrap">And I am a</span>
                  <span className="whitespace-nowrap inline-flex">
                    <TypingAnimation 
                      texts={["Frontend Developer","Backend Engineer","UI/UX Designer","Problem Solver","Tech Enthusiast"]}
                      speed={80}
                      deleteSpeed={40}
                      pauseTime={2500}
                    />
                  </span>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 relative z-0">
                <p className="text-white/80 text-base lg:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  I am a passionate developer who loves creating amazing digital experiences and solving complex problems with innovative solutions. With expertise in modern web technologies, I build scalable applications that make a difference.
                </p>
              </div>

              <SocialLinks className="justify-center lg:justify-start space-x-0" />

              <div className="flex justify-center lg:justify-start">
                <button className="group px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-3 text-base lg:text-lg font-medium">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  More About Me
                </button>
              </div>

              <div className="mt-8 max-w-full overflow-hidden">
                <h3 className="text-white/60 text-sm font-medium mb-4 text-center">Technologies I Work With</h3>
                <div className="w-full max-w-xs mx-auto px-4">
                  <LogoLoop
                    logos={techLogos.slice(0, 8)}
                    speed={100}
                    direction="left"
                    logoHeight={28}
                    gap={20}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#1e3a8a"
                    ariaLabel="Technology stack"
                  />
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={120}>
            <div className="flex justify-center lg:justify-end overflow-visible">
              <div className="relative w-[420px] h-[560px] md:w-[560px] md:h-[720px] lg:w-[640px] lg:h-[820px]" style={{ border: 'none', outline: 'none', boxShadow: 'none', background: 'transparent' }}>
                <div className="absolute inset-0">
                  <Badge3DWrapper fullName="Khoa Dang" jobTitle="Full Stack Developer" userImageUrl="/image/avt.jpg" />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}


