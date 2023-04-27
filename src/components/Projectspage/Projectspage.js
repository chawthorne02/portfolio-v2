import Carousel from 'react-bootstrap/Carousel';
import Project1 from "../../images/Project1.jpeg"
import Project2 from "../../images/Project2.jpeg"
import Project3 from "../../images/Project3.jpeg"
import Project4 from "../../images/Project4.jpeg"
import "../../styles/Projectspage.css"
import { BsGithub } from "react-icons/bs";

function Projectspage() {

    return (
        <Carousel>
        <Carousel.Item>
          <div className='container-overlay'>
            <img
              className="project"
              src={Project1} height={600}
              alt="First slide"
            />
            <div className='overlay'>
                <div className='overlay-text'>
                  Link to project <a href='https://github.com/chawthorne02/ccs-final-project'><BsGithub size={40} /></a>
                  </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='container-overlay'>
          <img
            className="project"
            src={Project2} height={600}
            alt="Second slide"
          />
            <div className='overlay'>
                <div className='overlay-text'>
                  Link to project <a href='https://github.com/chawthorne02/django_newspaper_app'><BsGithub size={40} /></a>
                  </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='container-overlay'>
          <img
            className="project"
            src={Project3} height={600}
            alt="Third slide"
          />
            <div className='overlay'>
              <div className='overlay-text'>
                Link to project <a href='https://github.com/chawthorne02/Pixel-Perfect'> <BsGithub size={40} /> </a>
                </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='container-overlay'>
          <img
            className="project"
            src={Project4} height={600}
            alt="Fourth slide"
          />
            <div className='overlay'>
              <div className='overlay-text'>
               Link to project <a href='https://github.com/chawthorne02/Turn-Based-Game'> <BsGithub size={40} /> </a>
                </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    )
}

export default Projectspage;