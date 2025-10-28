import RevealOnScroll from '@/components/RevealOnScroll';
import Header from '@/components/Header';
import TypingAnimation from '@/components/TypingAnimation';
import TechStack from '@/components/TechStack';
import Footer from '@/components/Footer';
import Badge3DWrapper from '@/components/Badge3DWrapper';
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

export default function Home() {
  const techLogos = [
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
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Header />
      <main className="relative z-10 pt-12 md:pt-16">
        {/* Portfolio content sẽ được thêm vào đây */}
        <section id="home" className="min-h-screen flex items-center justify-center relative px-4 overflow-x-hidden">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

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
                  <TypingAnimation texts={["Full Stack Developer", "Backend Engineer", "UI/UX Designer", "Problem Solver", "Tech Enthusiast"]} speed={80} deleteSpeed={40} pauseTime={2500} />
                </div>
                <p className="text-white/80 text-sm leading-relaxed max-w-md mx-auto">
                  I am a passionate developer who loves creating amazing digital experiences and solving complex problems with innovative solutions. With expertise in modern web technologies, I build scalable applications that make a difference.
                </p>

                {/* Social Links (mobile) */}
                <div className="flex justify-center space-x-4">
                  <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>

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
                  <div className="relative w-[300px] h-[420px]" style={{ border: 'none', outline: 'none', boxShadow: 'none', background: 'transparent' }}>
                    <div className="absolute inset-0">
                      <Badge3DWrapper fullName="Khoa Dang" jobTitle="Full Stack Developer" userImageUrl="/image/avt.jpg" />
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
                        <TypingAnimation
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
                  <div className="flex justify-center lg:justify-start space-x-4">
                    <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67 .15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133 .298-.347 .446-.52 .149-.174 .198-.298 .298-.497 .099-.198 .05-.371 -.025-.52 -.075-.149 -.669-1.612 -.916-2.207 -.242-.579 -.487-.5 -.669-.51 -.173-.008 -.371-.01 -.57-.01 -.198 0 -.52 .074 -.792 .372 -.272 .297 -1.04 1.016 -1.04 2.479 0 1.462 1.065 2.875 1.213 3.074 .149 .198 2.096 3.2 5.077 4.487 .709 .306 1.262 .489 1.694 .625 .712 .227 1.36 .195 1.871 .118 .571-.085 1.758-.719 2.006-1.413 .248-.694 .248-1.289 .173-1.413 -.074-.124 -.272-.198 -.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214 -3.741 .982 .998-3.648 -.235-.374a9.86 9.86 0 01-1.51-5.26c .001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c -.003 5.45 -4.437 9.884 -9.885 9.884" />
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377 .505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93 .502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871 .505 9.376 .505 9.376 .505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138 .92-2.063 2.063-2.063 1.14 0 2.064 .925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C .792 0 0 .774 0 1.729v20.542C0 23.227 .792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h .003z" />
                      </svg>
                    </a>
                  </div>

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

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-4 overflow-x-hidden">
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
        <section id="projects" className="min-h-screen flex items-center justify-center px-4 overflow-x-hidden">
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
        <section id="skills" className="min-h-screen flex items-center justify-center px-4 overflow-x-hidden">
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
        <section id="contact" className="min-h-screen flex items-center justify-center px-4 overflow-x-hidden">
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
