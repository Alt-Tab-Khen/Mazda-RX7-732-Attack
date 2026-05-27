import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

function Overview() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Track scroll progress through this section for fade out
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'], // starts when section hits top, ends when section leaves top
  });

  // Fade out the whole section as you scroll past it
  const sectionOpacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);

  const text = `The 732X Attack represents a comprehensive reimagining of the Mazda RX-7 GT300 platform, engineered for circuit performance. At its core is a rear-mounted 4-rotor engine producing 953whp and 732Nm, paired with an 8-speed sequential transmission and rear-wheel-drive configuration.

Constructed from full carbon fiber, the 732X achieves a dry weight of 825kg while maintaining structural rigidity essential for high-speed cornering. The aerodynamic package features an active crescent wing with dual fins, incorporating brake-triggered deployment and speed-scaled front downforce management.

Suspension geometry draws from modern Formula 1 principles, utilizing progressive spring rates and high-frequency electronic stability systems. Brake distribution, traction control, and ABS parameters are calibrated for competitive lap times while preserving driver engagement.

The 732X Attack is a study in precision engineering where every component serves measurable performance outcomes.`;

  const words = text.split(' ');
  const wordDelay = 0.05;

  return (
    // Outer wrapper is sticky - pins the section in place while scrolling
    <div className="sticky top-0 h-screen overflow-hidden" id="overview">
      <motion.section
        ref={sectionRef}
        className="relative w-full h-screen bg-black flex items-center justify-start px-16 py-20"
        style={{ opacity: sectionOpacity }}
      >
        {/* Background Car Image */}
        <motion.div
          className="absolute inset-0 z-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/model1.png')`,
            backgroundSize: '150%',
            backgroundPosition: 'center',
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.15 } : { opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-lg leading-relaxed space-y-6 text-justify">
            {isInView && (
              <motion.div>
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.1,
                      delay: index * wordDelay,
                      ease: 'easeIn',
                    }}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Overview;