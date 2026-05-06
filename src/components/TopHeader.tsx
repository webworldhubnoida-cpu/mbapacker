import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Globe } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function TopHeader() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="bg-brand-bg text-white/50 py-2 text-[10px] font-bold uppercase tracking-widest border-b border-white/5 hidden md:block relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 group">
            <Phone className="w-3 h-3 text-brand-primary group-hover:scale-110 transition-transform" />
            <a href="tel:+918421970197" className="hover:text-white transition-colors tracking-tighter">+91 8421970197</a>
          </div>
          <div className="flex items-center gap-2 group">
            <Mail className="w-3 h-3 text-brand-primary group-hover:scale-110 transition-transform" />
            <a href="mailto:Info@mbapackerswala.in" className="hover:text-white transition-colors lowercase">Info@mbapackerswala.in</a>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <span className="opacity-30">Follow Us</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-brand-primary transition-all"><Facebook className="w-3.5 h-3.5" /></a>
            <a href="https://www.youtube.com/@packersandmoversjhansi" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-all"><Globe className="w-3.5 h-3.5" /></a>
            <a href="https://www.instagram.com/rkpackersandmoversjhansi" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-all"><Instagram className="w-3.5 h-3.5" /></a>
            <a href="https://www.linkedin.com/in/packersandmoversjhansi" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-all"><Linkedin className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
