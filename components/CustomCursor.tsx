'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useIsTouchDevice, usePrefersReducedMotion } from '@/lib/hooks';

export function CustomCursor() {
  const isTouch = useIsTouchDevice();
  const reduced = usePrefersReducedMotion();
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 35, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 400, damping: 35, mass: 0.4 });

  useEffect(() => {
    if (isTouch || reduced) return;

    function handleMove(e: PointerEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
      const target = e.target as HTMLElement;
      setHovering(!!target.closest('a, button, [role="button"], input, textarea'));
    }

    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, [isTouch, reduced, visible, x, y]);

  if (isTouch || reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden md:block"
      style={{
        x: springX,
        y: springY,
        opacity: visible ? 1 : 0,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        animate={{
          width: hovering ? 44 : 16,
          height: hovering ? 44 : 16,
          backgroundColor: hovering ? 'rgba(198,255,74,0.12)' : 'rgba(198,255,74,1)',
          borderColor: hovering ? 'rgba(198,255,74,0.9)' : 'rgba(198,255,74,0)',
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-full border"
      />
    </motion.div>
  );
}
