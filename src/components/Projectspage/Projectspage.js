import Carousel from 'react-bootstrap/Carousel';
import Project1 from "../../images/Project1.jpeg"
import Project2 from "../../images/Project2.jpeg"
import Project3 from "../../images/Project3.jpeg"
import Project4 from "../../images/Project4.jpeg"
import "../../styles/Projectspage.css"
import { BsGithub } from "react-icons/bs";

function Projectspage({ scrollRef }) {

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
                  <div className='description-text'>Created a tutoring app that users are able to find and connect with a certified tutor for a personalized learning plan. Once the user is connected with the tutor of their choosing, the tutor can leave notes for students about lessons, keep track of student progression, and also assign the students lessons all from within the app. Students can also leave messages for the tutor on lessons allowing for smooth communication throughout the learning process.</div>
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
                  <div className='description-text'>Created a newspaper app that had different permissions for each user; non authenticated user, authenticated user, and the admin.</div>
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
                <div className='desription-text'>Created a HTML page based off of an image file that was given. Also making the site a pixel perfect match according to the desktop image.</div>
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
                <div className='description-text'>Created a turn based battle game with a group. If you're thinking of what type of turn-based game, think of old-school Pokemon game battle scenarios. In the group, I was in charge of the styling and the animation that when a player took damage their card would flash.</div>
               Link to project <a href='https://github.com/chawthorne02/Turn-Based-Game'> <BsGithub size={40} /> </a>
                </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    )
}

export default Projectspage;