import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/nav/nav.js';
import Home from './components/home/home.js';
import About from './components/about/about.js';
import Projects from './components/projects/projects.js';
import Contact from './components/contact/contact.js';
import ReactFullpage from '@fullpage/react-fullpage';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'about', 'projects', 'contact'];
    const currentScrollPosition = window.pageYOffset;

    for (const section of sections) {
      const el = document.getElementById(section);
      if (el.offsetTop <= currentScrollPosition + 200 && // Adjust 200 based on your header height
          el.offsetTop + el.offsetHeight > currentScrollPosition + 200) {
        setActiveSection(section);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Nav activeSection={activeSection} />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
