import React from "react";
import styles from "./Resume.module.css";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";

export const Resume = () => {
  return (
    <div className={styles.window}>
      <div className={styles.titleBar}>
        <span className={styles.titleText}>My Documents - Resume</span>
        <div className={styles.windowButtons}>
          <button className={styles.btn}>–</button>
          <button className={styles.btn}>□</button>
          <button className={styles.btn}>×</button>
        </div>
      </div>

      <div className={styles.contentArea}>
        <Education />
        <Experience />
        <Skills />
      </div>
    </div>
  );
};

export default Resume;
