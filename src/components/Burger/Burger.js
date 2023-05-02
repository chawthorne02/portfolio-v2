import "../../styles/Burger.css"
import { useState } from "react";
import Menuoffcanvas from "./MenuOffCanvas";


function Burger() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
            <section className="burger" onClick={() => handleShow()}>
                <a href="#" className="bar"></a>
                <a href="#" className="bar"></a>
                <a href="#" className="bar"></a>
                <a href="#" className="bar"></a>
                <Menuoffcanvas show={show} handleClose={handleClose}/>
            </section>
        </>
    )
}

export default Burger;