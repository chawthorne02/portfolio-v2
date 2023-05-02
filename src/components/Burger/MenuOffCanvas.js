import Offcanvas from 'react-bootstrap/Offcanvas';


function Menuoffcanvas({ show, handleClose }) {







    return (
        <>
        <Offcanvas show={show} onHide={() => handleClose()} placement='top' variant="primary">
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <ul>
                <li>
                    <a href="#">About me</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href='#'>Contact</a>
                </li>
                <li>
                    <a href='#'>Resume</a>
                </li>
            </ul>
            </Offcanvas.Body>
      </Offcanvas>
    </>
        
    )
}

export default Menuoffcanvas;