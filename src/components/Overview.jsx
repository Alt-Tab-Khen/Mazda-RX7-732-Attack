import React, { useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

function Overview({ onEnter, onLeave }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  // Notify App when Overview enters/leaves view
  useEffect(() => {
    if (isInView) {
      onEnter?.();
    } else {
      onLeave?.();
    }
  }, [isInView]);

  const text = `The 732X Attack represents a comprehensive reimagining of the Mazda RX-7 GT300 platform, engineered for circuit performance. At its core is a rear-mounted 4-rotor engine producing 953whp and 732Nm, paired with an 8-speed sequential transmission and rear-wheel-drive configuration.

Constructed from full carbon fiber, the 732X achieves a dry weight of 825kg while maintaining structural rigidity essential for high-speed cornering. The aerodynamic package features an active crescent wing with dual fins, incorporating brake-triggered deployment and speed-scaled front downforce management.

Suspension geometry draws from modern Formula 1 principles, utilizing progressive spring rates and high-frequency electronic stability systems. Brake distribution, traction control, and ABS parameters are calibrated for competitive lap times while preserving driver engagement.

The 732X Attack is a study in precision engineering where every component serves measurable performance outcomes.`;

  const words = text.split(' ');
  const wordDelay = 0.05;

  return (
    <div ref={sectionRef} className="sticky top-0 h-screen" id="overview">
      <motion.div
        className="relative w-full h-screen flex items-center justify-start px-16 py-20"
        style={{ opacity: sectionOpacity }}
      >
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
      </motion.div>
    </div>
  );
}

export default Overview;