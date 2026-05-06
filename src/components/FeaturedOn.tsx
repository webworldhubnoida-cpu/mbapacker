import { motion } from 'motion/react';
import { ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { fadeUp, fadeLeft, staggerContainer, transition } from '../utils/animations';

export default function FeaturedOn() {
  const partners = [
    {
      name: 'IndiaMART',
      url: 'https://www.indiamart.com/transhome-packers-movers/',
      description: 'Verified TrustSEAL Seller',
      logo: 'https://tiimg.tistatic.com/tn/logo/indiamart-logo.png', // Fallback to stylized text if logo fails
      color: 'hover:border-orange-500 hover:shadow-orange-500/10'
    },
    {
      name: 'AssureShift',
      url: 'https://www.assureshift.in/company/trans-home-packers-and-movers-hyderabad',
      description: 'Top Rated Moving Company',
      logo: 'https://www.assureshift.in/assets/images/assureshift-logo.svg',
      color: 'hover:border-blue-500 hover:shadow-blue-500/10'
    }
  ];

  return (
    <section className="py-20 bg-brand-bg overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="max-w-md text-center md:text-left"
          >
            <motion.div
              variants={fadeLeft}
              className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Award size={14} />
              <span>Trusted & Verified</span>
            </motion.div>
            <motion.h2
              variants={fadeLeft}
              className="text-3xl md:text-4xl font-extrabold text-white mb-6 uppercase"
            >
              Find Us on India's Leading <span className="text-brand-primary">Platforms</span>
            </motion.h2>
            <motion.p
              variants={fadeLeft}
              className="text-white/60 leading-relaxed"
            >
              Our commitment to quality and safety is recognized by the country's most trusted business directories and moving portals.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6 w-full md:w-auto"
          >
            {partners.map((partner) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                className={`flex flex-col items-center p-8 bg-brand-card rounded-[2rem] border border-white/5 shadow-2xl transition-all duration-500 group ${partner.color} hover:border-brand-primary/30`}
              >
                <div className="h-12 flex items-center justify-center mb-6 opacity-50 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-2xl font-black text-white tracking-tighter">{partner.name}</span>
                </div>
                <div className="flex items-center gap-2 text-brand-primary mb-4">
                  <CheckCircle2 size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">{partner.description}</span>
                </div>
                <div className="flex items-center gap-2 text-white/40 group-hover:text-white transition-colors font-bold text-sm">
                  <span>View Profile</span>
                  <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
