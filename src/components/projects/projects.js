import React, { Component } from 'react';
import './projects.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Chat from '../../assets/chat.mp4'
import Dynamic from '../../assets/dynamic.mp4'
import Login from '../../assets/login.mp4'
import Three1 from '../../assets/three.js.mp4'
import Three2 from '../../assets/three.js2.mp4'

/*const projectsData = [
  {
    name: "CHAT APP",
    description: "I developed a streamlined Classroom Reservation System, designed to simplify booking for educational spaces. Its user-friendly interface displays real-time availability, supports instant booking confirmation, and sends timely notifications, making the reservation process seamless for both students and faculty.",
    videoUrl: Video1,
  },
  {
    name: "DYNAMIC TRANSITIONS",
    description: "This project involved creating a visually engaging website featuring dynamic transitions and animations using the GSAP (GreenSock Animation Platform). It included a captivating animated loading screen with a bouncing ball and interactive elements like images enlarging on hover, showcasing smooth and sophisticated web animations.",
    videoUrl: Video1,
  },
  {
    name: "LOGIN SYSTEM",
    description: "This project was a straightforward user authentication system, featuring a clean and user-friendly interface for registration and login. Users could create an account by providing basic details and then log in securely, showcasing essential functionalities like data handling and security in web applications.",
    videoUrl: Video1,
  },
  {
    name: "THREE.JS",
    description: "Utilizing Three.js, this prototype featured an interactive 3D eye where the iris follows the user's cursor. It demonstrated advanced 3D rendering and interactive capabilities, illustrating the potential of Three.js in creating immersive and engaging web experiences.",
    videoUrl: Video1,
  }
];*/

export class Projects extends Component {
  
    render() {
      return (
        <div className='projects-page'>
      <div className="title"><h2>PROJECTS</h2></div>
        <Splide className='splide1'
          options={ {
            rewind: true,
            gap   : '1rem',
            width : '100vw',
            drag: true,
            arrows: true,
          } }
          aria-label="My Favorite Images"
        >
                    
          <SplideSlide className='banner'>
            <div className='container-projects'>
            <div className='text-projects'>
            <h1>CHAT APP</h1>
            <p>This prototype is a versatile chat application designed for both individual and 
              group messaging. It features a unique room-based system, where users can join or initiate 
              conversations using a specific room number. This functionality allows for flexible chat 
              experiences, accommodating both private and public communication. The app emphasizes real-ti
              me interaction, offering a user-friendly interface that facilitates easy and efficient messaging.</p>
            </div>
            <div className='project-video'>
            <video width="320" height="240" controls>
            <source src={Chat} type="video/mp4"></source>
            </video>
            </div>
            </div>
          </SplideSlide>
          
          <SplideSlide className='banner'>
            <div className='container-projects'>
            <div className='text-projects'>
            <h1>Dynamic Transitions</h1>
            <p>This project involved creating a visually engaging website featuring dynamic transitions and animatio
              ns using the GSAP (GreenSock Animation Platform). It included a captivating animated loading screen with
               a bouncing ball and interactive elements like images enlarging on hover, showcasing smooth and sophisticated web animations.</p>
            </div>
            <div className='project-video'>
            <video width="320" height="240" controls>
            <source src={Dynamic} type="video/mp4"></source>
            </video>
            </div>
            </div>
          </SplideSlide>
          
          <SplideSlide className='banner'>
            <div className='container-projects'>
            <div className='text-projects'>
            <h1>Login System</h1>
            <p>This project was a straightforward user authentication system, featuring a clean and user-friendly 
              interface for registration and login. Users could create an account by providing basic details and t
              hen log in securely, showcasing essential functionalities like data handling and security in web applications.</p>
            </div>
            <div className='project-video'>
            <video width="320" height="240" controls>
            <source src={Login} type="video/mp4"></source>
            </video>
            </div>
            </div>
          </SplideSlide>

          <SplideSlide className='banner'>
            <div className='container-projects'>
            <div className='text-projects'>
            <h1>Three.js 1</h1>
            <p>Utilizing Three.js, this prototype featured an interactive 3D eye where the iris follows the user'
              s cursor. It demonstrated advanced 3D rendering and interactive capabilities, illustrating the poten
              tial of Three.js in creating immersive and engaging web experiences</p>
            </div>
            <div className='project-video'>
            <video width="320" height="240" controls>
            <source src={Three1} type="video/mp4"></source>
            </video>
            </div>
            </div>
          </SplideSlide>

          <SplideSlide className='banner'>
            <div className='container-projects'>
            <div className='text-projects'>
            <h1>Three.js 2</h1>
            <p>This represents a simple donut shape made by paticles in three.js.
              It is fun to use as a background or to expand upon for more daring projects.
            </p>
            </div>
            <div className='project-video'>
            <video width="320" height="240" controls>
            <source src={Three2} type="video/mp4"></source>
            </video>
            </div>
            </div>
          </SplideSlide>
          
        </Splide>
        </div>
      );
    }
    
  }
  
  export default Projects;