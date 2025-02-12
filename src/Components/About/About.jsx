import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h1>About</h1>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursor.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive, eye-catching,
                and optimized websites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/server.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Engineer</h3>
              <p>
                I have experience in data mining, cleaning, and analyzing to extract insights and drive business decisions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/gpt.png")} alt="AI icon" />
            <div className={styles.aboutItemText}>
              <h3>AI/ML Engineer</h3>
              <p>
                I have worked on developing machine learning models and natural language processing applications.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};