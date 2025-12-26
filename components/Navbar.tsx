
import React, { useState, useEffect } from 'react';
import { LOGO, NAV_ITEMS, BRAND_COLORS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#home">{LOGO}</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-bold nav-link transition-colors ${
                isScrolled ? 'text-slate-800' : 'text-white'
              } hover:text-[#7D110E]`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:03323251465"
            className="text-white px-7 py-3 rounded-xl text-sm font-black transition-all transform hover:scale-105 shadow-xl hover:shadow-[0_10px_30px_rgba(125,17,14,0.4)]"
            style={{ backgroundColor: BRAND_COLORS.primary }}
          >
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`${isScrolled ? 'text-slate-800' : 'text-white'} md:hidden`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full p-6 flex flex-col gap-6 shadow-2xl animate-fade-in-down border-t border-slate-100">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xl font-black text-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:03323251465"
            className="text-white px-6 py-4 rounded-2xl text-center font-black"
            style={{ backgroundColor: BRAND_COLORS.primary }}
          >
            Call 0332 3251465
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
