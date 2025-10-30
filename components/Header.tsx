'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Highlights', href: '#strength' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section based on scroll position
      const sections = ['home', 'about', 'strength', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200; // Tăng offset để detect sớm hơn
      
      let currentSection = 'home'; // Default to home
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            currentSection = section;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    // Initial call to set active section
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click navigation
  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = href.substring(1);
    setActiveSection(targetId);
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className={`hidden md:block fixed left-1/2 transform -translate-x-1/2 z-30 transition-all duration-300 ${
        isScrolled ? 'top-2' : 'top-6'
      }`}>
      <nav className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-full transition-all duration-300 ${
        isScrolled ? 'px-6 py-3 shadow-xl' : 'px-8 py-4 shadow-2xl'
      }`} style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}>
        {/* Mirror/Reflection Effect */}
        <div className="absolute inset-0 rounded-full pointer-events-none" style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.1)'
        }}></div>
          <div className="relative flex items-center justify-center space-x-6 z-10">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className={`relative group px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'text-white bg-white/20' 
                      : 'text-white/80 hover:text-cyan-300 hover:bg-white/10'
                  }`}
                  style={{
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                    filter: 'drop-shadow(0 1px 1px rgba(255,255,255,0.1))'
                  }}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
                    isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                  }`}></span>
                </a>
              );
            })}
          </div>
        </nav>
      </header>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden fixed top-6 right-0 z-[9999] text-white p-3 rounded-lg hover:bg-white/10 transition-all duration-300 relative border-0 outline-none"
        style={{
          background: 'transparent',
          backdropFilter: 'none',
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
          position: 'fixed',
          top: '24px',
          right: '0px',
          zIndex: 9999
        }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6 relative z-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{
            filter: 'drop-shadow(0 1px 1px rgba(255,255,255,0.1))'
          }}
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Fullscreen Overlay Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col items-center justify-center space-y-8" style={{
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(20px)'
        }}>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Navigation
            </h2>
            <div className="space-y-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className={`block text-xl py-3 px-6 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'text-cyan-300 font-semibold bg-white/10' 
                        : 'text-white/80 hover:text-cyan-300 hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
