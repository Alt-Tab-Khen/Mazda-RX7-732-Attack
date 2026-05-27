import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Specs from './components/Specs';
import StickyTitle from './components/StickyTitle';

function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <StickyTitle />
      <Hero />
      <Overview />
      <Specs />
    </div>
  );
}

export default App;