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
import { motion } from "framer-motion";


function Contactpage({ scrollRef }) {

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
        <section className="contact-page" ref={scrollRef} style={{ overflow: "scroll" }}>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            >
            <span className="contact">
            <p className="contact-email">
                <a href="mailto: chawthorne02@gmail.com"><BsEnvelopeFill /> chawthorne02@gmail.com </a>
            </p>
            <p className="contact-location">
                <MdLocationOn /> Greenville, South Carolina
            </p>
            </span>
                <Contactsocials />
            </motion.div>
            <Contactform form={form} sendEmail={sendEmail} handleShow={handleShow} />
            <Contactmodal show={show} handleClose={handleClose} />
        </section>
    )
}

export default Contactpage;