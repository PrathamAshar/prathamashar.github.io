import React from 'react';
import styles from './App.module.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Components/Home/Home';
import { About } from './Components/About/About';
import { Resume } from './Components/Resume/Resume';
import { Projects } from './Components/Projects/Projects';
import { Contact } from './Components/Contact/Contact';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <div id="home" className={styles.section}>
        <Home />
      </div>
      <div id="about" className={styles.section}>
        <About />
      </div>
      <div id="resume" className={styles.section}>
        <Resume />
      </div>
      <div id="projects" className={styles.section}>
        <Projects />
      </div>
      <div id="contact" className={styles.section}>
        <Contact />
      </div>
    </div>
  );
}

export default App;