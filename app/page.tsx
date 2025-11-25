"use client";

import RevealOnScroll from '@/components/RevealOnScroll';
import Header from '@/components/Header';
import TypingAnimationLazy from '@/components/TypingAnimationLazy';
import TypingAnimation from '@/components/TypingAnimation';
import TechStack from '@/components/TechStack';
import Footer from '@/components/Footer';
import Badge3DLazy from '@/components/Badge3DLazy';
import Badge3DWrapper from '@/components/Badge3DWrapper';
import SocialLinksLazy from '@/components/SocialLinksLazy';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiHtml5,
  SiCss3,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiDocker
} from 'react-icons/si';

import { useMemo, useState } from 'react';

export default function Home() {
  const techLogos = useMemo(() => ([
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  ]), []);

  const timelineItems = useMemo(() => ([
    {
      title: 'Full Stack Developer',
      time: '2023 - Present',
      desc:
        'Building full‑stack web applications with React, Node.js, and modern tooling.'
    },
    {
      title: 'Frontend Developer',
      time: '2022 - 2023',
      desc:
        'Focused on user interfaces with React, TypeScript, and contemporary frameworks.'
    },
    {
      title: 'Learning & Growth',
      time: '2020 - 2022',
      desc:
        'Self‑learning and improving through personal projects and online courses.'
    }
  ]), []);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen relative overflow-x-hidden page-frame">
      <Header />
      <main className="relative z-10 pt-12 md:pt-16">
        {/* Portfolio content sẽ được thêm vào đây */}
        <section id="home" className="min-h-screen flex items-center justify-center relative px-4 overflow-x-hidden">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

          <div className="relative z-10 max-w-7xl mx-auto w-full overflow-x-hidden">
            {/* Mobile layout */}
            <div className="lg:hidden">
              <div className="text-center space-y-5 px-4">
                <h3 className="text-sm text-white/80">Hello, I'm</h3>
                <h1 className="text-4xl font-bold text-white">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Đăng Khoa</span>
                </h1>
                <div className="text-base text-white flex flex-wrap items-baseline justify-center gap-x-2 mb-3">
                  <span className="whitespace-nowrap">And I am a</span>
                  <TypingAnimationLazy texts={["Full Stack Developer", "Backend Engineer", "UI/UX Designer", "Problem Solver", "Tech Enthusiast"]} speed={80} deleteSpeed={40} pauseTime={2500} />
                </div>
                <p className="text-white/80 text-sm leading-relaxed max-w-md mx-auto">
                  I am a passionate developer who loves creating amazing digital experiences and solving complex problems with innovative solutions. With expertise in modern web technologies, I build scalable applications that make a difference.
                </p>

                {/* Social Links (mobile) */}
                <SocialLinksLazy />

                {/* CTA Button (mobile) */}
                <div className="flex justify-center">
                  <button className="group px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-3 text-base font-medium">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    More About Me
                  </button>
                </div>

                {/* Tech Stack (mobile) */}
                <div className="mt-6 max-w-full overflow-hidden">
                  <h3 className="text-white/60 text-sm font-medium mb-4 text-center">Technologies I Work With</h3>
                  <TechStack logos={techLogos} speed={60} logoHeight={56} gap={40} />
                </div>

                {/* Card 3D trên mobile - kích thước gọn */}
                <div className="mt-6 flex justify-center">
                  <div className="relative w-[300px] h-[420px] border-0 outline-none shadow-none bg-transparent">
                    <div className="absolute inset-0">
                      <Badge3DLazy fullName="Khoa Dang" jobTitle="Full Stack Developer" userImageUrl="/image/avt.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              {/* Left Section - Introduction */}
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
                        <TypingAnimationLazy
                          texts={[
                            "Frontend Developer",
                            "Backend Engineer",
                            "UI/UX Designer",
                            "Problem Solver",
                            "Tech Enthusiast"
                          ]}
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

                  {/* Social Links */}
                  <SocialLinksLazy />

                  {/* CTA Button */}
                  <div className="flex justify-center lg:justify-start">
                    <button className="group px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-3 text-base lg:text-lg font-medium">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      More About Me
                    </button>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-8 max-w-full overflow-hidden">
                    <h3 className="text-white/60 text-sm font-medium mb-4 text-center">
                      Technologies I Work With
                    </h3>
                    <TechStack logos={techLogos} speed={60} logoHeight={56} gap={40} />
                  </div>
                </div>
              </RevealOnScroll>

              {/* Right Section - 3D Badge */}
              <RevealOnScroll delayMs={120}>
                <div className="flex justify-center lg:justify-end overflow-visible">
                  <div className="relative w-[420px] h-[560px] md:w-[560px] md:h-[720px] lg:w-[640px] lg:h-[820px] border-0 outline-none shadow-none bg-transparent">
                    <div className="absolute inset-0">
                      <Badge3DLazy fullName="Khoa Dang" jobTitle="Full Stack Developer" userImageUrl="/image/avt.jpg" />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-4 overflow-x-hidden cv-auto py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                I'm a Full Stack Developer passionate about crafting delightful digital experiences and solving complex problems with modern technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left - Personal Info */}
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border-animated-conic">
                  <h3 className="text-2xl font-bold text-white mb-6">Personal Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Full name</p>
                        <p className="text-white font-medium">Dang Khoa</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Role</p>
                        <p className="text-white font-medium">Full Stack Developer</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Location</p>
                        <p className="text-white font-medium">Ho Chi Minh City, Vietnam</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Timeline */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-8">Career Journey</h3>
                <div
                  className="space-y-6"
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {timelineItems.map((item, index) => (
                    <div key={item.title} className="flex items-start space-x-4">
                      <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div
                        onMouseEnter={() => setHoveredIndex(index)}
                        className={
                          `bg-white/5 backdrop-blur-md rounded-xl p-6 flex-1 transition-transform duration-300 will-change-transform ` +
                          (index === 1 ? 'border-animated-radial ' : 'border-animated-conic ') +
                          (hoveredIndex === index
                            ? '-translate-x-4 bg-white/10 shadow-lg shadow-blue-500/10'
                            : hoveredIndex !== null
                              ? 'translate-x-2'
                              : '')
                        }
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                          <span className="text-blue-400 text-sm">{item.time}</span>
                        </div>
                        <p className="text-white/70 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strength Section (Sức mạnh OCTOTECH style) */}
        <section id="strength" className="min-h-[70vh] flex items-center justify-center px-4 overflow-x-hidden cv-auto py-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Highlights</span>
              </h2>
              <p className="text-white/70 max-w-3xl mx-auto">Values I pursue when building products.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="neon-card glass-hover group" data-color="teal">
                <div className="glass-panel glass-animated p-8 min-h-[180px] flex items-center justify-center text-center relative">
                  <span className="glass-shine" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white">Creativity</h3>
                    <p className="text-white/80 mt-2">I constantly experiment to find unique solutions</p>
                  </div>
                </div>
              </div>

              <div className="neon-card glass-hover group" data-color="green">
                <div className="glass-panel glass-animated p-8 min-h-[180px] flex items-center justify-center text-center relative">
                  <span className="glass-shine" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white">User-centered</h3>
                    <p className="text-white/80 mt-2">Prioritize intuitive, easy-to-use experiences</p>
                  </div>
                </div>
              </div>

              <div className="neon-card glass-hover group" data-color="orange">
                <div className="glass-panel glass-animated p-8 min-h-[180px] flex items-center justify-center text-center relative">
                  <span className="glass-shine" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white">Experience</h3>
                    <p className="text-white/80 mt-2">5+ years building real-world web apps</p>
                  </div>
                </div>
              </div>

              <div className="neon-card glass-hover group" data-color="purple">
                <div className="glass-panel glass-animated p-8 min-h-[180px] flex items-center justify-center text-center relative">
                  <span className="glass-shine" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white">Preferred stack</h3>
                    <p className="text-white/80 mt-2">React, Next.js, Node.js, Tailwind, AI/ML</p>
                  </div>
                </div>
              </div>

              <div className="neon-card glass-hover group" data-color="red">
                <div className="glass-panel glass-animated p-8 min-h-[180px] flex items-center justify-center text-center relative">
                  <span className="glass-shine" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white">Fast response</h3>
                    <p className="text-white/80 mt-2">Proactively communicate and resolve issues quickly</p>
                  </div>
                </div>
              </div>

              <div className="neon-card glass-hover group" data-color="pink">
                <div className="glass-panel glass-animated p-8 min-h-[180px] flex items-center justify-center text-center relative">
                  <span className="glass-shine" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white">Delivery speed</h3>
                    <p className="text-white/80 mt-2">Automated CI/CD shortens time-to-ship</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-4 overflow-x-hidden cv-auto py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  My Projects
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                A selection of projects I’ve built, from web apps to mobile apps and other solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 border-animated-conic">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl">🛒</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">E-Commerce Platform</h3>
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">Full Stack</span>
                  </div>
                  <p className="text-white/70 text-sm mb-4">
                    A complete e‑commerce platform with React, Node.js, MongoDB, and integrated payments.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">React</span>
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">Node.js</span>
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">MongoDB</span>
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">Stripe</span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">Live Demo</a>
                    <a href="#" className="text-white/60 hover:text-white/80 text-sm font-medium">GitHub</a>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 border-animated-conic">
                <div className="h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-6xl">📱</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">Task Management App</h3>
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Mobile</span>
                  </div>
                  <p className="text-white/70 text-sm mb-4">
                    A task management app with a friendly UI, real‑time sync, and push notifications.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">React Native</span>
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">Firebase</span>
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">TypeScript</span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">App Store</a>
                    <a href="#" className="text-white/60 hover:text-white/80 text-sm font-medium">GitHub</a>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 border-animated-conic">
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="text-6xl">🤖</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">AI Dashboard</h3>
                    <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">AI/ML</span>
                  </div>
                  <p className="text-white/70 text-sm mb-4">
                    An analytics dashboard powered by AI/ML with interactive visualizations.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">Python</span>
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">TensorFlow</span>
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">D3.js</span>
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">FastAPI</span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">Live Demo</a>
                    <a href="#" className="text-white/60 hover:text-white/80 text-sm font-medium">GitHub</a>
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 border-animated-conic">
                <div className="h-48 bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                  <div className="text-6xl">🌐</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">Portfolio Website</h3>
                    <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full">Web</span>
                  </div>
                  <p className="text-white/70 text-sm mb-4">
                    A personal portfolio website with modern design, 3D effects, and performance optimizations.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">Next.js</span>
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">Three.js</span>
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">Tailwind</span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">Live Site</a>
                    <a href="#" className="text-white/60 hover:text-white/80 text-sm font-medium">GitHub</a>
                  </div>
                </div>
              </div>

              {/* Project 5 */}
              <div className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 border-animated-conic">
                <div className="h-48 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center">
                  <div className="text-6xl">💬</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">Real-time Chat App</h3>
                    <span className="text-xs bg-teal-500/20 text-teal-400 px-2 py-1 rounded-full">Real-time</span>
                  </div>
                  <p className="text-white/70 text-sm mb-4">
                    A real‑time chat app with Socket.io, group chats, file sharing, and emoji reactions.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">Socket.io</span>
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">Express</span>
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">Redis</span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">Live Demo</a>
                    <a href="#" className="text-white/60 hover:text-white/80 text-sm font-medium">GitHub</a>
                  </div>
                </div>
              </div>

              {/* Project 6 */}
              <div className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 border-animated-conic">
                <div className="h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl">🔐</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">Auth System</h3>
                    <span className="text-xs bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded-full">Security</span>
                  </div>
                  <p className="text-white/70 text-sm mb-4">
                    A secure authentication system with JWT, OAuth2, 2FA, and role management.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">JWT</span>
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">OAuth2</span>
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">2FA</span>
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">bcrypt</span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">Documentation</a>
                    <a href="#" className="text-white/60 hover:text-white/80 text-sm font-medium">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center justify-center px-4 overflow-x-hidden cv-auto py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  My Skills
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Technologies and tools I use to build high‑quality products.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Frontend Skills */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Frontend</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">React/Next.js</span>
                      <span className="text-blue-400 text-sm font-medium">85%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">TypeScript</span>
                      <span className="text-blue-400 text-sm font-medium">80%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">Tailwind CSS</span>
                      <span className="text-blue-400 text-sm font-medium">80%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">Three.js</span>
                      <span className="text-blue-400 text-sm font-medium">55%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '55%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backend Skills */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Backend</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">Laravel PHP</span>
                      <span className="text-green-400 text-sm font-medium">80%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">Python</span>
                      <span className="text-green-400 text-sm font-medium">70%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">MySQL</span>
                      <span className="text-green-400 text-sm font-medium">70%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">PostgreSQL</span>
                      <span className="text-green-400 text-sm font-medium">60%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools & Others */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Tools & Others</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">Git/GitHub</span>
                      <span className="text-purple-400 text-sm font-medium">90%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">Docker</span>
                      <span className="text-purple-400 text-sm font-medium">75%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">AWS</span>
                      <span className="text-purple-400 text-sm font-medium">70%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">Figma</span>
                      <span className="text-purple-400 text-sm font-medium">85%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Skills Grid */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Other Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {['JavaScript', 'HTML5', 'CSS3', 'SASS', 'Webpack', 'Vite', 'Jest', 'Cypress', 'Socket.io', 'Redis', 'GraphQL', 'REST API'].map((tech) => (
                  <div key={tech} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300">
                    <span className="text-white/80 text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-4 overflow-x-hidden cv-auto py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Contact Me
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Got an exciting project? Let’s connect and build something great together!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">Full name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-white/80 text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Project subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Describe your project in detail..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Email</p>
                        <p className="text-white font-medium">dangkhoa.octotech@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Phone</p>
                        <p className="text-white font-medium">0336730183</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Address</p>
                        <p className="text-white font-medium">Ho Chi Minh City, Vietnam</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Connect with me</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Availability Status */}
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border border-green-500/30 rounded-2xl p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div>
                      <h4 className="text-white font-semibold">Open for new projects</h4>
                      <p className="text-white/70 text-sm">Typical response time: 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 
