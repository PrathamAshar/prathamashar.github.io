import React from "react";
import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pratham.</h1>
        <p className={styles.description}>
        Hello! I am an aspiring software engineer and AI enthusiast studying <br></br>Computer Science, Machine Learning and Math at the University of Maryland. {" "}
        </p>
      </div>
      <div className={styles.imageContainer}>
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
  );
};

export default Home;