import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function StickyTitle() {
  const { scrollY } = useScroll();
  
  // Define scroll ranges (adjust these based on your actual section heights)
  // Assuming Hero is 0-100vh, Overview starts around 100vh
  const heroEnd = typeof window !== 'undefined' ? window.innerHeight : 800;
  const overviewStart = heroEnd;
  
  // Transform scroll position to horizontal/vertical position
  // From bottom-right (Hero) to top-left (Overview)
  const x = useTransform(scrollY, [0, overviewStart], ['0%', '-100%']); // right to left
  const y = useTransform(scrollY, [0, overviewStart], ['0%', '-420%']); // bottom to top
  const scale = useTransform(scrollY, [0, overviewStart], [1, 0.7]); // slight size reduction
  const taglineOpacity = useTransform(scrollY, [0, overviewStart * 0.5], [1, 0]);
  
  return (
    <motion.div
      className="fixed bottom-44 right-20 z-50 text-right pointer-events-none"
      style={{ x, y, scale }}
    >
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2">
        Mazda RX-7 <span className="text-rx-red">732X Attack</span>
      </h1>
      
      <motion.p className="text-base md:text-lg lg:text-xl font-light"
      style={{ opacity: taglineOpacity }}>
        A concept of <span className="text-rx-red font-medium">Speed</span> and{' '}
        <span className="text-rx-red font-medium">Precision</span>
      </motion.p>
      
    </motion.div>
    
  );
}

export default StickyTitle;