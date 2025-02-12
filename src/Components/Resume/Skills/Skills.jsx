import React from "react";
import styles from "./Skills.module.css";
import { getImageUrl } from "../../../utils";
import skills from "../../../data/skills.json";

const Skills = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sideTitle}>Skills</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, id) => (
          <div key={id} className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
            <p>{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;