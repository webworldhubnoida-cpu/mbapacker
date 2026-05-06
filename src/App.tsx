import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const WhyUsPage = lazy(() => import('./pages/WhyUsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CertificatesPage = lazy(() => import('./pages/CertificatesPage'));

// Loading fallback
const PageLoader = () => (
  <div className="h-screen w-full bg-brand-bg flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="why-us" element={<WhyUsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="certificates" element={<CertificatesPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
