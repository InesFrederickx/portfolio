import React, { Component } from 'react';
import './nav.css';
import logo from '../../assets/logo.png';

export class nav extends Component {
  render() {
    return (
        <nav className="navbar">
          <div className='container'>
            <div className="nav-links">
              <a href="#about" className='nav-item'>ABOUT</a>
              <a href="#work" className='nav-item'>WORK</a>
              <a href="#contact" className='nav-item'>CONTACT</a>
            </div>
            <img src={logo} alt="Logo" className="nav-logo" />
          </div>
      </nav>
    )
  }
}

export default nav