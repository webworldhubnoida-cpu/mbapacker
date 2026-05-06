import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
    title: 'Warehouse Logistics',
    category: 'Storage'
  },
  {
    src: 'https://tse1.explicit.bing.net/th/id/OIP.A6BBZXwpSFzkxCrSNK2nYwHaFj?pid=ImgDet&w=178&h=133&c=7&dpr=1.8&o=7&rm=3',
    title: 'Professional Team',
    category: 'Team'
  },
  {
    src: 'https://tse1.mm.bing.net/th/id/OIP.0CunwLVa0LYfzEvi8VzuxwHaGw?pid=ImgDet&w=178&h=162&c=7&dpr=1.8&o=7&rm=3',
    title: 'Safe Packing',
    category: 'Packing'
  },
  {
    src: 'https://images.unsplash.com/photo-1549194388-f61be84a6e9e?auto=format&fit=crop&q=80',
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
    src: 'https://th.bing.com/th/id/OIP.lsQGFv3hhNI8EaKkHEbDAAHaEK?w=310&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3',
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

export default function GalleryPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader 
        title="Our Gallery" 
        subtitle="A visual showcase of our professional moving and packing services in action."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl shadow-slate-200/50 aspect-[4/3]"
              >
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <span className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">
                    {image.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
