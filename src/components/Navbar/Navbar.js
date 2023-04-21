import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/Navbar.css';
import { Link, animateScroll as scroll } from "react-scroll";
import resume from "../../images/resume.pdf";
function TopBar() {





    return (
        <Navbar className='navbar' fixed="top">
        <Container>
          <Link className="nav-left" activeClass="active" to="title" spy={true} smooth={true} offset={0} duration={200}>
            Corey Hawthorne
            </Link>
          <Nav className='navlinks'>
            <Link className="nav-link" activeClass="active" to="about-me" spy={true} smooth={true} offset={0} duration={200}>
              About Me
              </Link>
            <Link className="nav-link" activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={200}>
              Projects
              </Link>
            <Link className="nav-link" activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={200}>
              Contact
              </Link>
            <Navbar.Text className="nav-link">
              <a href={resume} target='_blank'>
                Resume
              </a>
            </Navbar.Text>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default TopBar;