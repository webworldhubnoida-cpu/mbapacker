import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import PageHeader from '../components/PageHeader';

export default function WhyUsPage() {
  return (
    <div className="pt-0">
      <PageHeader 
        title="Why Choose Us" 
        subtitle="Discover why thousands of families and businesses trust MBA Packers Wala for their most valuable possessions."
        breadcrumb="About Us"
      />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
