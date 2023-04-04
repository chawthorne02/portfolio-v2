import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopBar() {





    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Corey Hawthorne</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About Me</Nav.Link>
            <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#pricing">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default TopBar;