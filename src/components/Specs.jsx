import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const cars = [
  {
    id: 0,
    name: '732X Attack',
    image: '/model3.png', // REPLACE WITH YOUR OLD MODEL IMAGE
  },
  {
    id: 1,
    name: '732X Definite',
    image: '/CAR_MODEL_2.png', // REPLACE WITH YOUR NEW MODEL IMAGE
  },
];

const specs = [
  { label: 'Engine',       value: '4 Rotor Wankel Engine' },
  { label: 'Displacement', value: '3,200cc (4 × 800cc)' },
  { label: 'Performance',  value: '953 whp / 732 Nm' },
  { label: 'Gears',        value: '8-Speed Sequential' },
  { label: 'Weight',       value: '825 kg (Dry)' },
  { label: 'Transmission', value: 'Rear-Wheel Drive' },
];

function Specs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [currentCar, setCurrentCar] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const handleDotClick = (index) => {
    setDirection(index > currentCar ? 1 : -1);
    setCurrentCar(index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black flex flex-col justify-center px-16 py-20"
      id="specs"
    >
      {/* Section Header */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="text-sm font-light text-white/60 mb-1">
          Mazda RX-7 <span className="text-rx-red">732X Attack</span>
        </p>
        <h2 className="text-4xl font-bold">Performance in numbers</h2>
      </motion.div>

      {/* Car Slider */}
      <motion.div
        className="relative w-full flex flex-col items-center mb-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
      >
        {/* Car Image */}
        <div className="relative w-full max-w-2xl h-64 overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={currentCar}
              src={cars[currentCar].image}
              alt={cars[currentCar].name}
              className="absolute w-full h-full object-contain cursor-pointer"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              whileHover={{ scale: 1.05 }} // HOVER ZOOM
            />
          </AnimatePresence>
        </div>

        {/* Model Name */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentCar}
            className="text-white/70 text-sm tracking-widest mt-4 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {cars[currentCar].name}
          </motion.p>
        </AnimatePresence>

        {/* Dot Indicators */}
        <div className="flex gap-3 mt-4">
          {cars.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 border-none cursor-pointer ${
                currentCar === index
                  ? 'bg-rx-red scale-125'
                  : 'bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Specs Table */}
      <motion.div
        className="w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
      >
        {specs.map((spec, index) => (
          <motion.div
            key={index}
            className="flex justify-between items-center py-4 border-b border-white/10"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 + index * 0.1 }}
          >
            <span className="text-white/70 text-lg">{spec.label}</span>
            <span className="text-white text-lg font-medium">{spec.value}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Specs;