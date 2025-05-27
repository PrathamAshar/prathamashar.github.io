import React from "react";
import styles from "./Education.module.css";

const bootLogs = [
  {
    school: "University of Maryland",
    location: "College Park, MD",
    degree: "B.S. in Computer Science & Machine Learning, Minor in Mathematics",
    lines: [
      "[OK] Loaded Module: Machine Learning Research (FIRE Program)",
      "[OK] Status: Dean’s List (All Semesters)",
      "[OK] Installed: Algorithms, Data Structures, Systems",
      "[OK] Installed: Quantum Computing, Linear Algebra, JS Web Dev",
    ],
  },
  {
    school: "Edison Academy Magnet School",
    location: "Edison, NJ",
    degree: "High School Diploma in Engineering Technologies",
    lines: [
      "[OK] Achievements: AP Scholar, USACO Gold, ACSL Finalist",
      "[OK] Installed: AP CS A (5), AP Calc BC (5), AP Physics C (5)",
      "[OK] Installed: Civil & Mechanical Engineering Foundation",
    ],
  },
  {
    school: "Middlesex College",
    location: "Edison, NJ",
    degree: "Mathematics Dual Enrollment Program",
    lines: [
      "[OK] Installed: Discrete Math, Calc III, Differential Equations",
      "[OK] Optimized for Advanced Theoretical Workload",
    ],
  },
];

export const Education = () => {
  return (
    <div className={styles.terminal}>
      <div className={styles.header}>Initializing Academic Kernel...</div>
      <div className={styles.console}>
        {bootLogs.map((entry, index) => (
          <div key={index} className={styles.entry}>
            <div className={styles.schoolLine}>
              ➤ <span className={styles.school}>{entry.school}</span>{" "}
              <span className={styles.location}>({entry.location})</span>
            </div>
            <div className={styles.degree}>{entry.degree}</div>
            <div className={styles.lines}>
              {entry.lines.map((line, i) => (
                <div key={i} className={styles.logLine}>
                  {line}
                </div>
              ))}
            </div>
            <br />
          </div>
        ))}
        <div className={styles.prompt}>Academic System Ready ▋</div>
      </div>
    </div>
  );
};

export default Education;
