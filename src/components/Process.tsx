import { motion } from 'motion/react';
import { CalendarCheck, Package, Truck, ShieldCheck, ChevronRight } from 'lucide-react';

const steps = [
  {
    title: 'Consultation',
    description: 'Share your requirements for a personalized, transparent quote and move plan.',
    icon: CalendarCheck,
  },
  {
    title: 'Precision Packing',
    description: 'Our experts use multi-layer protection and premium materials for every item.',
    icon: Package,
  },
  {
    title: 'Secure Transit',
    description: 'Real-time tracked transport in specialized, weather-proof vehicles.',
    icon: Truck,
  },
  {
    title: 'Unpacking & Setup',
    description: 'We help you settle into your new space with professional unpacking services.',
    icon: ShieldCheck,
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brand-primary/50 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-bold uppercase tracking-widest text-sm"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6 uppercase"
          >
            Our Seamless <span className="text-brand-primary">Moving Process</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-brand-primary/0 via-brand-primary/30 to-brand-primary/0 -translate-y-1/2"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group text-center"
            >
              <div className="relative z-10 w-24 h-24 bg-brand-card backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-500 shadow-xl shadow-black/20">
                <step.icon className="w-10 h-10 text-brand-primary group-hover:text-white transition-colors" />
                
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {step.description}
              </p>

              {/* Arrow Icon (Mobile/Tablet) */}
              {index < steps.length - 1 && (
                <div className="lg:hidden mt-8 flex justify-center">
                  <ChevronRight className="w-8 h-8 text-brand-primary rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
