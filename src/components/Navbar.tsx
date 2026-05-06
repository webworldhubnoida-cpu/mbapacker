import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, FileText, ChevronDown } from 'lucide-react';
import { buttonHover, staggerContainer, transition } from '../utils/animations';

export default function Navbar({ isScrolled, onOpenQuote }: { isScrolled: boolean; onOpenQuote: () => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const navbarBg = 'bg-brand-bg/95 backdrop-blur-md border-b border-white/5 shadow-lg';
  const textColor = 'text-white';
  const linkColor = 'text-white/80';

  return (
    <nav className={`w-full z-50 transition-all duration-300 ${navbarBg} ${isScrolled ? 'h-[100px]' : 'h-[120px]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">

          {/* ✅ LOGO FIXED */}
          <Link to="/" className="flex items-center h-full py-2">
            <motion.img
              src="/gallery/logo.png"
              alt="MBA Packers Wala Logo"
              whileHover={{ scale: 1.05 }}
              transition={transition}
              className="h-full max-h-[140px] w-auto scale-125 origin-left"
            />
          </Link>

          {/* Desktop Nav */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="whileInView"
            className="hidden md:flex items-center gap-6 lg:gap-8"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                variants={{
                  initial: { opacity: 0, y: -10 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                className="relative group"
              >
                <Link
                  to={link.href}
                  className={`font-bold text-xs lg:text-sm uppercase tracking-widest transition-all hover:text-brand-primary ${linkColor} ${location.pathname === link.href ? 'text-brand-primary' : ''}`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.button
              onClick={onOpenQuote}
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-brand-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:bg-brand-primary-hover transition-colors"
            >
              <FileText className="w-4 h-4" />
              Get Quote
            </motion.button>
          </motion.div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-bg border-t border-white/5"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-bold text-white/80 hover:text-brand-primary"
                >
                  {link.name}
                </Link>
              ))}

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full mt-4 bg-brand-primary text-white py-3 rounded-xl font-bold hover:bg-brand-primary-hover transition-colors"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}