import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>  
    {/* Invisible hover trigger at top of screen */}
      <div
        className="fixed top-0 left-0 w-full h-20 z-[999]"
        onMouseEnter={() => setIsVisible(true)}
      />
    <nav
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => {
       if (window.scrollY > 100) setIsVisible(false);
      }}
      className={`fixed top-0 left-0 w-full flex items-center justify-start gap-16 px-16 py-5 z-[1000] bg-gradient-to-b from-black/80 via-black/60 to-transparent backdrop-blur-md transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
    
      {/* rest of navbar code stays the same */}
      <div className="w-12 h-12">
        <img src="/LOGO R.png" alt="Logo" className="w-full h-full object-contain" />
      </div>

      <ul className="flex gap-10 list-none">
        <li>
          <a href="#overview" className="text-white no-underline text-lg font-medium transition-colors hover:text-rx-red">
            Overview
          </a>
        </li>
        <li>
          <a href="#specs" className="text-white no-underline text-lg font-medium transition-colors hover:text-rx-red">
            Specs
          </a>
        </li>
        <li>
          <a href="#difference" className="text-white no-underline text-lg font-medium transition-colors hover:text-rx-red">
            Difference
          </a>
        </li>
        <li>
          <a href="#provenance" className="text-white no-underline text-lg font-medium transition-colors hover:text-rx-red">
            Provenance
          </a>
        </li>
      </ul>
    </nav>
    </>
  );
}

export default Navbar;