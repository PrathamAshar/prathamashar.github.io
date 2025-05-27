import React from "react";
import styles from "./Experience.module.css";
import history from "../../../data/history.json";

export const Experience = () => {
  return (
    <div className={styles.taskManager}>
      <h1 className={styles.header}>Task Manager - Running Experience</h1>
      <div className={styles.tableHeader}>
        <span>Process</span>
        <span>Role</span>
        <span>Runtime</span>
        <span>CPU</span>
        <span>Threads</span>
      </div>

      <div className={styles.rows}>
        {history.map((job, index) => (
          <div key={index} className={styles.row}>
            <span className={styles.process}>{job.organisation}</span>
            <span className={styles.role}>{job.role}</span>
            <span className={styles.duration}>
              {job.startDate} – {job.endDate}
            </span>
            <span className={styles.cpu}>
              {(Math.random() * 30 + 5).toFixed(1)}%
            </span>
            <span className={styles.threads}>
              {job.experiences.length + Math.floor(Math.random() * 3)}
            </span>

            <ul className={styles.log}>
              {job.experiences.map((item, i) => (
                <li key={i} className={styles.logItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
