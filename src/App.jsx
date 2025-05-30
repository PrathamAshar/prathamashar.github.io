import React, { useState, useEffect, useRef } from "react";
import styles from "./App.module.css";
import { About } from "./Components/About/About";
import { Resume } from "./Components/Resume/Resume";
import { Education } from "./Components/Resume/Education/Education";
import { Experience } from "./Components/Resume/Experience/Experience";
import { Skills } from "./Components/Resume/Skills/Skills";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import { Home } from "./Components/Home/Home";
import { WinPlayer } from "./Components/WinPlayer/WinPlayer";
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
    snake: false
  });

  // Add state for Home and WinPlayer visibility
  const [showHome, setShowHome] = useState(true);
  const [showWinPlayer, setShowWinPlayer] = useState(true);

  const windowSizes = {
    about: { width: 900, height: 550, y: 80 },
    education: { width: 800, height: 550, y: 120 },
    experience: { width: 800, height: 550, y: 150 },
    skills: { width: 700, height: 450, y: 180 },
    projects: { width: 950, height: 600, y: 200 },
    contact: { width: 600, height: 450, y: 220 },
    snake: { width: 635, height: 610, y: 250 }
  };

  // Helper to center window horizontally
  const getCenteredDefault = (key) => {
    const { width, height, y } = windowSizes[key];
    const x =
      typeof window !== "undefined"
        ? Math.max(0, (window.innerWidth - width) / 2)
        : 100;
    return { x, y, width, height };
  };

  // Clock state and effect
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
  useEffect(() => {
    const timeout = setTimeout(() => {
      setBooting(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Focus snake iframe when opened
  const snakeIframeRef = useRef(null);
  useEffect(() => {
    if (openWindows.snake && snakeIframeRef.current) {
      snakeIframeRef.current.focus();
    }
  }, [openWindows.snake]);

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
            src={getImageUrl("boot.png")}
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
      {showHome && (
        <Home
          onContactClick={() => toggleWindow("contact")}
          onClose={() => setShowHome(false)}
        />
      )}
      <div className={styles.iconGrid}>
        <div className={styles.icon} onClick={() => toggleWindow("about")}>
          <img src={getImageUrl("about/about.png")} alt="About" />
          <span>About Me</span>
        </div>
        <div className={styles.icon} onClick={() => toggleWindow("education")}>
          <img src={getImageUrl("education/education.png")} alt="Education" />
          <span>Education</span>
        </div>
        <div className={styles.icon} onClick={() => toggleWindow("experience")}>
          <img
            src={getImageUrl("experience/experience.png")}
            alt="Experience"
          />
          <span>Experience</span>
        </div>
        <div className={styles.icon} onClick={() => toggleWindow("skills")}>
          <img src={getImageUrl("skills/skills.png")} alt="Skills" />
          <span>Skills</span>
        </div>
        <div className={styles.icon} onClick={() => toggleWindow("projects")}>
          <img src={getImageUrl("projects/projects.png")} alt="Projects" />
          <span>Projects</span>
        </div>
        <div className={styles.icon} onClick={() => toggleWindow("contact")}>
          <img src={getImageUrl("contact/contact.png")} alt="Contact" />
          <span>Contact</span>
        </div>
        <div className={styles.icon} onClick={() => toggleWindow("snake")}>
          <img src={getImageUrl("snake/snake.png")} alt="Snake" />
          <span>Snake</span>
        </div>
      </div>

      {openWindows.about && (
        <Rnd
          default={getCenteredDefault("about")}
          bounds="window"
          dragHandleClassName={styles.titleBar}
        >
          <div className={styles.window}>
            <div className={styles.titleBar}>
              <span>About Me</span>
              <button onClick={() => toggleWindow("about")}>X</button>
            </div>
            <div className={styles.windowContent}>
              <About />
            </div>
          </div>
        </Rnd>
      )}

      {openWindows.education && (
        <Rnd
          default={getCenteredDefault("education")}
          bounds="window"
          dragHandleClassName={styles.titleBar}
        >
          <div className={styles.window}>
            <div className={styles.titleBar}>
              <span>Education</span>
              <button onClick={() => toggleWindow("education")}>X</button>
            </div>
            <div className={styles.windowContent}>
              <Education />
            </div>
          </div>
        </Rnd>
      )}

      {openWindows.experience && (
        <Rnd
          default={getCenteredDefault("experience")}
          bounds="window"
          dragHandleClassName={styles.titleBar}
        >
          <div className={styles.window}>
            <div className={styles.titleBar}>
              <span>Experience</span>
              <button onClick={() => toggleWindow("experience")}>X</button>
            </div>
            <div className={styles.windowContent}>
              <Experience />
            </div>
          </div>
        </Rnd>
      )}

      {openWindows.skills && (
        <Rnd
          default={getCenteredDefault("skills")}
          bounds="window"
          dragHandleClassName={styles.titleBar}
        >
          <div className={styles.window}>
            <div className={styles.titleBar}>
              <span>Skills</span>
              <button onClick={() => toggleWindow("skills")}>X</button>
            </div>
            <div className={styles.windowContent}>
              <Skills />
            </div>
          </div>
        </Rnd>
      )}

      {openWindows.projects && (
        <Rnd
          default={getCenteredDefault("projects")}
          bounds="window"
          dragHandleClassName={styles.titleBar}
        >
          <div className={styles.window}>
            <div className={styles.titleBar}>
              <span>Projects.exe</span>
              <button onClick={() => toggleWindow("projects")}>X</button>
            </div>
            <div className={styles.windowContent}>
              <Projects />
            </div>
          </div>
        </Rnd>
      )}

      {openWindows.contact && (
        <Rnd
          default={getCenteredDefault("contact")}
          bounds="window"
          dragHandleClassName={styles.titleBar}
        >
          <div className={styles.window}>
            <div className={styles.titleBar}>
              <span>Contact</span>
              <button onClick={() => toggleWindow("contact")}>X</button>
            </div>
            <div className={styles.windowContent}>
              <Contact />
            </div>
          </div>
        </Rnd>
      )}

      {openWindows.snake && (
        <Rnd
          default={getCenteredDefault("snake")}
          bounds="window"
          dragHandleClassName={styles.titleBar}
        >
          <div className={styles.window}>
            <div className={styles.titleBar}>
              <span>Snake.exe</span>
              <button onClick={() => toggleWindow("snake")}>X</button>
            </div>
            <div className={styles.windowContent}>
              <iframe
                ref={snakeIframeRef}
                src="https://solitaires-online.com/snake/#id=45d82vu2vz,no-article,no-nav,no-ads,no-feedback"
                title="Snake game"
                width="600"
                height="532"
                tabIndex={0}
                style={{ border: "none" }}
              ></iframe>
            </div>
          </div>
        </Rnd>
      )}

      {showWinPlayer && (
        <WinPlayer onClose={() => setShowWinPlayer(false)} />
      )}

      <div className={styles.taskbar}>
        <div
          className={styles.startButton}
          onClick={() => {
            setShowHome(true);
            setShowWinPlayer(true);
          }}
          style={{ cursor: "pointer" }}
        >
          <img src={getImageUrl("start.jpg")} alt="Start" />
        </div>
        <div className={styles.clock}>{time}</div>
      </div>
    </div>
  );
}

export default App;