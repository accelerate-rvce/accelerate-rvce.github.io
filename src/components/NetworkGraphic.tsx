import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glow: boolean;
}

export const NetworkGraphic: React.FC = () => {
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

    const colors = ['#22B6F4', '#3B6FE0', '#8B3FEE'];
    const nodes: Node[] = [];
    const numNodes = Math.min(45, Math.floor((width * height) / 18000));

    // Initialize central node
    const centralNode: Node = {
      x: width / 2,
      y: height / 2,
      vx: 0,
      vy: 0,
      radius: 6,
      color: '#22B6F4',
      glow: true,
    };

    // Initialize floating nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        glow: Math.random() > 0.7,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      centralNode.x = width / 2;
      centralNode.y = height / 2;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Keep central node near center, slightly floating
      if (!isReduced) {
        centralNode.x = width / 2 + Math.sin(Date.now() * 0.001) * 15;
        centralNode.y = height / 2 + Math.cos(Date.now() * 0.001) * 15;
      } else {
        centralNode.x = width / 2;
        centralNode.y = height / 2;
      }

      // Draw lines between nodes
      const maxDistance = 120;
      const allNodes = [centralNode, ...nodes];

      for (let i = 0; i < allNodes.length; i++) {
        const n1 = allNodes[i];
        for (let j = i + 1; j < allNodes.length; j++) {
          const n2 = allNodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.15;
            ctx.strokeStyle = `rgba(146, 146, 163, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // Draw connection to mouse if active
      if (mouseRef.current.active && !isReduced) {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        for (const node of allNodes) {
          const dx = node.x - mx;
          const dy = node.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.25;
            ctx.strokeStyle = `rgba(34, 182, 244, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mx, my);
            ctx.stroke();

            // Pull node slightly towards mouse
            if (node !== centralNode) {
              node.x -= dx * 0.01;
              node.y -= dy * 0.01;
            }
          }
        }
      }

      // Draw central node
      ctx.shadowBlur = isReduced ? 0 : 25;
      ctx.shadowColor = centralNode.color;
      ctx.fillStyle = centralNode.color;
      ctx.beginPath();
      ctx.arc(centralNode.x, centralNode.y, centralNode.radius, 0, Math.PI * 2);
      ctx.fill();

      // Reset shadow for standard nodes
      ctx.shadowBlur = 0;

      // Update and draw floating nodes
      for (const node of nodes) {
        if (!isReduced) {
          node.x += node.vx;
          node.y += node.vy;

          // Boundary bounce
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }

        // Render node glow if configured
        if (node.glow && !isReduced) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = node.color;
        }
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      checkReducedMotion.removeEventListener('change', handleMotionChange);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
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
export default NetworkGraphic;
