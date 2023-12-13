import React, { Component } from 'react';
import './nav.css';
import logo from '../../assets/logo.png';

export class nav extends Component {
  render() {
    return (
        <nav className="navbar">
        <div className="nav-links">
          <a href="#about" className='nav-item'>About</a>
          <a href="#work" className='nav-item'>Work</a>
          <a href="#contact" className='nav-item'>Contact</a>
        </div>
        <img src={logo} alt="Logo" className="nav-logo" />
      </nav>
    )
  }
}

export default nav