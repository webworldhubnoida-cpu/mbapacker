import { motion } from 'motion/react';
import { Box, Headset, Clock, MapPin } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';

export default function StatsGrid() {
  const stats = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80',
      alt: 'Our Fleet',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-2'
    },
    {
      type: 'stat',
      icon: Box,
      value: '5000+',
      label: 'Successful Shifts',
      description: 'Safe packing & reliable transport for every move.',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
      alt: 'Container Transport',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-2'
    },
    {
      type: 'stat',
      icon: Headset,
      value: '24/7',
      label: 'Customer Support',
      description: 'Always here to assist you with smooth moving solutions.',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1'
    },
    {
      type: 'stat',
      icon: Clock,
      value: '23+',
      label: 'Years of Experience',
      description: 'Trusted relocation services across India since 2003.',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80',
      alt: 'Shipping Container',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-2'
    },
    {
      type: 'stat',
      icon: MapPin,
      value: '50+',
      label: 'Cities Covered',
      description: 'Delivering relocation services across urban & rural India.',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1'
    },
    {
      type: 'image',
      src: 'https://tse3.mm.bing.net/th/id/OIP.O3IsNBpuBrZw2QgKxhJaIQHaHa?w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3',
      alt: 'Logistics Crane',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-2'
    }
  ];

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" className="text-brand-primary" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          
          {/* Column 1 */}
          <div className="flex flex-col gap-8">
            <motion.div 
              variants={fadeUp}
              className="h-[300px] rounded-3xl overflow-hidden shadow-2xl group border border-white/5"
            >
              <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80" alt="Fleet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" />
            </motion.div>
            <motion.div 
              variants={fadeUp}
              className="bg-brand-card p-8 rounded-3xl border border-white/5 hover:border-brand-primary/30 transition-all group"
            >
              <Box className="w-12 h-12 text-brand-primary mb-6 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-bold text-white mb-2">5000+</div>
              <div className="text-brand-primary font-bold text-sm uppercase tracking-wider mb-2">Successful Shifts</div>
              <p className="text-white/50 text-sm leading-relaxed">Safe packing & reliable transport for every move.</p>
            </motion.div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8 mt-12 lg:mt-24">
            <motion.div 
              variants={fadeUp}
              className="bg-brand-primary p-8 rounded-3xl border border-brand-primary/20 shadow-xl hover:shadow-brand-primary/20 transition-all group"
            >
              <Headset className="w-12 h-12 text-white mb-6 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/90 font-bold text-sm uppercase tracking-wider mb-2">Customer Support</div>
              <p className="text-white/80 text-sm leading-relaxed">Always here to assist you with smooth moving solutions.</p>
            </motion.div>
            <motion.div 
              variants={fadeUp}
              className="h-[300px] rounded-3xl overflow-hidden shadow-2xl group border border-white/5"
            >
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" alt="Warehouse" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" />
            </motion.div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-8">
            <motion.div 
              variants={fadeUp}
              className="h-[300px] rounded-3xl overflow-hidden shadow-2xl group border border-white/5"
            >
              <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80" alt="Transport" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" />
            </motion.div>
            <motion.div 
              variants={fadeUp}
              className="bg-brand-card p-8 rounded-3xl border border-white/5 hover:border-brand-primary/30 transition-all group"
            >
              <Clock className="w-12 h-12 text-brand-primary mb-6 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-bold text-white mb-2">23+</div>
              <div className="text-brand-primary font-bold text-sm uppercase tracking-wider mb-2">Years of Experience</div>
              <p className="text-white/50 text-sm leading-relaxed">Trusted relocation services across India since 2003.</p>
            </motion.div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-8 mt-12 lg:mt-24">
            <motion.div 
              variants={fadeUp}
              className="bg-brand-primary p-8 rounded-3xl border border-brand-primary/20 shadow-xl hover:shadow-brand-primary/20 transition-all group"
            >
              <MapPin className="w-12 h-12 text-white mb-6 group-hover:scale-110 transition-transform" />
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/90 font-bold text-sm uppercase tracking-wider mb-2">Cities Covered</div>
              <p className="text-white/80 text-sm leading-relaxed">Delivering relocation services across urban & rural India.</p>
            </motion.div>
            <motion.div 
              variants={fadeUp}
              className="h-[300px] rounded-3xl overflow-hidden shadow-2xl group border border-white/5"
            >
              <img src="https://tse3.mm.bing.net/th/id/OIP.O3IsNBpuBrZw2QgKxhJaIQHaHa?w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Service" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
