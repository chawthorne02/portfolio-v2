import '../styles/App.css';
import TopBar from './Navbar/Navbar';
import TitlePage from './Titlepage/Titlepage';
import AboutPage from './Aboutpage/Aboutpage';
import Contactpage from './Contactpage/Contactpage';
import Projectspage from './Projectspage/Projectspage';
function App() {

  


  return (
    <div className="container-fluid">
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
    </div>
  );
}

export default App;
