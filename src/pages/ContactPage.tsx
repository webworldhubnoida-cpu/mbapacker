import Contact from '../components/Contact';
import PageHeader from '../components/PageHeader';

export default function ContactPage() {
  return (
    <div className="pt-0">
      <PageHeader 
        title="Contact Us" 
        subtitle="Have questions or need a free quote? Our team is available 24/7 to assist you with your relocation planning."
      />
      <Contact />
      
      {/* Google Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 h-[500px] relative border-8 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121824.24941014352!2d78.37288390742188!3d17.411440000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaeb2e75%3A0x8054446f48000000!2sTrans%20Home%20Packers%20And%20Movers!5e0!3m2!1sen!2sin!4v1711356240000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="MBA Packers Wala Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
