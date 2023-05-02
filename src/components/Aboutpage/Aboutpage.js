import Me from "../../images/Me.jpg";
import "../../styles/Aboutpage.css";
import { motion } from "framer-motion";
function AboutPage({ scrollRef }) {
 





    return (
    <section ref={scrollRef} style={{ overflow: "scroll" }}>
        <motion.div 
        className="about-page"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        >
            <img src={Me} alt="me" className="me-pic"></img>
            <p className="about-text">
                Former educator transitioning into Front End Developer role after completing Carolina Code School. 
                I have experience with HTML, CSS, JavaScript, BootStrap, React, Python, Django, React BootStrap ,Rest API'S and 
                I understand the importance of creating highly readable and easily maintainable source code with experience in Agile methodology.
            </p>
        </motion.div>
    </section>
    )
}

export default AboutPage;