import React, { useEffect, useRef } from 'react';

/**
 * CherryBlossoms - High-performance continuous 60FPS Sakura particle engine
 * Uses realistic 3D aerodynamic petal tumbling, authentic notched petal geometry,
 * and seamless phase transitions without canvas re-mounting or frame stutter.
 */
export default function CherryBlossoms({
  mode = 'ambient',
  phase = 'calm', // 'single', 'gathering', 'current', 'wave', 'parting', 'calm'
  className = '',
  opacity = 1,
}) {
  const canvasRef = useRef(null);
  const phaseRef = useRef(phase);
  const modeRef = useRef(mode);

  // Keep refs updated without restarting the animation loop
  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse breeze interaction
    const mouse = { x: -2000, y: -2000, targetX: -2000, targetY: -2000 };
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }

    const isMobile = width < 768;
    const TOTAL_POOL = isMobile ? 120 : 240;

    // Authentic Japanese Sakura color palettes
    const PALETTES = [
      { base: '#f472b6', mid: '#fbcfe8', tip: '#fff0f5', vein: 'rgba(236,72,153,0.3)' },
      { base: '#fb7185', mid: '#fce7f3', tip: '#ffffff', vein: 'rgba(244,63,94,0.3)' },
      { base: '#ec4899', mid: '#fdf2f8', tip: '#fff5f7', vein: 'rgba(219,39,119,0.3)' },
      { base: '#fda4af', mid: '#ffe4e6', tip: '#ffffff', vein: 'rgba(251,113,133,0.3)' },
    ];

    class SakuraPetal {
      constructor(index) {
        this.index = index;
        this.palette = PALETTES[index % PALETTES.length];
        this.init();
      }

      init(fromCenter = false) {
        this.z = 0.5 + Math.random() * 0.9; // 3D depth perception
        this.size = (9 + Math.random() * 9) * this.z;

        if (fromCenter) {
          this.x = width * 0.5 + (Math.random() - 0.5) * 60;
          this.y = height * 0.7 + (Math.random() - 0.5) * 40;
          const burstAngle = Math.random() * Math.PI * 2;
          const burstSpeed = 2 + Math.random() * 6;
          this.vx = Math.cos(burstAngle) * burstSpeed;
          this.vy = Math.sin(burstAngle) * burstSpeed * 0.7 - 2;
        } else {
          this.x = Math.random() * (width + 200) - 100;
          this.y = Math.random() * (height + 200) - 100;
          this.vx = 0.8 + Math.random() * 1.5;
          this.vy = 1.0 + Math.random() * 1.8;
        }

        // 3D rotation angles & velocities
        this.angle = Math.random() * Math.PI * 2;
        this.spinSpeed = (Math.random() - 0.5) * 0.025;
        this.roll = Math.random() * Math.PI * 2;
        this.rollSpeed = 0.02 + Math.random() * 0.035;
        this.pitch = Math.random() * Math.PI * 2;
        this.pitchSpeed = 0.015 + Math.random() * 0.025;

        // Sway oscillation
        this.swayOffset = Math.random() * Math.PI * 2;
        this.swayFreq = 0.0018 + Math.random() * 0.0012;

        this.alpha = 0;
        this.targetAlpha = 0.75 + Math.random() * 0.25;
        this.glint = Math.random();
      }

      update(currentPhase, currentMode, time) {
        // Target active particle count per phase
        let maxActive = 18;
        if (currentMode === 'intro') {
          if (currentPhase === 'single') maxActive = 1;
          else if (currentPhase === 'gathering') maxActive = isMobile ? 18 : 36;
          else if (currentPhase === 'current') maxActive = isMobile ? 80 : 160;
          else if (currentPhase === 'wave') maxActive = isMobile ? 120 : 240;
          else if (currentPhase === 'parting') maxActive = isMobile ? 120 : 240;
          else maxActive = 20;
        } else {
          // Ambient portfolio mode: very low density, calm, subtle
          maxActive = isMobile ? 8 : 16;
        }

        const isActive = this.index < maxActive;

        // Smooth alpha interpolation (fade in / out without sudden pop)
        if (isActive) {
          this.alpha += (this.targetAlpha - this.alpha) * 0.06;
        } else {
          this.alpha += (0 - this.alpha) * 0.08;
          if (this.alpha <= 0.005) {
            this.alpha = 0;
            return;
          }
        }

        // 3D Aerodynamic tumbling & spinning
        this.angle += this.spinSpeed;
        this.roll += this.rollSpeed;
        this.pitch += this.pitchSpeed;
        this.glint = (this.glint + 0.02) % 1;

        if (currentMode === 'intro') {
          if (currentPhase === 'single') {
            // Elegant slow solitary petal drifting down-right
            this.vx = 1.4 * this.z;
            this.vy = 0.9 * this.z;
            this.x += this.vx;
            this.y += this.vy;
            this.rollSpeed = 0.015;
            this.pitchSpeed = 0.01;
          } else if (currentPhase === 'gathering') {
            // Emerging from sword impact point in graceful curved arcs
            const targetX = width * 0.5;
            const targetY = height * 0.5;
            const dx = this.x - targetX;
            const dy = this.y - targetY;
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle + 1.2) * (2.8 * this.z) + 1.5;
            this.y += Math.sin(angle + 1.2) * (1.8 * this.z) - 0.4;
          } else if (currentPhase === 'current') {
            // Senbonzakura stream: controlled curved river flow
            const riverY = height * 0.45 + Math.sin(this.x * 0.003 + time * 0.0015) * 120;
            const distY = riverY - this.y;
            this.vy += distY * 0.012;
            this.vy *= 0.92;
            this.vx = (6.5 + Math.sin(this.swayOffset + time * 0.002) * 2.5) * this.z;

            this.x += this.vx;
            this.y += this.vy;
          } else if (currentPhase === 'wave') {
            // High-speed sweeping wave across the screen
            this.vx = (11 + Math.cos(this.y * 0.004 + time * 0.003) * 4) * this.z;
            this.vy = Math.sin(this.x * 0.003 + time * 0.002) * 3;
            this.x += this.vx;
            this.y += this.vy;
          } else if (currentPhase === 'parting') {
            // Petals gracefully part outward from screen center
            const centerX = width * 0.5;
            const direction = this.x < centerX ? -1 : 1;
            const distFromCenter = Math.abs(this.x - centerX);
            const partingForce = 9 + (distFromCenter / width) * 16;
            this.vx += direction * partingForce * 0.15;
            this.vx *= 0.94;
            this.x += this.vx;
            this.y += (Math.random() - 0.5) * 2;
            this.alpha *= 0.96; // fade out as they reach edges
          }
        } else {
          // Ambient portfolio mode: soft, organic, serene drift
          const sway = Math.sin(time * this.swayFreq + this.swayOffset);
          this.vx = 0.9 * this.z + sway * 0.6;
          this.vy = 1.1 * this.z + Math.abs(sway) * 0.2;

          // Mouse breeze avoidance deflection
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            this.x += (dx / dist) * force * 5.5;
            this.y += (dy / dist) * force * 5.5;
          }

          this.x += this.vx;
          this.y += this.vy;
        }

        // Screen boundary wrap-around in ambient mode
        if (currentMode === 'ambient') {
          if (this.y > height + 40) {
            this.y = -30;
            this.x = Math.random() * (width + 100) - 50;
          }
          if (this.x > width + 40) {
            this.x = -30;
          } else if (this.x < -40) {
            this.x = width + 30;
          }
        } else if (currentMode === 'intro' && currentPhase !== 'parting') {
          if (this.x > width + 100) {
            this.x = -80;
            this.y = Math.random() * height;
          }
          if (this.y > height + 80) {
            this.y = -40;
          }
        }
      }

      draw(context) {
        if (this.alpha <= 0.01) return;

        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle);

        // 3D perspective tumbling (scale along X and Y according to roll & pitch)
        const scaleX = Math.cos(this.roll);
        const scaleY = Math.cos(this.pitch);
        context.scale(scaleX * this.z, scaleY * this.z);
        context.globalAlpha = this.alpha;

        const s = this.size;

        // Authentic Japanese Sakura petal geometry with notched tip
        context.beginPath();
        context.moveTo(0, s * 0.9); // Petal base point

        // Right curved petal lobe
        context.bezierCurveTo(s * 0.6, s * 0.5, s * 0.85, -s * 0.2, s * 0.35, -s * 0.85);
        // Center top notch
        context.bezierCurveTo(s * 0.15, -s * 0.7, 0, -s * 0.65, 0, -s * 0.65);
        // Left top notch & left curved lobe
        context.bezierCurveTo(0, -s * 0.65, -s * 0.15, -s * 0.7, -s * 0.35, -s * 0.85);
        context.bezierCurveTo(-s * 0.85, -s * 0.2, -s * 0.6, s * 0.5, 0, s * 0.9);
        context.closePath();

        // Multi-stop gradient simulating real translucent cherry blossom
        const grad = context.createLinearGradient(0, s * 0.9, 0, -s * 0.85);
        grad.addColorStop(0, this.palette.base);
        grad.addColorStop(0.45, this.palette.mid);
        grad.addColorStop(0.9, this.palette.tip);
        grad.addColorStop(1, '#ffffff');

        context.fillStyle = grad;
        context.shadowColor = 'rgba(244, 114, 182, 0.35)';
        context.shadowBlur = modeRef.current === 'intro' ? 7 : 3;
        context.fill();

        // Center delicate spine vein
        context.beginPath();
        context.moveTo(0, s * 0.8);
        context.quadraticCurveTo(s * 0.05, 0, 0, -s * 0.5);
        context.strokeStyle = this.palette.vein;
        context.lineWidth = 0.8;
        context.stroke();

        // Subtle blade-like Senbonzakura metallic glint along the edge
        if (this.glint > 0.65) {
          context.beginPath();
          context.moveTo(s * 0.2, -s * 0.75);
          context.lineTo(0, -s * 0.65);
          context.strokeStyle = `rgba(255, 255, 255, ${(this.glint - 0.65) * 2.8})`;
          context.lineWidth = 1.2;
          context.stroke();
        }

        context.restore();
      }
    }

    // Initialize continuous particle pool once
    const petals = Array.from({ length: TOTAL_POOL }, (_, i) => new SakuraPetal(i));

    // For intro mode: set the first petal in position
    if (modeRef.current === 'intro') {
      petals[0].x = width * 0.18;
      petals[0].y = height * 0.32;
      petals[0].size = 18;
      petals[0].targetAlpha = 0.95;
    }

    let isRunning = true;
    let startTime = performance.now();

    const render = (now) => {
      if (!isRunning) return;
      const elapsed = now - startTime;

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      ctx.clearRect(0, 0, width, height);

      const curPhase = phaseRef.current;
      const curMode = modeRef.current;

      for (let i = 0; i < petals.length; i++) {
        petals[i].update(curPhase, curMode, elapsed);
        petals[i].draw(ctx);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Run ONCE! Continuous loop without restarts

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 z-10 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
