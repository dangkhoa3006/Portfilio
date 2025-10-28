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

import { useMemo } from 'react';

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

  return (
    <div className="min-h-screen relative overflow-x-hidden">
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
        <section id="about" className="min-h-screen flex items-center justify-center px-4 overflow-x-hidden cv-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-white/80">
              I'm a passionate developer who loves creating amazing digital experiences.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-4 overflow-x-hidden cv-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                My Projects
              </span>
            </h2>
            <p className="text-xl text-white/80">
              Here are some of my recent work and projects.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center justify-center px-4 overflow-x-hidden cv-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="text-xl text-white/80">
              Technologies and tools I work with.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-4 overflow-x-hidden cv-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Contact
              </span>
            </h2>
            <p className="text-xl text-white/80">
              Let's work together and create something amazing.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 
