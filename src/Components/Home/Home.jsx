import React from "react";
import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";

export const Home = ({ onContactClick }) => {
  return (
    <div className={styles.window}>
      <div className={styles.titleBar}>
        <span className={styles.titleText}>Hi, I'm Pratham.</span>
        <div className={styles.windowButtons}>
          <button className={styles.btn}>–</button>
          <button className={styles.btn}>□</button>
          <button className={styles.btn}>×</button>
        </div>
      </div>

      <div className={styles.windowContent}>
        <img
          src={getImageUrl("home/pfp.png")}
          alt="Profile"
          className={styles.homeImg}
        />
        <div className={styles.textBlock}>
          <p className={styles.description}>
            Hello! I'm an aspiring software engineer and ML enthusiast studying
            Computer Science, Math, and Machine Learning at the University of
            Maryland.  I'm passionate about leveraging data-driven methods to power fast, efficient decision-making.


          </p>
          <button
            className={styles.contactBtn}
            onClick={onContactClick}
            type="button"
          >
            Reach out!
          </button>
        </div>
      </div>
    </div>
  );
};
