import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronRight, Globe, Youtube, Pin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/mbapackerwala" },
    { icon: Twitter, href: "https://x.com/Mbapackerwala" },
    { icon: Instagram, href: "https://www.instagram.com/mbapackerwala" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mbapackerwala" },
    { icon: Youtube, href: "https://www.youtube.com/@Mbapackerwala" },
    { icon: Pin, href: "https://in.pinterest.com/Mbapackerwala" },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Certificates', href: '/certificates' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="bg-brand-bg border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16 mb-20">
          
          {/* Company Info */}
          <div className="space-y-8">
            <Link to="/" className="inline-block">
              <img 
                 src="/gallery/logo.png" 
                 alt="MBA Packers Wala Logo" 
                 className="h-24 md:h-32 w-auto object-contain brightness-0 invert"
                 loading="lazy"
               />
            </Link>
            <p className="text-white/50 leading-relaxed text-sm">
              MBA Packers Wala is India's premier relocation specialist. Since 2003, we have set the gold standard in packing, moving, and logistics services with a focus on safety and reliability.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-brand-card border border-white/5 rounded-2xl flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 group">
                  <social.icon className="w-5 h-5 text-white/50 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 border-b border-white/5 pb-4 uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/40 hover:text-brand-primary flex items-center gap-2 transition-colors group text-sm font-bold uppercase tracking-widest">
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 border-b border-white/5 pb-4 uppercase tracking-widest text-white">Head Office</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-brand-card rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-brand-primary/30 transition-colors">
                  <MapPin className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase font-black tracking-[0.2em] mb-1">Address</p>
                  <p className="text-sm leading-relaxed text-white/60">
                    Shop No. 63 Ground Floor, MIDC Area, Jalgaon, Maharashtra 425003
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-brand-card rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-brand-primary/30 transition-colors">
                  <Phone className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase font-black tracking-[0.2em] mb-1">Call Us</p>
                  <p className="font-bold text-white tracking-tight">+91 8421970197</p>
                </div>
              </li>
              <li className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-brand-card rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-brand-primary/30 transition-colors">
                  <Mail className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase font-black tracking-[0.2em] mb-1">Email Us</p>
                  <p className="font-bold text-white text-sm">Info@mbapackerswala.in</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-[10px] font-bold uppercase tracking-widest">
          <p>© {currentYear} MBA Packers Wala. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
