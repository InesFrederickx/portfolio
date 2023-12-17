import React, { Component } from 'react';
import './projects.css';
import Video1 from '../../assets/2023-12-17 15-33-56.mp4'

const projectsData = [
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
];

export class Projects extends Component {
  showVideo = (index) => {
    const projectSection = document.getElementById(`project-section-${index}`);
    const videoElement = document.getElementById(`video-${index}`);
    
    if (videoElement.style.display === 'none' || videoElement.style.display === '') {
      videoElement.style.display = 'flex'; // Show the video
      projectSection.style.flexDirection = 'row'; // Change layout to row to bring video into view
    } else {
      videoElement.style.display = 'none'; // Hide the video
      projectSection.style.flexDirection = 'column'; // Revert layout back to column
    }
  };
  
    scrollToInfo = (index) => {
      const infoElement = document.getElementById(`info-${index}`);
      infoElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };
  
    render() {
      return (
        <div className='section'>
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <div className="project-section" key={index}>
               <div className="title"><h2>PROJECTS</h2></div>
              <div className="project-content">
                <div className="project-info">
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                </div>
                {project.videoUrl && (
                  <div className="project-video">
                    <video controls src={project.videoUrl} width="100%" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        </div>
      );
    }
    
  }
  
  export default Projects;