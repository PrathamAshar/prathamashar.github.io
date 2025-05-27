import React, { useState } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.launcher}>
      <h1 className={styles.header}>Software Center - Project Carousel</h1>
      <div className={styles.carouselContainer}>
        <button className={styles.navButton} onClick={handlePrev}>
          <ArrowLeft size={24} />
        </button>
        <div className={styles.carousel}>
          {projects.map((project, index) => {
            const rotation = (index - currentIndex) * 50;
            const scale = index === currentIndex ? 1 : 0.85;
            const opacity = index === currentIndex ? 1 : 0.4;

            return (
              <div
                key={index}
                className={`${styles.projectCardWrapper} ${
                  index === currentIndex ? styles.active : ""
                }`}
                style={{
                  transform: `translate(-50%, -50%) rotateY(${(index - currentIndex) * 60}deg) translateZ(300px)`,
                  opacity,
                  zIndex: index === currentIndex ? 10 : 1,
                }}
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>
        <button className={styles.navButton} onClick={handleNext}>
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};
