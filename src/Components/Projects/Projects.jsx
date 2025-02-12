import React, { useState } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
    <div>
      <h1 className={styles}>Projects</h1>
      <section className={styles.container} id="projects">
        <div className={styles.projectsWrapper}>
          <button className={styles.arrowButton} onClick={handlePrev}>
            <ArrowLeft size={24} />
          </button>
          <div className={styles.projectsCarousel}>
            {projects.map((project, id) => (
              <div
                key={id}
                className={`${styles.projectCardWrapper} ${
                  id === currentIndex ? styles.active : ""
                }`}
                style={{
                  transform: `rotateY(${
                    (id - currentIndex) * 60
                  }deg) translateZ(300px)`,
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <button className={styles.arrowButton} onClick={handleNext}>
            <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
};
