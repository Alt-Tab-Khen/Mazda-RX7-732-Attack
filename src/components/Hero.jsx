import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xOffset = (clientX / innerWidth - 0.5) * 2;
      const yOffset = (clientY / innerHeight - 0.5) * 2;

      setMousePos({ x: xOffset, y: yOffset });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: 0, y: 0 });
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      hero.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
        hero.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const bgMove = 10;
  const carMove = 30;

  return (
    <section ref={heroRef} className="relative w-full h-screen overflow-hidden cursor-none">
      {/* Background Layer (Blurred) */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('/Blur1.png')` }}
        animate={{
          x: mousePos.x * bgMove,
          y: mousePos.y * bgMove,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      />

      {/* Foreground Layer (Clear Car) */}
      <motion.div
        className="absolute top-[-3%] left-0 w-full h-auto pointer-events-none bg-center"
        animate={{
          x: mousePos.x * carMove,
          y: mousePos.y * carMove,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      >
        <img src="/732.png" alt="Mazda RX-7 732X" className="w-full h-auto block" />
      </motion.div>

      {/* Red Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-radial from-rx-red/80 via-transparent to-transparent animate-pulse-glow pointer-events-none" 
           style={{ background: 'radial-gradient(ellipse at center bottom, rgba(255, 0, 0, 0.8) 0%, transparent 70%)' }} 
      />

      {/* Scroll Indicator */}
      <button
        onClick={() => {document.getElementById('overview')?.scrollIntoView({behavior: 'smooth'});}}
      
      className="absolute bottom-10 left-[50%] transform -translate-x-1/2 text-center z-10">
        <p className="text-sm text-white/60 mb-2 tracking-wider">Scroll Down</p>
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="rgba(255,255,255,0.6)" 
          strokeWidth="2"
          className="w-8 h-8 animate-bounce-slow mx-auto"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </section>
  );
}

export default Hero;