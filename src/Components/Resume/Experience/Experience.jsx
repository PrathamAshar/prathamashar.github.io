import React from "react";
import styles from "./Experience.module.css";
import history from "../../../data/history.json";

export const Experience = () => {
  return (
    <div className={styles.browserWindow}>
      <div className={styles.toolbar}>
        <div className={styles.navButtons}>
          <button>◀</button>
          <button>▶</button>
          <button>⟳</button>
        </div>
        <div className={styles.addressBar}>
          <label>Address:</label>
          <input
            type="text"
            value="C:\\Users\\Pratham\\Documents\\Experience.htm"
            readOnly
          />
        </div>
      </div>

      <div className={styles.content}>
        <h1>Work Experience</h1>
        {history.map((item, i) => (
          <div key={i} className={styles.entry}>
            <h2>{item.organisation} — <span className={styles.role}>{item.role}</span></h2>
            <h4>{item.location} | {item.startDate} – {item.endDate}</h4>
            <ul>
              {item.experiences.map((line, j) => (
                <li key={j}>{line}</li>
              ))}
            </ul>
            <hr />
          </div>
        ))}
      </div>

      <div className={styles.statusBar}>
        <span>Loading page...</span>
      </div>
    </div>
  );
};

export default Experience;
