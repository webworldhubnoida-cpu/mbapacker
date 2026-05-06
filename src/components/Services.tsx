import { Home, Building2, Car, Warehouse, Plane, Package, ArrowDownToLine, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeUp, staggerContainer, cardHover } from '../utils/animations';

const services = [
  {
    title: 'Home Shifting',
    description: 'Tailored relocation for your household, ensuring every glass and gadget arrives safely.',
    icon: Home,
    color: 'bg-brand-blue/10 text-brand-blue',
    image: 'https://images.pexels.com/photos/5025663/pexels-photo-5025663.jpeg',
  },
  {
    title: 'Office Relocation',
    description: 'Minimal downtime, maximum efficiency. We get your business back up and running fast.',
    icon: Building2,
    color: 'bg-brand-accent/10 text-brand-accent',
    image: 'https://images.pexels.com/photos/7464687/pexels-photo-7464687.jpeg',
  },
  {
    title: 'Vehicle Transportation',
    description: 'Specialized carriers for your cars and bikes. Door-to-door safety guaranteed.',
    icon: Car,
    color: 'bg-brand-blue/10 text-brand-blue',
    image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg',
  },
  {
    title: 'Warehouse & Storage',
    description: 'Secure, climate-controlled warehousing for your short and long-term storage needs.',
    icon: Warehouse,
    color: 'bg-brand-accent/10 text-brand-accent',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'International Transport',
    description: 'Expert international moving services with customs clearance and door-to-door delivery.',
    icon: Plane,
    color: 'bg-brand-blue/10 text-brand-blue',
    image: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg',
  },
  {
    title: 'Packing & Unpacking',
    description: 'High-quality packing materials and expert techniques for maximum protection.',
    icon: Package,
    color: 'bg-brand-accent/10 text-brand-accent',
    image: 'https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg',
  },
  {
    title: 'Loading & Unloading',
    description: 'Trained staff to handle heavy lifting with care using modern equipment.',
    icon: ArrowDownToLine,
    color: 'bg-brand-blue/10 text-brand-blue',
    image: 'https://images.pexels.com/photos/5025667/pexels-photo-5025667.jpeg',
  },
  {
    title: 'Local & Interstate Moving',
    description: 'Seamless moving services within Jalgaon or across India with real-time tracking.',
    icon: Globe,
    color: 'bg-brand-accent/10 text-brand-accent',
    image: 'https://images.pexels.com/photos/6169663/pexels-photo-6169663.jpeg',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span variants={fadeUp} className="text-brand-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
            What We Offer
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">
            Premium Moving <span className="text-brand-primary">Solutions</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/60 text-lg leading-relaxed">
            We provide a comprehensive range of relocation services tailored to meet your specific needs, ensuring a smooth transition to your new destination.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              whileHover={cardHover}
              className="group bg-brand-card rounded-[2rem] border border-white/5 shadow-2xl hover:border-brand-primary/30 transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div className="h-56 overflow-hidden relative">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                  loading="lazy"
                />
                <div className="absolute top-6 left-6">
                  <div className={`w-14 h-14 bg-brand-primary/90 text-white backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 leading-relaxed mb-8 flex-grow text-sm">
                  {service.description}
                </p>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-brand-primary font-black uppercase tracking-widest text-xs hover:text-white transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
