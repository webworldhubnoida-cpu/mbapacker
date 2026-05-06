import { motion } from 'motion/react';
import { staggerContainer, fadeUp } from '../utils/animations';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhoWeAre from '../components/WhoWeAre';
import StatsGrid from '../components/StatsGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Gallery from '../components/Gallery';
import Team from '../components/Team';
import FAQSection from '../components/FAQSection';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import MapSection from '../components/MapSection';
import FeaturedOn from '../components/FeaturedOn';

export default function Home() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <Hero />
      
      <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
        <StatsGrid />
      </motion.div>

      <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
        <WhoWeAre />
      </motion.div>

      <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
        <WhyChooseUs />
      </motion.div>

      <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
        <Services />
      </motion.div>

      <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
        <Process />
      </motion.div>

      <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
        <FeaturedOn />
      </motion.div>


      <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
        <Gallery />
      </motion.div>

      <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
        <Team />
      </motion.div>

      <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
        <FAQSection />
      </motion.div>

      <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
        <Testimonials />
      </motion.div>

      <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
        <MapSection />
      </motion.div>

      <motion.div variants={fadeUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
        <Contact />
      </motion.div>
    </motion.div>
  );
}
