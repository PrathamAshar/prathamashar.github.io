import React from "react";
import styles from "./Experience.module.css";
import history from "../../../data/history.json";

const Experience = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sideTitle}>Experience</h2>
      <div className={styles.mainContent}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <div className={styles.historyItemContent}>
                <div className={styles.header}>
                  <h3 className={styles.company}>{historyItem.organisation}</h3>
                  <h3 className={styles.location}>{historyItem.location}</h3>
                </div>
                <div className={styles.subheader}>
                  <p className={styles.role}>{historyItem.role}</p>
                  <p className={styles.duration}>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                </div>
                <ul className={styles.experiences}>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id} className={styles.experience}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;