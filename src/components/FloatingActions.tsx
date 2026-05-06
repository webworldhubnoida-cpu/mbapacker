import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/918421970197"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 group relative"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-brand-card text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/5">
          WhatsApp Us
        </span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+918421970197"
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-brand-primary/30 group relative"
      >
        <Phone className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-brand-card text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/5">
          Call Now
        </span>
      </motion.a>
    </div>
  );
}
