// App.tsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import ProjectSlider from './components/ProjectSlider';
import Projects from './pages/Project'; // 📄 your full projects page
import Contact from './components/Contact';

const Home = () => (
  <>
    <Header />
    <Hero />
    <About />
    <Services />
    <Skills />
    <ProjectSlider />
    <Contact/>
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;