import Services from '../components/Services';
import Process from '../components/Process';
import PageHeader from '../components/PageHeader';

export default function ServicesPage() {
  return (
    <div className="pt-0">
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive packing and moving solutions tailored to your specific needs, ensuring a stress-free relocation experience."
      />
      <Services />
      <Process />
    </div>
  );
}
