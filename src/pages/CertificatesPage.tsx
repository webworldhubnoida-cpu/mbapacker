import { motion } from 'motion/react';
import { FileText, Download, Eye, ShieldCheck, Award, FileCheck, Zap, Wifi, Users } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const certificates = [
  {
    id: 'udyam',
    title: 'Udyam Registration',
    description: 'Official MSME registration certificate from the Government of India.',
    icon: Award,
    color: 'bg-blue-500',
    fileUrl: '#'
  },
  {
    id: 'gst',
    title: 'GST Registration',
    description: 'Goods and Services Tax registration for legal business operations.',
    icon: ShieldCheck,
    color: 'bg-emerald-500',
    fileUrl: '#'
  },
  {
    id: 'electricity',
    title: 'Electricity Bill',
    description: 'Proof of business address and utility verification.',
    icon: Zap,
    color: 'bg-amber-500',
    fileUrl: '#'
  },
  {
    id: 'wifi',
    title: 'Wifi Bill',
    description: 'Secondary address verification and business infrastructure proof.',
    icon: Wifi,
    color: 'bg-indigo-500',
    fileUrl: '#'
  },
  {
    id: 'labour',
    title: 'Labour Department',
    description: 'Registration with the Department of Labour for workforce compliance.',
    icon: Users,
    color: 'bg-rose-500',
    fileUrl: '#'
  }
];

export default function CertificatesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader 
        title="Our Certificates" 
        subtitle="We are a fully licensed and government-registered relocation company, ensuring complete transparency and trust."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all group"
              >
                <div className={`w-16 h-16 ${cert.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-current/20 group-hover:scale-110 transition-transform`}>
                  <cert.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-display font-bold text-brand-blue mb-4">{cert.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">{cert.description}</p>

                <div className="flex gap-4">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-700 py-3 rounded-xl font-bold hover:bg-brand-blue hover:text-white transition-all text-sm">
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-brand-accent text-white py-3 rounded-xl font-bold hover:bg-brand-accent/90 transition-all text-sm shadow-lg shadow-brand-accent/20">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 p-12 bg-brand-blue rounded-[3rem] text-white text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-brand-accent/40">
                <FileCheck className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Fully Verified & Compliant</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                At Trans Home Packers & Movers, we prioritize your peace of mind. Our extensive documentation and compliance with government regulations reflect our commitment to providing a secure and professional relocation experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
