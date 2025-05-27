import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import { About } from "./Components/About/About";
import { Resume } from "./Components/Resume/Resume";
import { Education } from "./Components/Resume/Education/Education";
import { Experience } from "./Components/Resume/Experience/Experience";
import { Skills } from "./Components/Resume/Skills/Skills";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import { getImageUrl } from "./utils";
import { Rnd } from "react-rnd";

function App() {
  const [booting, setBooting] = useState(true);
  const [openWindows, setOpenWindows] = useState({
    about: false,
    education: false,
    experience: false,
    skills: false,
    projects: false,
    contact: false,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBooting(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  const toggleWindow = (windowName) => {
    setOpenWindows((prev) => ({
      ...prev,
      [windowName]: !prev[windowName],
    }));
  };

  if (booting) {
    return (
      <div className={styles.bootScreen}>
        <div className={styles.bootText}>
          <img
            src={getImageUrl("boot/windowsLogo.png")}
            alt="Windows Logo"
            className={styles.bootLogo}
          />
          <p>Starting Pratham OS...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.desktop}>
      <div className={styles.iconGrid}>
        <div className={styles.icon} onClick={() => toggleWindow("about")}>
          <img src={getImageUrl("desktop/userIcon.png")}
               alt="About" />
          <span>About Me</span>
        </div>
        <div className={styles.icon} onClick={() => toggleWindow("education")}>
          <img src={getImageUrl("desktop/resumeIcon.png")}
               alt="Education" />
          <span>Education</span>
        </div>
        <div className={styles.icon} onClick={() => toggleWindow("experience")}>
          <img src={getImageUrl("desktop/resumeIcon.png")}
               alt="Experience" />
          <span>Experience</span>
        </div>
        <div className={styles.icon} onClick={() => toggleWindow("skills")}>
          <img src={getImageUrl("desktop/resumeIcon.png")}
               alt="Skills" />
          <span>Skills</span>
        </div>
        <div className={styles.icon} onClick={() => toggleWindow("projects")}>
          <img src={getImageUrl("desktop/projectsIcon.png")}
               alt="Projects" />
          <span>Projects.exe</span>
        </div>
        <div className={styles.icon} onClick={() => toggleWindow("contact")}>
          <img src={getImageUrl("desktop/contactIcon.png")}
               alt="Contact" />
          <span>Contact.lnk</span>
        </div>
      </div>

      {openWindows.about && (
        <Rnd default={{ x: 200, y: 80, width: 800, height: 500 }} bounds="window" dragHandleClassName={styles.titleBar}>
          <div className={styles.window}>
            <div className={styles.titleBar}>
              <span>About Me</span>
              <button onClick={() => toggleWindow("about")}>X</button>
            </div>
            <div className={styles.windowContent}><About /></div>
          </div>
        </Rnd>
      )}

      {openWindows.education && (
        <Rnd default={{ x: 180, y: 120, width: 700, height: 500 }} bounds="window" dragHandleClassName={styles.titleBar}>
          <div className={styles.window}>
            <div className={styles.titleBar}>
              <span>Education</span>
              <button onClick={() => toggleWindow("education")}>X</button>
            </div>
            <div className={styles.windowContent}><Education /></div>
          </div>
        </Rnd>
      )}

      {openWindows.experience && (
        <Rnd default={{ x: 220, y: 150, width: 700, height: 500 }} bounds="window" dragHandleClassName={styles.titleBar}>
          <div className={styles.window}>
            <div className={styles.titleBar}>
              <span>Experience</span>
              <button onClick={() => toggleWindow("experience")}>X</button>
            </div>
            <div className={styles.windowContent}><Experience /></div>
          </div>
        </Rnd>
      )}

      {openWindows.skills && (
        <Rnd default={{ x: 240, y: 180, width: 600, height: 400 }} bounds="window" dragHandleClassName={styles.titleBar}>
          <div className={styles.window}>
            <div className={styles.titleBar}>
              <span>Skills</span>
              <button onClick={() => toggleWindow("skills")}>X</button>
            </div>
            <div className={styles.windowContent}><Skills /></div>
          </div>
        </Rnd>
      )}

      {openWindows.projects && (
        <Rnd default={{ x: 260, y: 200, width: 800, height: 500 }} bounds="window" dragHandleClassName={styles.titleBar}>
          <div className={styles.window}>
            <div className={styles.titleBar}>
              <span>Projects.exe</span>
              <button onClick={() => toggleWindow("projects")}>X</button>
            </div>
            <div className={styles.windowContent}><Projects /></div>
          </div>
        </Rnd>
      )}

      {openWindows.contact && (
        <Rnd default={{ x: 280, y: 220, width: 500, height: 400 }} bounds="window" dragHandleClassName={styles.titleBar}>
          <div className={styles.window}>
            <div className={styles.titleBar}>
              <span>Contact</span>
              <button onClick={() => toggleWindow("contact")}>X</button>
            </div>
            <div className={styles.windowContent}><Contact /></div>
          </div>
        </Rnd>
      )}

      <div className={styles.taskbar}>
        <div className={styles.startButton}>
          <img src={getImageUrl("nav/windowsIcon.png")} alt="Start" />
          <span>Start</span>
        </div>
        <div className={styles.clock}>
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>
    </div>
  );
}

export default App;
