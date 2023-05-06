import Offcanvas from 'react-bootstrap/Offcanvas';


function Menuoffcanvas({ show, handleClose }) {







    return (
        <>
        <Offcanvas show={show} onHide={handleClose} placement='top' variant="primary">
            <Offcanvas.Header closeButton>
            {/* <Offcanvas.Title>Portfolio</Offcanvas.Title> */}
            </Offcanvas.Header>
            <Offcanvas.Body>
            <ul className='burger-links'>
                <li>
                    <a href="#" className='burger-link'>About me</a>
                </li>
                <li>
                    <a href="#"className='burger-link'>Projects</a>
                </li>
                <li>
                    <a href='#' className='burger-link'>Contact</a>
                </li>
                <li>
                    <a href='#' className='burger-link'>Resume</a>
                </li>
            </ul>
            </Offcanvas.Body>
      </Offcanvas>
    </>
        
    )
}

export default Menuoffcanvas;