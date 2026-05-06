import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How do I get a quote for my move?',
    answer: 'You can get a free, no-obligation quote by filling out our online contact form, calling our 24/7 customer support, or visiting any of our local offices. We also offer on-site surveys for more accurate estimates.'
  },
  {
    question: 'What items are not allowed to be moved?',
    answer: 'For safety reasons, we do not move hazardous materials, explosives, flammable liquids, perishable food items, or illegal substances. We also recommend that you carry high-value personal items like jewelry and important documents yourself.'
  },
  {
    question: 'Do you provide packing materials?',
    answer: 'Yes, we provide high-quality packing materials including corrugated boxes, bubble wrap, packing tape, and protective blankets. Our professional team can handle the entire packing process for you.'
  },
  {
    question: 'How far in advance should I book my move?',
    answer: 'We recommend booking your move at least 2-4 weeks in advance, especially during peak moving seasons (weekends and month-ends). However, we do our best to accommodate last-minute requests whenever possible.'
  },
  {
    question: 'Is my shipment insured during transit?',
    answer: 'Yes, we offer comprehensive transit insurance options to protect your belongings against any unforeseen circumstances. Our team will explain the different coverage levels available to you during the booking process.'
  },
  {
    question: 'How can I track my shipment?',
    answer: 'Once your move is underway, you will receive a unique tracking ID. You can use this ID on our website or call our dedicated support team for real-time updates on your shipment\'s location.'
  }
];

interface FAQItemProps {
  key?: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-brand-accent' : 'text-brand-blue group-hover:text-brand-accent'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 p-1 rounded-full transition-all duration-300 ${isOpen ? 'bg-brand-accent text-white rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-brand-accent group-hover:text-white'}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-bg overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Got Questions?
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase"
          >
            Frequently Asked <span className="text-brand-primary">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-brand-card rounded-2xl border transition-all duration-300 ${
                openIndex === index ? 'border-brand-primary shadow-xl shadow-brand-primary/5' : 'border-white/5 hover:border-white/10'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-brand-primary' : 'text-white'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? 'bg-brand-primary text-white rotate-180' : 'bg-white/5 text-white/50'
                }`}>
                  <Plus className="w-5 h-5" />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-white/50 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
