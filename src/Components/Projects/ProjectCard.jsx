import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.card}>
      <img
        src={getImageUrl(imageSrc)}
        alt={title}
        className={styles.preview}
      />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.skillsInline}>
        <strong>Skills:</strong>&nbsp;{skills.join(", ")}
      </div>
      <div className={styles.actions}>
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer" className={styles.button}>
            ▶ Run
          </a>
        )}
        {source && (
          <a href={source} target="_blank" rel="noreferrer" className={styles.buttonAlt}>
            📁 Source
          </a>
        )}
      </div>
    </div>
  );
};