import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import StickyTitle from './components/StickyTitle'; // ADD THIS

function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <StickyTitle /> {/* ADD THIS */}
      <Hero />
      <Overview />
    </div>
  );
}

export default App;