import "../../styles/Contactpage.css"
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

function Contactpage() {






    return (
        <div className="contact-page">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact">
                <BsFillTelephoneFill />  864-293-0404
            </p>
            <p className="contact">
                <a href="mailto: chawthorne02@gmail.com"><BsEnvelopeFill /> chawthorne02@gmail.com </a>
            </p>
            <p className="contact">
                <MdLocationOn /> Greenville, South Carolina
            </p>
            
        </div>
    )
}

export default Contactpage;