import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const aboutItems = [
    {
      title: "Frontend Developer",
      description:
        "I'm a frontend developer with experience in building responsive, eye-catching, and optimized websites.",
      icon: "about/cursor.png",
      status: "Active",
    },
    {
      title: "Data Engineer",
      description:
        "I have experience in data mining, cleaning, and transforming large datasets for downstream applications.",
      icon: "about/server.png",
      status: "Running",
    },
    {
      title: "Analyst",
      description:
        "I analyze data to extract insights, identify trends, and support business decisions through actionable recommendations.",
      icon: "about/analytics.jpg",
      status: "Running",
    },
    {
      title: "AI/ML Engineer",
      description:
        "I have worked on developing machine learning models and natural language processing applications.",
      icon: "about/gpt.png",
      status: "Experimental",
    },
        {
      title: "Researcher",
      description:
        "I conduct research to explore new technologies, validate ideas, and build prototypes.",
      icon: "about/research.jpg",
      status: "Active",
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
