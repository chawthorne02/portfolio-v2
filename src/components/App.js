import '../styles/App.css';
import TopBar from './Navbar/Navbar';
import TitlePage from './Titlepage/Titlepage';
import AboutPage from './Aboutpage/Aboutpage';
import Contactpage from './Contactpage/Contactpage';
import Projectspage from './Projectspage/Projectspage';
import Footer from './Footer/Footer';
import { motion, useScroll } from "framer-motion";
import { useRef } from 'react';
function App() {
  const { scrollYProgress } = useScroll();
  const scrollRef = useRef(null);


  return (
    <>
    <motion.div 
    className="container-fluid" 
    id='progress-bar'
    >
      <header>
        <TopBar />
      </header>
      <section className='title-section' id='title'>
        <TitlePage scrollRef={scrollRef}/>
      </section>
      <section className='about-me' id='about-me'>
        <AboutPage scrollRef={scrollRef}/>
      </section>
      <section className='projects' id='projects'>
        <Projectspage scrollRef={scrollRef}/>
      </section>
      <section className='contact-me' id='contact'>
        <Contactpage scrollRef={scrollRef}/> 
      </section>
      <footer>
        <Footer />
      </footer>
    </motion.div>
    </>
  );
}

export default App;
