import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function StickyTitle() {
  const { scrollY } = useScroll();

  const vh = typeof window !== 'undefined' ? window.innerHeight : 800;

  const x = useTransform(scrollY, [0, vh], ['0%', '-100%']);
  const y = useTransform(scrollY, [0, vh], ['0%', '-420%']);
  const scale = useTransform(scrollY, [0, vh], [1, 0.7]);

  // Fades out as you leave Overview heading into Specs
  const titleOpacity = useTransform(scrollY, [vh, vh * 1.5], [1, 0]);
  const taglineOpacity = useTransform(scrollY, [0, vh * 0.5], [1, 0]);

  return (
    <motion.div
      className="fixed bottom-44 right-20 z-50 text-right pointer-events-none"
      style={{ x, y, scale, opacity: titleOpacity }}
    >
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2">
        Mazda RX-7 <span className="text-rx-red">732X Attack</span>
      </h1>
      <motion.p
        className="text-base md:text-lg lg:text-xl font-light"
        style={{ opacity: taglineOpacity }}
      >
        A concept of <span className="text-rx-red font-medium">Speed</span> and{' '}
        <span className="text-rx-red font-medium">Precision</span>
      </motion.p>
    </motion.div>
  );
}

export default StickyTitle;