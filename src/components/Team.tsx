import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';

const team = [
  {
    name: 'Zeehan Pinjari',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
    bio: 'With over 20 years in logistics, Zeehan leads MBA Packers Wala with a vision for excellence.'
  },
  {
    name: 'Priya Sharma',
    role: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    bio: 'Priya ensures every move is executed with precision and on-time delivery.'
  },
  {
    name: 'Amit Patel',
    role: 'Logistics Coordinator',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    bio: 'Amit specializes in complex interstate relocations and fleet management.'
  },
  {
    name: 'Sneha Gupta',
    role: 'Customer Success Lead',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
    bio: 'Sneha and her team are dedicated to providing 24/7 support to our clients.'
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-brand-bg overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span variants={fadeUp} className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            The Experts
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase">
            Meet Our <span className="text-brand-primary">Leadership</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/60 text-lg">
            Dedicated professionals with decades of experience in logistics and relocation management.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-brand-card rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-brand-primary/30 transition-all duration-500 shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-8">
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-brand-primary text-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-brand-primary text-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-primary transition-colors">{member.name}</h3>
                <p className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-white/50 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
  
