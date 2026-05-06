import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import TopHeader from './TopHeader';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import QuoteModal from './QuoteModal';
import { pageTransition } from '../utils/animations';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              key="top-header"
              initial={{ opacity: 1, height: 'auto' }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TopHeader />
            </motion.div>
          )}
        </AnimatePresence>
        <Navbar isScrolled={isScrolled} onOpenQuote={openQuoteModal} />
      </div>
      
      <main className="min-h-screen pt-[130px] md:pt-[160px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Outlet context={{ onOpenQuote: openQuoteModal }} />
          </motion.div>
        </AnimatePresence>
      </main>
          
      <Footer />
      <FloatingActions />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </div>
  );
}
