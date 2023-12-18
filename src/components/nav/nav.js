import React, { Component } from 'react';
import './nav.css';
import logo from '../../assets/logo.png';

export class Nav extends Component {
  render() {
    const { activeSection } = this.props;
    return (
      <nav className="navbar">
        <div className='container'>
          <div className="nav-links">
            <a href="#about" className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}>ABOUT</a>
            <a href="#projects" className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}>PROJECTS</a>
            <a href="#contact" className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>CONTACT</a>
          </div>
          <a href="#">
            <img src={logo} alt="Logo" className="nav-logo" />
          </a>
        </div>
      </nav>
    )
  }
}

export default Nav;
