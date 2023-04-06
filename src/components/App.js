import '../styles/App.css';
import TopBar from './Navbar/Navbar';

function App() {

  


  return (
    <div className="container-fluid">
      <header>
        <TopBar />
      </header>
      <section className='title-section'>
        <h2>Title section</h2>
      </section>
      <section className='about-me' id='about-me'>
        <h2>About me section</h2>
      </section>
      <section className='projects'>
        <h2>Projects section</h2>
      </section>
      <section className='contact-me'>
        <h2>Contact section</h2>
      </section>
    </div>
  );
}

export default App;
