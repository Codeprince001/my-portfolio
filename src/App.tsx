import './App.css'
import About from './components/About';
import CustomCursor from './components/cursor/Cursor';
// import Divider from './components/Divider';
import Header from './components/Header';
import Hero from './components/Hero';
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
      <CustomCursor/>
     <Header/>
     <Hero/>
     {/* <Divider/> */}
     <About/>
     <Services/>
     <Skills/>
    </div>
  )
}

export default App
