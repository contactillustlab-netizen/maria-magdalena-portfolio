import { useEffect, useState } from 'react';

// Keeps a panel mounted for `duration` after it's told to close, so CSS can
// transition it out instead of popping instantly. `visible` flips on one
// frame after mount so the enter transition has a from-state to animate from.
export function useMountTransition(isOpen, duration = 240) {
  const [mounted, setMounted] = useState(isOpen);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let raf;
    let timeout;
    if (isOpen) {
      setMounted(true);
      raf = requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      timeout = window.setTimeout(() => setMounted(false), duration);
    }
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timeout);
    };
  }, [isOpen, duration]);

  return { mounted, visible };
}
