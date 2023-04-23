import Carousel from 'react-bootstrap/Carousel';
import Project1 from "../../images/Project1.jpeg"
import Project2 from "../../images/Project2.jpeg"
import Project3 from "../../images/Project3.jpeg"
import Project4 from "../../images/Project4.jpeg"
import "../../styles/Projectspage.css"


function Projectspage() {

    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="project"
            src={Project1} height={600}
            alt="First slide"
          />
          <div className='overlay'>
              <div className='overlay-text'>Text</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="project"
            src={Project2} height={600}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="project"
            src={Project3} height={600}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="project"
            src={Project4} height={600}
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    )
}

export default Projectspage;