import "../../styles/Contactpage.css"
import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import Contactform from "./Contactform";
import Button from 'react-bootstrap/Button';
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Contactmodal from "./Contactmodal";
import Contactsocials from "./Contactsocials";

function Contactpage() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_dj2omhg', 'template_5sj81jn', form.current, '-5FuMIkA58NpIsBmE')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
        <div className="contact-page">
            <section>
            {/* <h2 className="contact-title">Get In Touch</h2> */}
            <p className="contact">
                <BsFillTelephoneFill />  864-293-0404
            </p>
            <p className="contact">
                <a href="mailto: chawthorne02@gmail.com"><BsEnvelopeFill /> chawthorne02@gmail.com </a>
            </p>
            <p className="contact">
                <MdLocationOn /> Greenville, South Carolina
            </p>
                <Contactsocials />
            </section>
            <Contactform form={form} sendEmail={sendEmail} handleShow={handleShow} />
            <Contactmodal show={show} handleClose={handleClose} />
        </div>
    )
}

export default Contactpage;