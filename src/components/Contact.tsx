import { motion } from 'motion/react';
import { Phone, Mail, User, FileText, Send, MapPin } from 'lucide-react';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, transition } from '../utils/animations';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          
          {/* Left: Info */}
          <div className="flex flex-col">
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <motion.span variants={fadeUp} className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                Get In Touch
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tight">
                Let's Start Your <span className="text-brand-primary">Journey</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/50 text-lg mb-12 leading-relaxed">
                Ready to move? Contact us for a free consultation and customized quote. Our experts are standing by to help you plan your perfect relocation.
              </motion.p>
            </motion.div>

            <div className="space-y-6 mt-auto">
              <motion.div variants={fadeUp} className="flex items-start gap-6 group">
                <div className="w-16 h-16 bg-brand-card rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-brand-primary/30 transition-all shadow-xl">
                  <Phone className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-1">Call Us</h4>
                  <p className="text-2xl font-bold text-white tracking-tight">+91 8421970197</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-start gap-6 group">
                <div className="w-16 h-16 bg-brand-card rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-brand-primary/30 transition-all shadow-xl">
                  <Mail className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-1">Email Us</h4>
                  <p className="text-xl font-bold text-white tracking-tight">Info@mbapackerswala.in</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-start gap-6 group">
                <div className="w-16 h-16 bg-brand-card rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-brand-primary/30 transition-all shadow-xl">
                  <User className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-1">Owner</h4>
                  <p className="text-2xl font-bold text-white tracking-tight">Zeehan Pinjari</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-card p-10 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl relative"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-4">Your Name</label>
                  <input type="text" placeholder="John Doe" className="input-dark w-full" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-4">Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" className="input-dark w-full" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-4">Email Address</label>
                <input type="email" placeholder="john@example.com" className="input-dark w-full" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-4">Moving From</label>
                  <input type="text" placeholder="Jalgaon" className="input-dark w-full" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-4">Moving To</label>
                  <input type="text" placeholder="Mumbai" className="input-dark w-full" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-4">Your Message</label>
                <textarea rows={4} placeholder="Tell us about your requirements..." className="input-dark w-full resize-none"></textarea>
              </div>

              <button className="btn-primary w-full py-5 text-sm uppercase tracking-[0.2em] shadow-xl shadow-brand-primary/10">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
