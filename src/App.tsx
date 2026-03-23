// App.tsx
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import ProjectSlider from './components/ProjectSlider';
import Projects from './pages/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { getOrganizationSchema, getWebsiteSchema, mergeSchemas, renderStructuredData } from './utils/seo';

const Home = () => (
  <>
    <Header />
    <Hero />
    <About />
    <Services />
    <Skills />
    <ProjectSlider />
    <Contact/>
    <Footer/>
  </>
);

// SEO Component wrapper to update page title on route change
const SEORoutes = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

function App() {
  // Generate schema markup for organization and website
  const schemaMarkup = mergeSchemas([
    getOrganizationSchema(),
    getWebsiteSchema(),
  ]);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {renderStructuredData(schemaMarkup).__html}
        </script>
      </Helmet>
      <Router>
        <SEORoutes />
      </Router>
    </>
  );
}

export default App;