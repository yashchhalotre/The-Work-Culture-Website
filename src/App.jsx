import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Amenities from './components/Amenities.jsx';
import Workspaces from './components/Workspaces.jsx';
import Pricing from './components/Pricing.jsx';
import ServiceAreas from './components/ServiceAreas.jsx';
import Gallery from './components/Gallery.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Blogs from './components/Blogs.jsx';
import Registration from './components/Registration.jsx';
import CreativeAdda from './components/CreativeAdda.jsx';
import Footer from './components/Footer.jsx';
import BlogPage from './components/BlogPage.jsx';
import LoginPage from './components/LoginPage.jsx';
import VirtualOffice from './components/VirtualOffice.jsx';
import ServiceAreaDetail from './components/ServiceAreaDetail.jsx';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { highlights } from './data/siteData.js';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Amenities />
      <HowItWorks />
      <section className="section dark-panel" id="highlights">
        <div className="container highlight-shell">
          <p className="eyebrow light">Fun Facts</p>
          <h2>Highlights That Capture Our Journey Toward Success</h2>
          <div className="highlight-grid">{highlights.map((item) => <article className="highlight-card" key={item.title}><strong>{item.value}</strong><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </div>
      </section>
      <Workspaces />
      <Pricing />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact compact />
      <Blogs compact />
    </main>
  );
}

function GalleryPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Latest Gallery</p>
          <h1>Inside The Work Culture</h1>
          <p>Clean office interiors, cabins, desks and meeting areas designed for productive work.</p>
        </div>
      </section>
      <Gallery />
    </main>
  );
}

function NotFound() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">404</p>
          <h1>Page not found</h1>
          <p>The page you are looking for does not exist.</p>
          <Link className="btn primary" to="/">Back to Home</Link>
        </div>
      </section>
    </main>
  );
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('twc-theme') || 'dark');

  useEffect(() => {
    document.body.classList.toggle('light-mode', theme === 'light');
    document.body.classList.toggle('dark-mode', theme === 'dark');
    localStorage.setItem('twc-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => current === 'dark' ? 'light' : 'dark');

  return (
    <>
      <ScrollToTop />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service-areas" element={<ServiceAreas page />} />
        <Route path="/service-areas/:slug" element={<ServiceAreaDetail />} />
        <Route path="/pricing" element={<Pricing page />} />
        <Route path="/contact" element={<Contact page />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/registration" element={<Registration page />} />
        <Route path="/creative-adda" element={<CreativeAdda page />} />
        <Route path="/virtual-office" element={<VirtualOffice />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
