import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Overview() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Typing animation - splits text into words and animates them in sequence
  const text = `The 732X Attack represents a comprehensive reimagining of the Mazda RX-7 GT300 platform, engineered for circuit performance. At its core is a rear-mounted 4-rotor engine producing 953whp and 732Nm, paired with an 8-speed sequential transmission and rear-wheel-drive configuration.

Constructed from full carbon fiber, the 732X achieves a dry weight of 825kg while maintaining structural rigidity essential for high-speed cornering. The aerodynamic package features an active crescent wing with dual fins, incorporating brake-triggered deployment and speed-scaled front downforce management.

Suspension geometry draws from modern Formula 1 principles, utilizing progressive spring rates and high-frequency electronic stability systems. Brake distribution, traction control, and ABS parameters are calibrated for competitive lap times while preserving driver engagement.

The 732X Attack is a study in precision engineering where every component serves measurable performance outcomes.`;

  const words = text.split(' ');
  
  // 20 WPM = ~100ms per character, but we're doing words so ~300ms per word feels natural
  const wordDelay = 0.05; // seconds between each word

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black flex items-center justify-start px-16 py-20"
      id="overview"
    >
      {/* Background Car Image - Fades in */}
      <motion.div
        className="absolute inset-0 z-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/model1.png')`,
          backgroundSize: '150%', // ADJUST SIZE: 'cover', 'contain', '80%', '1200px', etc.
          backgroundPosition: 'center', // ADJUST POSITION: 'center', 'right center', '60% center', etc.
        }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.15 } : { opacity: 0 }} // ADJUST OPACITY HERE: 0.1, 0.15, 0.2, etc.
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Text Content - Typing Effect */}
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
    </section>
  );
}

export default Overview;