import "../../styles/Titlepage.css"
import { motion } from "framer-motion";


function TitlePage({ scrollRef }) {






    return (
    <section ref={scrollRef} style={{ overflow: "scroll" }}>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        >
            <h1 className="title-name">Corey Hawthorne</h1>
            <div className="subtitle">Software Developer</div>
        </motion.div>
    </section>
    )
}

export default TitlePage;