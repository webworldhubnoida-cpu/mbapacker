import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Home Owner',
    content: 'MBA Packers Wala made my relocation from Jalgaon to Pune incredibly smooth. Their team was professional and handled everything with care.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
  },
  {
    name: 'Priya Reddy',
    role: 'IT Professional',
    content: 'I was worried about my delicate electronics, but their packing was top-notch. MBA Packers Wala ensures every item is protected. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
  },
  {
    name: 'Anil Kumar',
    role: 'Business Owner',
    content: 'Excellent office relocation service. They finished the move ahead of schedule, allowing us to resume operations quickly. MBA Packers Wala is truly professional.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
  },
];

export default function Testimonials() {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-brand-bg overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span variants={fadeUp} className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            Customer Stories
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase">
            What Our <span className="text-brand-primary">Clients Say</span>
          </motion.h2>
        </motion.div>
      </div>

      <div className="relative flex items-center group">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex gap-8 px-4"
          animate={{
            x: [0, -1800],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[350px] md:w-[450px] flex-shrink-0 bg-brand-card p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-primary/30 transition-all duration-500 shadow-2xl relative group"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-primary text-brand-primary" />
                ))}
              </div>

              <p className="text-white/60 text-lg italic leading-relaxed mb-8 relative z-10 line-clamp-4">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-brand-primary/20" 
                  loading="lazy"
                />
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-brand-primary text-xs font-bold uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
