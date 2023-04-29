import '../styles/App.css';
import TopBar from './Navbar/Navbar';
import TitlePage from './Titlepage/Titlepage';
import AboutPage from './Aboutpage/Aboutpage';
import Contactpage from './Contactpage/Contactpage';
import Projectspage from './Projectspage/Projectspage';
import { motion, useScroll } from "framer-motion";
function App() {
  const { scrollYProgress } = useScroll();
  


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
        <TitlePage />
      </section>
      <section className='about-me' id='about-me'>
        <AboutPage />
      </section>
      <section className='projects' id='projects'>
        <Projectspage />
      </section>
      <section className='contact-me' id='contact'>
        <Contactpage /> 
      </section>
    </motion.div>
    </>
  );
}

export default App;
