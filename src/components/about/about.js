import React, { Component } from 'react'
import './about.css';

export class about extends Component {
  render() {
    return (
      <div className='section'>
      <div className='about-page'>
        <div className='title'><h2>ABOUT</h2></div>
        <div className='text'><p>Specializing in front-end development, I craft digital experiences that are not only visually 
            captivating but also intuitively accessible to users. With a focus on responsive and dynamic interfaces, I ensure 
            every interaction feels seamless, engaging, and uniquely tailored to meet users’ needs.
            </p></div>
        <div className='skills-container'>
            <div className='category'>
                <h3>DEVELOPMENT</h3>
                <div className='skills development'>
                    <span>Vue.js</span>
                    <span>React.js</span>
                    <span>Node.js</span>
                    <span>Kotlin</span>
                    <span>Tailwind</span>
                    <span>C#</span>
                    <span>MySQL</span>
                    <span>NoSQL</span>
                    <span>JavaScript</span>
                    <span>CSS</span>
                    <span>Unity</span>
                </div>
            </div>
            <div className='category'>
                <h3>DESIGN</h3>
                <div className='skills design'>
                    <span>Adobe XD</span>
                    <span>Illustrator</span>
                    <span>Photoshop</span>
                    <span>InDesign</span>
                    <span>Figma</span>
                    <span>Maya</span>
                </div>
            </div>
        </div>
      </div>
      </div>
    )
  }
}

export default about