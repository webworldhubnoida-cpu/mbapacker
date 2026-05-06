import { motion } from 'motion/react';
import { Users, ShieldCheck, Clock, IndianRupee, HeartHandshake, Headphones } from 'lucide-react';
import { fadeUp, fadeLeft, staggerContainer, transition } from '../utils/animations';

const reasons = [
  {
    title: 'Experienced Team',
    description: 'Highly trained professionals who handle your items with utmost care.',
    icon: Users,
  },
  {
    title: 'Safe Packaging',
    description: 'Multi-layer packing using premium materials for maximum safety.',
    icon: ShieldCheck,
  },
  {
    title: 'On-Time Delivery',
    description: 'Punctual services with real-time tracking of your shipment.',
    icon: Clock,
  },
  {
    title: 'Affordable Pricing',
    description: 'Transparent and competitive rates with no hidden charges.',
    icon: IndianRupee,
  },
  {
    title: 'Insurance Support',
    description: 'Full insurance coverage for your peace of mind during transit.',
    icon: HeartHandshake,
  },
  {
    title: '24/7 Customer Support',
    description: 'Round-the-clock assistance for all your moving queries.',
    icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={fadeLeft}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <span className="text-brand-primary font-bold uppercase tracking-widest text-sm">Why MBA Packers Wala?</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-8 leading-tight">
              The Most Trusted Name in <span className="text-brand-primary">Relocation</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              With over two decades of experience and thousands of successful moves, we have perfected the art of relocation. Our commitment to safety and customer satisfaction makes us the preferred choice nationwide.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <motion.div 
                variants={fadeUp}
                transition={{ ...transition, delay: 0.3 }}
                className="bg-brand-card border border-white/5 p-8 rounded-3xl shadow-xl shadow-black/20"
              >
                <h4 className="text-4xl font-extrabold text-white mb-2">15k+</h4>
                <p className="text-brand-primary text-xs font-bold uppercase tracking-widest">Happy Customers</p>
              </motion.div>
              <motion.div 
                variants={fadeUp}
                transition={{ ...transition, delay: 0.4 }}
                className="bg-brand-card border border-white/5 p-8 rounded-3xl shadow-xl shadow-black/20"
              >
                <h4 className="text-4xl font-extrabold text-white mb-2">20+</h4>
                <p className="text-brand-primary text-xs font-bold uppercase tracking-widest">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {reasons.map((reason) => (
              <motion.div
                key={reason.title}
                variants={fadeUp}
                className="bg-brand-card border border-white/5 p-8 rounded-[2rem] hover:border-brand-primary/30 transition-all group shadow-xl shadow-black/10"
              >
                <div className="bg-brand-primary/10 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <reason.icon className="text-brand-primary w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
