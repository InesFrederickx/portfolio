import React, { Component } from 'react';
import './contact.css';
import IconLinkedIn from '../../assets/iconmonstr-linkedin-3.svg';
import IconEmail from '../../assets/iconmonstr-email-12.svg';
import IconGitHub from '../../assets/iconmonstr-github-3.svg';

export class contact extends Component {
  render() {
    return (
      <div className='section'>
      <div className='contact-page'>
        <div className='title'><h2>CONTACT</h2></div>
        <div className='socials'>
            <a href='https://www.linkedin.com/in/ines-frederickx-65655523a/' target='blank' rel='noopener noreferrer' className='logo'>
                <img src={IconLinkedIn} alt="LinkedIn" />
            </a>
            <a href='mailto:ines.frederickx@hotmail.com' className='logo'>
                <img src={IconEmail} alt="Email" />
            </a>
            <a href='https://github.com/InesFrederickx' target='blank' rel='noopener noreferrer' className='logo'>
                <img src={IconGitHub} alt="GitHub" />
            </a>
        </div>
      </div>
      </div>
    )
  }
}

export default contact