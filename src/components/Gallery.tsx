import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { fadeUp, staggerContainer } from '../utils/animations';

const images = [
  {
    src: 'https://m.media-amazon.com/images/I/61ZBZjcpseL.jpg',
    title: 'Warehouse Logistics',
    category: 'Storage'
  },
  {
    src: 'https://static.platform.michaels.com/2c-prd/4611725501047937632.jpeg',
    title: 'Professional Team',
    category: 'Team'
  },
  {
    src: 'https://tse1.mm.bing.net/th/id/OIP.xonC_rF_ZrTbt9HUtLN6eAAAAA?pid=ImgDet&w=178&h=223&c=7&dpr=1.8&o=7&rm=3',
    title: 'Safe Packing',
    category: 'Packing'
  },
  {
    src: 'https://tse1.explicit.bing.net/th/id/OIP.30CZFgZ1vB64dpoH8cbXigHaFj?pid=ImgDet&w=178&h=133&c=7&dpr=1.8&o=7&rm=3',
    title: 'Fleet Management',
    category: 'Transport'
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    title: 'Home Relocation',
    category: 'Moving'
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    title: 'Office Shifting',
    category: 'Corporate'
  },
  {
    src: 'https://images.unsplash.com/photo-1580674271209-40b4b988fedf?auto=format&fit=crop&q=80',
    title: 'Vehicle Transport',
    category: 'Auto'
  },
  {
    src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80',
    title: 'Industrial Moving',
    category: 'Industrial'
  },
  {
    src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80',
    title: 'International Shipping',
    category: 'Global'
  }
];

export default function Gallery() {
  const duplicatedImages = [...images, ...images];

  return (
    <section id="gallery" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span variants={fadeUp} className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            Our Work
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase">
            Service <span className="text-brand-primary">Showcase</span>
          </motion.h2>
        </motion.div>
      </div>

      <div className="relative flex items-center group">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex gap-6 px-4"
          animate={{
            x: [0, -2800],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="group relative w-[300px] md:w-[450px] h-72 flex-shrink-0 rounded-3xl overflow-hidden shadow-2xl border border-white/5"
            >
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div>
                  <span className="text-brand-primary text-[10px] font-black uppercase tracking-widest mb-2 block">{image.category}</span>
                  <h3 className="text-white text-lg font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
