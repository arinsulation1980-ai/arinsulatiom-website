import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 shadow-lg backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

        {/* Logo */}
        <a href="#" className="flex items-center group">
          <span className={`text-xl sm:text-2xl font-black tracking-tighter uppercase ${isScrolled ? 'text-white' : 'text-white'}`}>
            ARINSULATIONS<span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#ff264d] rounded-[3px] ml-1 mb-0.5 align-baseline transition-transform group-hover:scale-110"></span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-orange-500 font-medium text-sm uppercase tracking-wider transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-sm transition-colors text-sm uppercase tracking-wide">
            Get Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 absolute top-full left-0 w-full border-t border-slate-800">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-orange-500 text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;