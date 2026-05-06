import { motion, AnimatePresence } from 'motion/react';
import { X, Send, User, Phone, Mail, MapPin, Package, Truck } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-blue/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-brand-bg w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl relative flex flex-col md:flex-row border border-white/5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: Info Side */}
            <div className="md:w-1/3 bg-brand-primary p-8 md:p-12 text-white flex flex-col">
              <div className="mb-8">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tight leading-none mb-2">Get A Free Quote</h2>
                <p className="text-white/70 text-sm font-medium">Professional relocation services at your doorstep.</p>
              </div>

              <div className="space-y-8 mt-auto">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Call Us</p>
                    <p className="text-sm font-bold">+91 8421970197</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Email Us</p>
                    <p className="text-sm font-bold">Info@mbapackerswala.in</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form Side */}
            <div className="md:w-2/3 p-8 md:p-12 bg-brand-card">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-4">Full Name</label>
                    <input type="text" placeholder="John Doe" className="input-dark w-full text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-4">Phone Number</label>
                    <input type="tel" placeholder="+91 00000 00000" className="input-dark w-full text-sm" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-4">Moving From</label>
                    <input type="text" placeholder="Jalgaon" className="input-dark w-full text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-4">Moving To</label>
                    <input type="text" placeholder="Destination City" className="input-dark w-full text-sm" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-4">Your Message</label>
                  <textarea rows={3} placeholder="Briefly describe your requirements..." className="input-dark w-full text-sm resize-none"></textarea>
                </div>

                <button className="btn-primary w-full py-4 text-xs uppercase tracking-[0.2em] shadow-xl shadow-brand-primary/10">
                  Request Free Quote
                </button>

                <p className="text-center text-[10px] text-white/20 font-bold uppercase tracking-widest">
                  * We value your privacy. No spam, only solutions.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
