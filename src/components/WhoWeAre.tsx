import { motion } from 'motion/react';
import { Truck, Clock, Calendar, ShieldCheck } from 'lucide-react';
import { fadeUp, fadeLeft, fadeRight, transition } from '../utils/animations';

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-brand-bg overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Stacked Cards */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <motion.div 
              variants={fadeLeft}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="bg-brand-card p-8 rounded-3xl text-white flex flex-col items-center text-center justify-center flex-1 border border-white/5"
            >
              <div className="bg-brand-primary/10 p-4 rounded-2xl mb-6">
                <Truck className="w-10 h-10 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-white">Reliable Moves</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Every relocation is handled with precision, ensuring complete safety of your belongings.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeLeft}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ ...transition, delay: 0.2 }}
              className="bg-brand-primary p-8 rounded-3xl text-white flex flex-col items-center text-center justify-center flex-1 shadow-xl shadow-brand-primary/10"
            >
              <div className="bg-white/10 p-4 rounded-2xl mb-6">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-white">Timely Delivery</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                We value your time — on-time pickup and delivery is our promise.
              </p>
            </motion.div>
          </div>

          {/* Middle Column: Large Image */}
          <motion.div 
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="lg:col-span-5 relative rounded-[2.5rem] overflow-hidden min-h-[400px] lg:min-h-full shadow-2xl border border-white/5"
          >
            <img 
              src="https://i.pinimg.com/originals/35/06/4a/35064afc3b57ff5ba70431c6a47e6dca.webp" 
              alt="Professional Movers" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 to-transparent"></div>
          </motion.div>

          {/* Right Column: Text + Small Grid */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div 
              variants={fadeRight}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="bg-brand-card p-10 rounded-[2.5rem] flex-1 flex flex-col justify-center border border-white/5 shadow-sm"
            >
              <h2 className="text-4xl font-display font-bold mb-6">
                WHO <span className="text-brand-primary">WE ARE?</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Since 2003, <span className="text-brand-primary font-bold">MBA Packers Wala</span> has been more than just a moving company—we’ve been a partner in your new beginnings.
              </p>
              <p className="text-white/60 leading-relaxed">
                Founded by <span className="text-brand-primary font-bold">Zeehan Pinjari</span> in Jalgaon, we’ve built a reputation for delivering stress-free relocations across India with a strong focus on <span className="text-white font-bold">safety</span>, <span className="text-brand-primary font-bold">reliability</span>, and <span className="text-white font-bold">customer satisfaction</span>.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                variants={fadeUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ ...transition, delay: 0.3 }}
                className="bg-brand-card p-6 rounded-3xl text-white text-center border border-white/5"
              >
                <Calendar className="w-8 h-8 text-brand-primary mx-auto mb-4" />
                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-2 text-white/50">Flexible Scheduling</h4>
                <p className="text-[10px] text-white/40 leading-tight">We adapt to your schedule — weekends, holidays, or evenings.</p>
              </motion.div>

              <motion.div 
                variants={fadeUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ ...transition, delay: 0.4 }}
                className="bg-brand-primary p-6 rounded-3xl text-white text-center shadow-lg shadow-brand-primary/10"
              >
                <ShieldCheck className="w-8 h-8 text-white mx-auto mb-4" />
                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-2 text-white">Insured Safety</h4>
                <p className="text-[10px] text-white/80 leading-tight">Full insurance coverage gives you peace of mind at every step.</p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
