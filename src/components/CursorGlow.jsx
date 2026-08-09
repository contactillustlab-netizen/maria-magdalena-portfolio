import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const LERP = 0.12;

function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    const desktopQuery = window.matchMedia('(min-width: 1025px) and (pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const pos = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let active = desktopQuery.matches && !motionQuery.matches;
    let hasMoved = false;
    let rafId = null;

    const updateActive = () => {
      active = desktopQuery.matches && !motionQuery.matches;
      if (!active) el.style.opacity = '0';
    };

    const handleMove = (event) => {
      if (!active) return;
      pos.targetX = event.clientX;
      pos.targetY = event.clientY;
      if (!hasMoved) {
        pos.x = event.clientX;
        pos.y = event.clientY;
        hasMoved = true;
      }
      el.style.opacity = '1';
    };

    const handleLeave = () => {
      el.style.opacity = '0';
    };

    const tick = () => {
      pos.x += (pos.targetX - pos.x) * LERP;
      pos.y += (pos.targetY - pos.y) * LERP;
      el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mouseleave', handleLeave);
    desktopQuery.addEventListener('change', updateActive);
    motionQuery.addEventListener('change', updateActive);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      desktopQuery.removeEventListener('change', updateActive);
      motionQuery.removeEventListener('change', updateActive);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return createPortal(<div ref={glowRef} className="cursor-glow" aria-hidden="true" />, document.body);
}

export default CursorGlow;
