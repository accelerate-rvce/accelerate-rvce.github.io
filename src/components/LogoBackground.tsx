import React, { useEffect, useRef } from 'react';

interface LogoParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  angle: number;
  rotationSpeed: number;
  baseOpacity: number;
  currentOpacity: number;
  color1: string;
  color2: string;
}

export const LogoBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const checkReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let isReduced = checkReducedMotion.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      isReduced = e.matches;
    };
    checkReducedMotion.addEventListener('change', handleMotionChange);

    const particles: LogoParticle[] = [];
    // Increase density of logos
    const numParticles = Math.min(30, Math.floor((width * height) / 25000) + 8);

    const colors = [
      { c1: '#22B6F4', c2: '#8B3FEE' },
      { c1: '#22B6F4', c2: '#3B6FE0' },
      { c1: '#3B6FE0', c2: '#8B3FEE' }
    ];

    // Initialize floating logo particles
    for (let i = 0; i < numParticles; i++) {
      const radius = Math.random() * 12 + 10; // Radius between 10 and 22
      const colorSet = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        baseRadius: radius,
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.002,
        baseOpacity: Math.random() * 0.08 + 0.07, // Higher base opacity (7% to 15%)
        currentOpacity: 0.07,
        color1: colorSet.c1,
        color2: colorSet.c2
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleClick = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      if (clickX >= 0 && clickX <= width && clickY >= 0 && clickY <= height) {
        const count = Math.floor(Math.random() * 4) + 1;
        for (let i = 0; i < count; i++) {
          const radius = Math.random() * 12 + 10;
          const colorSet = colors[Math.floor(Math.random() * colors.length)];
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 1.6 + 0.8;

          particles.push({
            x: clickX,
            y: clickY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            baseRadius: radius,
            angle: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.006,
            baseOpacity: Math.random() * 0.08 + 0.07,
            currentOpacity: 0.25,
            color1: colorSet.c1,
            color2: colorSet.c2
          });
        }

        if (particles.length > 80) {
          particles.splice(0, particles.length - 80);
        }
      }
    };

    // Listen on window for global mouse tracking
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    // Helper to draw the wireframe logo shape relative to local origin (0, 0)
    const drawLogoShape = (ctx: CanvasRenderingContext2D, r: number, c1: string, c2: string, opacity: number) => {
      const vertices = [
        { x: 0, y: -r }, // 0: Top
        { x: r * 0.866, y: -r * 0.5 }, // 1: Top-Right
        { x: r * 0.866, y: r * 0.5 }, // 2: Bottom-Right
        { x: 0, y: r }, // 3: Bottom
        { x: -r * 0.866, y: r * 0.5 }, // 4: Bottom-Left
        { x: -r * 0.866, y: -r * 0.5 }, // 5: Top-Left
        { x: -r * 0.05, y: r * 0.125 }, // 6: Center-Left
        { x: r * 0.45, y: -r * 0.075 } // 7: Center-Right
      ];

      const drawLine = (p1: number, p2: number) => {
        ctx.beginPath();
        ctx.moveTo(vertices[p1].x, vertices[p1].y);
        ctx.lineTo(vertices[p2].x, vertices[p2].y);
        ctx.stroke();
      };

      ctx.save();
      
      // Set line gradient
      const grad = ctx.createLinearGradient(0, -r, 0, r);
      grad.addColorStop(0, c1);
      grad.addColorStop(1, c2);
      
      // Apply opacity to the stroke
      ctx.strokeStyle = grad;
      ctx.globalAlpha = opacity;
      ctx.lineWidth = 1.0;

      // Outer Hexagon
      drawLine(0, 1);
      drawLine(1, 2);
      drawLine(2, 3);
      drawLine(3, 4);
      drawLine(4, 5);
      drawLine(5, 0);

      // Inner wireframe connections
      drawLine(0, 6);
      drawLine(0, 7);
      drawLine(0, 4);
      drawLine(0, 2);
      drawLine(4, 6);
      drawLine(2, 6);
      drawLine(2, 7);
      drawLine(6, 7);

      // Node vertex markers
      vertices.forEach((v, idx) => {
        ctx.fillStyle = idx === 0 ? c1 : (idx === 3 ? c2 : (v.y < 0 ? c1 : c2));
        ctx.beginPath();
        ctx.arc(v.x, v.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Render subtle background grid
      ctx.strokeStyle = '#14141d';
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.15;
      const gridSize = 45;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1.0; // Reset alpha

      // Update and draw particles
      for (const p of particles) {
        if (!isReduced) {
          p.x += p.vx;
          p.y += p.vy;
          p.angle += p.rotationSpeed;

          // Boundary wrapping
          if (p.x < -p.baseRadius * 2) p.x = width + p.baseRadius * 2;
          if (p.x > width + p.baseRadius * 2) p.x = -p.baseRadius * 2;
          if (p.y < -p.baseRadius * 2) p.y = height + p.baseRadius * 2;
          if (p.y > height + p.baseRadius * 2) p.y = -p.baseRadius * 2;
        }

        // Mouse interaction: light up, rotate faster, and repel near mouse
        let targetOpacity = p.baseOpacity;
        if (mouseRef.current.active && !isReduced) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 220) {
            const factor = 1 - dist / 220;
            // Flare up opacity slightly when active
            targetOpacity = p.baseOpacity + factor * 0.12;
            // Dynamic rotation speed boost
            p.angle += p.rotationSpeed * factor * 2.5;
            
            // Stronger mouse repulsion force
            p.x += (dx / dist) * factor * 0.8;
            p.y += (dy / dist) * factor * 0.8;
          }
        }

        // Smooth opacity transition
        p.currentOpacity += (targetOpacity - p.currentOpacity) * 0.1;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        drawLogoShape(ctx, p.baseRadius, p.color1, p.color2, p.currentOpacity);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      checkReducedMotion.removeEventListener('change', handleMotionChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};
export default LogoBackground;
