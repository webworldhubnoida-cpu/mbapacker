import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export default function FloatingCall() {
  return (
    <motion.a
      href="tel:+918949745550"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[90] w-16 h-16 bg-brand-accent text-white rounded-full flex items-center justify-center shadow-2xl shadow-brand-accent/40 group overflow-hidden"
    >
      {/* Ripple Effect */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-white rounded-full"
      />
      
      <Phone className="w-7 h-7 relative z-10 group-hover:rotate-12 transition-transform" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-brand-blue text-white px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 pointer-events-none shadow-xl">
        Call Us Now
      </div>
    </motion.a>
  );
}
