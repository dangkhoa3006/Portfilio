'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isInitializedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Thiết lập kích thước canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Tạo particles với hiệu ứng entrance
    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 3, // Tăng tốc độ di chuyển
          vy: (Math.random() - 0.5) * 3,
          connections: []
        });
      }
    };

    // Hiệu ứng dội lại khi vào trang
    const createEntranceEffect = () => {
      if (isInitializedRef.current) return;
      
      const particles = particlesRef.current;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      particles.forEach((particle, index) => {
        const dx = particle.x - centerX;
        const dy = particle.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = Math.min(distance / 100, 3); // Lực dội tối đa
        
        // Tạo hiệu ứng dội từ trung tâm với tốc độ cao hơn
        particle.vx = (dx / distance) * force * (Math.random() * 4 + 2);
        particle.vy = (dy / distance) * force * (Math.random() * 4 + 2);
      });
      
      isInitializedRef.current = true;
    };

    createParticles();
    
    // Tạo hiệu ứng entrance sau một chút delay
    setTimeout(() => {
      createEntranceEffect();
    }, 500);

    // Hàm vẽ
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const maxDistance = 120;

      // Vẽ connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Vẽ particles
      particles.forEach(particle => {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Mouse repulsion effect
        const mouse = mouseRef.current;
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const repulsionRadius = 80;
        const repulsionStrength = 0.3;

        if (distance < repulsionRadius && distance > 0) {
          const force = (repulsionRadius - distance) / repulsionRadius;
          const repulsionX = (dx / distance) * force * repulsionStrength;
          const repulsionY = (dy / distance) * force * repulsionStrength;
          
          particle.vx += repulsionX;
          particle.vy += repulsionY;
        }

        // Damping nhẹ hơn để particles di chuyển tự nhiên hơn
        particle.vx *= 0.995;
        particle.vy *= 0.995;
        
        // Thêm chuyển động tự nhiên với tốc độ cao hơn
        particle.vx += (Math.random() - 0.5) * 0.05;
        particle.vy += (Math.random() - 0.5) * 0.05;

        // Cập nhật vị trí
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Giữ particles trong canvas
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
}
