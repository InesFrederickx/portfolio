import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './nav.css';
import logo from '../../assets/logo.png';

export class Nav extends Component {
  render() {
    const { activeSection } = this.props;
    return (
      <nav className="navbar">
        <div className='container'>
          <div className="nav-links">
            <Link to="about" className={`nav-item ${activeSection === 'about' ? 'active' : ''}`} smooth={true} duration={500}>ABOUT</Link>
            <Link to="projects" className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`} smooth={true} duration={500}>PROJECTS</Link>
            <Link to="contact" className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`} smooth={true} duration={500}>CONTACT</Link>
          </div>
          <Link to="home" classID='nav-logo-link'>
            <img src={logo} alt="Logo" className="nav-logo" />
          </Link>
        </div>
      </nav>
    )
  }
}

export default Nav;
