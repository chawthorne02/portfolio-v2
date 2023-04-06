import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/Navbar.css';
import { Link, animateScroll as scroll } from "react-scroll";
function TopBar() {





    return (
        <Navbar className='navbar' fixed="top">
        <Container>
          <Navbar.Brand className="nav-left">Corey Hawthorne</Navbar.Brand>
          <Nav className='navlinks'>
            <Link className="nav-link" activeClass="active" to="about-me" spy={true} smooth={true} offset={0} duration={200}>
              About Me
              </Link>
            <Navbar.Text className="nav-link">Projects</Navbar.Text>
            <Navbar.Text className="nav-link">Contact</Navbar.Text>
            <Navbar.Text className="nav-link">Resume</Navbar.Text>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default TopBar;