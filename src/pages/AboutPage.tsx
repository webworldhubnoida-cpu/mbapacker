import { motion } from 'motion/react';
import { CheckCircle2, Users, History, Award } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: 'Years Experience', value: '23+', icon: History },
    { label: 'Happy Clients', value: '15k+', icon: Users },
    { label: 'Expert Team', value: '50+', icon: Users },
    { label: 'Awards Won', value: '12', icon: Award },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" 
            alt="Warehouse" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            About MBA Packers Wala
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Your trusted partner in relocation since 2003. We make moving simple, safe, and stress-free.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-brand-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 opacity-80" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-80 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-blue mb-6">
                Our Story & Mission
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  MBA Packers Wala was founded in 2003 with a single goal: to redefine the relocation experience in India. What started as a small local operation in Jalgaon has grown into a nationwide network of logistics experts.
                </p>
                <p>
                  We understand that moving isn't just about transporting boxes; it's about moving lives, memories, and dreams. That's why we treat every item as if it were our own, using the highest quality packing materials and the most reliable transport methods.
                </p>
                <p>
                  Our mission is to provide transparent, efficient, and affordable moving services that exceed customer expectations every single time.
                </p>
              </div>
              
              <div className="mt-8 space-y-3">
                {[
                  'ISO 9001:2015 Certified Company',
                  'Pan-India Service Network',
                  '24/7 Customer Support',
                  'Transparent Pricing - No Hidden Costs'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-blue text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold mb-1">100%</div>
                <div className="text-sm opacity-80 uppercase tracking-widest">Safe Delivery Rate</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
