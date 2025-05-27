import React from "react";
import styles from "./Skills.module.css";
import { getImageUrl } from "../../../utils";
import skills from "../../../data/skills.json";

export const Skills = () => {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <div className={styles.manager}>
      <h1 className={styles.heading}>Device Manager - Skills Registry</h1>
      <div className={styles.driverList}>
        {categories.map((category, i) => (
          <div key={i} className={styles.categoryBlock}>
            <h2 className={styles.category}>{category}</h2>
            <div className={styles.grid}>
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <div key={index} className={styles.driverCard}>
                    <img
                      src={getImageUrl(skill.imageSrc)}
                      alt={skill.title}
                      className={styles.icon}
                    />
                    <div className={styles.info}>
                      <strong>{skill.title}</strong>
                      <span className={styles.version}>v{skill.version}</span>
                      <span className={`${styles.status} ${styles[skill.status.toLowerCase()]}`}>
                        {skill.status}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
