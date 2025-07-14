import './App.css'
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectSlider from './components/ProjectSlider';
import Services from './components/Services';
import Skills from './components/Skills';
// import About from './components/About';
// import Services from './components/Services';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {

  return (
    <div>
     <Header/>
     <Hero/>
     {/* <Divider/> */}
     <About/>
     <Services/>
     <Skills/>
     <ProjectSlider/>
    </div>
  )
}

export default App
