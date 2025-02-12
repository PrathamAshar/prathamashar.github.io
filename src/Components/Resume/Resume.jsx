import React from "react";
import styles from "./Resume.module.css";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";

export const Resume = () => {
  return (
    <div className={styles.container} id="resume">
      <h1>Resume</h1>
      <div className={styles.content}>
        <Education />
        <Experience />
        <Skills />
      </div>
      <div className={styles.resumeBlurTop}></div>
      <div className={styles.resumeBlurBottom}></div>
    </div>
  );
};

export default Resume;