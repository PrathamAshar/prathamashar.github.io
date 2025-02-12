import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h1>Contact</h1>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            className={styles.icons}
            src={getImageUrl("contact/emailIcon.png")}
            alt="Email icon"
          />
          <a href="mailto:pashar@terpmail.umd.edu">Email</a>
        </li>
        <li className={styles.link}>
          <img
            className={styles.icons}
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/pratham-ashar-48699a257/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <img
            className={styles.icons}
            src={getImageUrl("contact/githubIcon.png")}
            alt="Github icon"
          />
          <a href="https://www.github.com/prathamashar" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
};