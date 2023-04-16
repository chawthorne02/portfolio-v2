import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Contactsocials() {





    return (
        <ul className="contact-socials">
            <li>
                <a href="https://www.linkedin.com/in/corey-hawthorne-80a2581b6/" className="linkedin">
                    <BsLinkedin size={70}/>
                    </a>
            </li>
            <li>
                <a href="https://github.com/chawthorne02" className="github">
                    <BsGithub size={70}/>
                    </a>
            </li>
        </ul>
    )
}

export default Contactsocials;