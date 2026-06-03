import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Specs from './components/Specs';
import Difference from './components/Difference';
import StickyTitle from './components/StickyTitle';

function App() {
  const [bgVisible, setBgVisible] = useState(false);

  return (
    <div className="w-full min-h-screen bg-black">
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen z-0 bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url('/model1.png')`,
          backgroundSize: '150%',
          backgroundPosition: 'center',
        }}
        animate={{ opacity: bgVisible ? 0.15 : 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      <Navbar />
      <StickyTitle />
      <Hero />

      <div className="relative z-10" style={{ height: '100vh' }}>
        <Overview onEnter={() => setBgVisible(true)} onLeave={() => setBgVisible(false)} />
      </div>

      <div className="relative z-20">
        <Specs />
      </div>

      <div className="relative z-20">
        <Difference />
      </div>
    </div>
  );
}

export default App;