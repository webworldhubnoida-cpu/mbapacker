import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Star, Award, Phone, Truck, ArrowRight } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import { fadeUp, staggerContainer } from '../utils/animations';

const heroImages = [
  "https://images.pexels.com/photos/5025663/pexels-photo-5025663.jpeg",
  "https://images.pexels.com/photos/7464687/pexels-photo-7464687.jpeg",
  "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg",
  "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg"
];

const locations = [
  "Jalgaon",
  "Maharashtra",
  "Mumbai",
  "Pune",
  "Across India"
];


export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [locationIndex, setLocationIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { onOpenQuote } = useOutletContext<{ onOpenQuote: () => void }>();

  // Image Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Typing Effect
  useEffect(() => {
    const currentFullText = locations[locationIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setLocationIndex((prev) => (prev + 1) % locations.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, locationIndex]);

  return (
    <section className="relative min-h-[600px] lg:h-[calc(100vh-180px)] flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            loading={currentImageIndex === 0 ? "eager" : "lazy"}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="whileInView"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-sm text-brand-primary font-semibold uppercase tracking-wider mb-4"
            >
              <Star className="w-4 h-4 fill-brand-primary" />
              Trusted by 5000+ Customers
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4"
            >
              Relocating Your World, <br />
              With <span className="text-brand-primary">Absolute Care</span> in{' '}
              <span className="inline-block min-w-[260px]">
                <span className="bg-gradient-to-r from-brand-primary to-brand-primary-hover bg-clip-text text-transparent">
                  {displayText}
                </span>
                <span className="ml-1 animate-pulse text-brand-primary">|</span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-white/70 mb-6 max-w-xl"
            >
              Premium packing and moving services since 2003. Trusted by thousands for seamless home, office, and vehicle shifting across India.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <button
                onClick={onOpenQuote}
                className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:bg-brand-primary-hover hover:shadow-brand-primary/20 transition-all flex items-center gap-2"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+918421970197"
                className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/10 flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-brand-primary" />
                Call Experts
              </a>
            </motion.div>

            {/* Trust */}
            <motion.div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
              {[
                { icon: ShieldCheck, label: "GST Registered" },
                { icon: Award, label: "ISO Certified" },
                { icon: Star, label: "5 Star Rated" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <item.icon className="text-brand-primary w-6 h-6" />
                  <span className="text-white text-[10px] uppercase opacity-50 font-bold tracking-widest">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="bg-brand-card/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl max-w-sm ml-auto">

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center">
                  <Truck className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Quick Booking</h3>
                  <p className="text-white/50 text-xs font-medium uppercase tracking-wider">2 min quote</p>
                </div>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Moving From"
                  className="w-full px-4 py-3.5 rounded-xl bg-brand-bg/50 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm"
                />
                <input
                  type="text"
                  placeholder="Moving To"
                  className="w-full px-4 py-3.5 rounded-xl bg-brand-bg/50 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3.5 rounded-xl bg-brand-bg/50 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm"
                />

                <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-sm hover:bg-brand-primary-hover shadow-lg shadow-brand-primary/10 transition-all uppercase tracking-widest">
                  Request Callback
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}