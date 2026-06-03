import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Difference() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  return (
    
    <section ref={sectionRef} className="relative w-full min-h-screen flex flex-col items-center justify-center px-16 py-20" id="difference">

      {/* Title */}
      <motion.h2
        className="text-6xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: 60, scale: 0.8 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.8 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Difference
      </motion.h2>

      {/* Main Content */}
      <div className="relative w-full max-w-6xl flex gap-0">

        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-16 pr-12">

          {/* Top Left — Attack Image (slides left, away from center) */}
          <motion.div
            className="w-full aspect-video overflow-hidden"
            initial={{ x: 120, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 120, opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
          >
            <img src="/model1.png" alt="732X Attack" className="w-full h-full object-cover" />
          </motion.div>

          {/* Bottom Left — Definite Text (slides left, away from center) */}
          <motion.div
            className="pl-4"
            initial={{ x: 120, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 120, opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
          >
            <h3 className="text-2xl font-bold text-rx-red mb-3">Definite</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              The 732X Definite represents the absolute evolution of the platform.
              Where the Attack relies on passive and driver-controlled aero, the Definite
              introduces active fan-suction ground effect and fully automated aero deployment
              generating significantly higher cornering loads at all speeds. Torque delivery
              is restructured across a broader 500–8,500rpm range, producing stronger
              acceleration out of low-speed corners. The Definite is not a revision of
              the Attack it is its completion.
            </p>
          </motion.div>
        </div>

        {/* Center Divider Line */}
        <div className="relative w-px bg-white/10 mx-4 self-stretch overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-white/30"
            initial={{ height: '0%' }}
            animate={isInView ? { height: '100%' } : { height: '0%' }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
          />
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-16 pl-12">

          {/* Top Right — Attack Text (slides right, away from center) */}
          <motion.div
            className="pr-4"
            initial={{ x: -120, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -120, opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-rx-red mb-3">Attack</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              The 732X Attack is built around peak downforce efficiency for open-course
              racing. Its aerodynamic package features a large rear wing with DRS,
              prioritizing straight-line speed and driver-adjustable drag reduction.
              The suspension and power delivery are tuned for high-speed stability,
              with a turbo powerband peaking at 11,000rpm demanding precise throttle
              control and rewarding commitment at the limit.
            </p>
          </motion.div>

          {/* Bottom Right — Definite Image (slides right, away from center) */}
          <motion.div
            className="w-full aspect-video overflow-hidden"
            initial={{ x: -120, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -120, opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
          >
            <img src="/Definite1.jpg" alt="732X Definite" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Difference;