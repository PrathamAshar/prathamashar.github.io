import React from "react";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sideTitle}>Education</h2>
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.educationItem}>
            <div className={styles.header}>
              <div>
                <h4 className={styles.institution}>University of Maryland</h4>
              </div>
              <div className={styles.location}>College Park, MD</div>
            </div>

            <p className={styles.major}>B.S. in Computer Science & Machine Learning, Minor in Mathematics</p>

            <ul className={styles.achievements}>
              <li>• Accepted into the UMD FIRE Machine Learning research program, earned an A every semester</li>
              <li>• Granted Academic Honors, Dean’s list every semester</li>
            </ul>

            <div className={styles.coursework}>
              <h5>Select Coursework:</h5>
              <p>
                Algorithms, Data Structures, Number Theory, Computer Systems, Organization of Programming Languages,
                Discrete Math, Linear Algebra, Object Oriented Programming, Quantum Computing, Web Development in JavaScript
              </p>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.educationItem}>
            <div className={styles.header}>
              <div>
                <h4 className={styles.institution}>Edison Academy Magnet School</h4>
              </div>
              <div className={styles.location}>Edison, NJ</div>
            </div>

            <p className={styles.major}>High School Diploma in Engineering Technologies</p>

            <ul className={styles.achievements}>
              <li>• AP Scholar with Distinction, National Merit Commended Scholar</li>
              <li>• USACO Gold Division, American Computer Science League Finalist</li>
            </ul>

            <div className={styles.coursework}>
              <h5>Select Coursework:</h5>
              <p> AP Computer Science A (5), AP Calculus BC (5), AP Statistics (5), AP Physics C (5), Quantum Computing, Python Fundamentals, Civil/Mechanical Engineering
              </p>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.educationItem}>
            <div className={styles.header}>
              <div>
                <h4 className={styles.institution}>Middlesex College</h4>
              </div>
              <div className={styles.location}>Edison, NJ</div>
            </div>

            <p className={styles.major}>Mathematics Dual Enrollment with High School</p>

            <div className={styles.coursework}>
              <h5>Select Coursework:</h5>
              <p>Linear Algebra, Discrete Math, Analytic Geometry & Calculus III, Differential Equations, Precalculus
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;