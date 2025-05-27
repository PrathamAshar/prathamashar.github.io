import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [time, setTime] = useState(new Date());

  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'about', 'resume', 'projects'];
      let currentSection = '';

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (
          section &&
          section.offsetTop <= window.scrollY + 100 &&
          section.offsetTop + section.offsetHeight > window.scrollY
        ) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.start}>
        <img src={getImageUrl('nav/windowsIcon.png')} alt="Start" />
        <span>Start</span>
      </div>

      <ul className={styles.menuItems}>
        {['home', 'about', 'resume', 'projects'].map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => handleScroll(e, id)}
              className={activeSection === id ? styles.active : ''}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.clock}>
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </nav>
  );
};

export default Navbar;
