import "../../styles/Titlepage.css"
import { motion } from "framer-motion";


function TitlePage() {






    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
            <h1 className="title-name">Corey Hawthorne</h1>
            <div className="subtitle">Software Developer</div>
        </motion.div>
    )
}

export default TitlePage;