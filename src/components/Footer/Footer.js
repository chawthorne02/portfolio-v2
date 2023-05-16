import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Footer() {





    return (
        <Navbar fixed='bottom'>
      <Container>
        <Navbar.Collapse className="justify-content-center">
          <Navbar.Text className='footer-text'>
            Created by Corey Hawthorne
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Footer;