import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/Navbar.css';
function TopBar() {





    return (
        <Navbar className='navbar' fixed="top">
        <Container>
          <Navbar.Brand>Corey Hawthorne</Navbar.Brand>
          <Nav className='navlinks'>
            <Nav.Link>About Me</Nav.Link>
            <Nav.Link>Projects</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
            <Nav.Link>Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default TopBar;