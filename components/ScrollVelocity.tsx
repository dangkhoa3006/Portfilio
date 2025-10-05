'use client';

import { useEffect, useRef } from 'react';

interface ScrollVelocityProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export default function ScrollVelocity({ 
  children, 
  className = '', 
  speed = 0.5 
}: ScrollVelocityProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let ticking = false;

    const updateTransform = () => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element is visible
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const elementCenter = elementTop + elementHeight / 2;
      const windowCenter = windowHeight / 2;
      
      // Calculate distance from center
      const distanceFromCenter = elementCenter - windowCenter;
      
      // Apply transform based on scroll velocity
      const translateY = distanceFromCenter * speed;
      
      element.style.transform = `translateY(${translateY}px)`;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateTransform);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial call
    updateTransform();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
