import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const aboutItems = [
    {
      title: "Frontend Developer",
      description:
        "I build sleek, performant, and responsive websites with React and JS magic.",
      icon: "about/cursor.png",
      status: "Active",
    },
    {
      title: "Data Engineer",
      description:
        "I mine, clean, and transform data into insights that power decisions.",
      icon: "about/server.png",
      status: "Running",
    },
    {
      title: "AI/ML Engineer",
      description:
        "From NLP models to ML pipelines — I design, train, and deploy smart systems.",
      icon: "about/gpt.png",
      status: "Experimental",
    },
  ];

  return (
    <div className={styles.controlPanel}>
      <h1 className={styles.heading}>System Overview</h1>
      <div className={styles.tiles}>
        {aboutItems.map((item, index) => (
          <div className={styles.tile} key={index}>
            <div className={styles.tileHeader}>
              <img
                src={getImageUrl(item.icon)}
                alt={`${item.title} Icon`}
                className={styles.icon}
              />
              <span className={styles.title}>{item.title}</span>
              <span className={`${styles.status} ${styles[item.status.toLowerCase()]}`}>
                {item.status}
              </span>
            </div>
            <div className={styles.description}>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
