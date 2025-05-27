import React from "react";
import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";

export const Home = () => {
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
        <p className={styles.description}>
          Hello! I am an aspiring software engineer and AI enthusiast studying Computer Science,
          Machine Learning, and Math at the University of Maryland.
        </p>

        <div className={styles.bottomRow}>
          <img
            src={getImageUrl("home/pfp.png")}
            alt="Home Image"
            className={styles.homeImg}
          />
          <a href="#contact" className={styles.contactBtn}>
            Reach out!
          </a>
        </div>
      </div>
    </div>
  );
};