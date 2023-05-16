import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, animateScroll as scroll } from "react-scroll";
import resume from "../../images/resume.pdf";
import useOnClickOutside from "../Hooks/Hooks";
import { useRef } from 'react';
import { useState } from 'react';

function Menuoffcanvas({ show, handleClose, handleShow }) {

    const [open, setOpen] = useState(false)
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));



    return (
        <>
        <Offcanvas show={show} onHide={handleClose} placement='top' variant="primary">
            <Offcanvas.Header closeButton>
             <Offcanvas.Title>
                <Link activeClass="active" to="title" spy={true} smooth={true} offset={0} duration={200}>
                Corey Hawthorne
                </Link>
                </Offcanvas.Title> 
            </Offcanvas.Header>
            <Offcanvas.Body>
            <ul className='burger-links'>
                <li>
                    <Link
                    className='burger-link'
                    activeClass="active" 
                    to="about-me" 
                    spy={true} 
                    smooth={true} 
                    offset={0} 
                    duration={200}
                    >
                    About Me
                   </Link>
                </li>
                <li>
                    <Link 
                    className="burger-link" 
                    activeClass="active" 
                    to="projects" 
                    spy={true} 
                    smooth={true} 
                    offset={0} 
                    duration={200}>
                    Projects
                    </Link>
                </li>
                <li>
                    <Link 
                    className="burger-link" 
                    activeClass="active" 
                    to="contact" 
                    spy={true} 
                    smooth={true} 
                    offset={0} 
                    duration={200}
                    >
                    Contact
                    </Link>
                </li>
                <li>
                    <a href={resume} className='burger-link' target='_blank'>Resume</a>
                </li>
            </ul>
            </Offcanvas.Body>
      </Offcanvas>
    </>
        
    )
}

export default Menuoffcanvas;