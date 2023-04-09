import '../styles/App.css';
import TopBar from './Navbar/Navbar';
import TitlePage from './Titlepage/Titlepage';
import AboutPage from './Aboutpage/Aboutpage';
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
        <h2>Projects section</h2>
      </section>
      <section className='contact-me' id='contact'>
        <h2>Contact section</h2>
      </section>
    </div>
  );
}

export default App;
