import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../../styles/Footer.css"
import { AiOutlineCopyrightCircle } from "react-icons/ai"

function Footer() {





    return (
        <Navbar fixed='bottom' className='footer'>
      <Container>
        <Navbar.Collapse className="justify-content-center">
          <Navbar.Text className='footer-text'>
            <AiOutlineCopyrightCircle /> Created by Corey Hawthorne 2023
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Footer;