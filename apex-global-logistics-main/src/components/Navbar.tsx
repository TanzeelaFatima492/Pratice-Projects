import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Offices', path: '/offices' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-55 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A192F]/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-[#0A192F]/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00E5FF] to-[#0A192F] flex items-center justify-center shadow-md shadow-[#00E5FF]/20 group-hover:scale-105 transition-transform">
            <ShieldCheck className="w-6 h-6 text-[#0A192F]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-wider text-white">
              APEX <span className="text-[#00E5FF]">GLOBAL</span>
            </span>
            <span className="text-[10px] tracking-widest text-gray-300 uppercase -mt-1 font-medium">
              Logistics
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-[#00E5FF] relative py-1 ${
                isActive(link.path)
                  ? 'text-[#00E5FF] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00E5FF]'
                  : 'text-gray-200'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Quote Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            to="/quote"
            className="bg-[#00E5FF] text-[#0A192F] font-semibold px-5 py-2.5 rounded-lg shadow-lg shadow-[#00E5FF]/20 hover:bg-[#33edff] hover:shadow-[#00E5FF]/40 transition-all flex items-center space-x-2 group text-sm"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center space-x-3">
          <Link
            to="/quote"
            className="bg-[#00E5FF] text-[#0A192F] font-semibold px-3 py-1.5 rounded-md text-xs sm:text-sm"
          >
            Quote
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-[#00E5FF] focus:outline-none p-1.5"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0A192F] border-t border-gray-800 shadow-2xl py-6 px-6 transition-all">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'bg-[#00E5FF]/10 text-[#00E5FF] font-semibold'
                    : 'text-gray-200 hover:bg-gray-800/50 hover:text-[#00E5FF]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-800">
              <Link
                to="/quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#00E5FF] text-[#0A192F] font-semibold py-3 rounded-lg text-center shadow-md flex items-center justify-center space-x-2"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
