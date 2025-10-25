import React, { useState, useEffect, useRef } from "react";
import styles from "./App.module.css";
import { Mail, Linkedin, Github, ExternalLink, ChevronDown } from "lucide-react";
import historyData from "./data/history.json";
import projectsData from "./data/projects.json";
import skillsData from "./data/skills.json";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observerRef.current.observe(section));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const aboutItems = [
    {
      title: "Frontend Developer",
      description: "Building responsive, eye-catching, and optimized websites with modern frameworks.",
      icon: "💻",
    },
    {
      title: "Data Engineer",
      description: "Data mining, cleaning, and transforming large datasets for downstream applications.",
      icon: "🔧",
    },
    {
      title: "Analyst",
      description: "Extracting insights, identifying trends, and supporting business decisions.",
      icon: "📊",
    },
    {
      title: "AI/ML Engineer",
      description: "Developing machine learning models and natural language processing applications.",
      icon: "🤖",
    },
    {
      title: "Researcher",
      description: "Exploring new technologies, validating ideas, and building prototypes.",
      icon: "🔬",
    },
  ];

  // Group skills by category
  const skillsByCategory = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className={styles.app}>
      {/* Navigation */}
      <nav className={styles.nav} data-testid="main-navigation">
        <div className={styles.navContent}>
          <a href="#home" className={styles.logo} data-testid="logo">
            PA
          </a>
          <ul className={styles.navLinks}>
            {["about", "experience", "skills", "projects", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={activeSection === section ? styles.active : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                  data-testid={`nav-${section}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`${styles.hero} ${styles.section}`} data-testid="hero-section">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle} data-testid="hero-title">
              Hi, I'm <span className={styles.gradient}>Pratham Ashar</span>
            </h1>
            <p className={styles.heroSubtitle} data-testid="hero-subtitle">
              Software Engineer & Quantum ML Researcher
            </p>
            <p className={styles.heroDescription}>
              Passionate about building innovative solutions at the intersection of AI, quantum computing, and web development.
            </p>
            <div className={styles.heroButtons}>
              <button
                className={styles.primaryButton}
                onClick={() => scrollToSection("contact")}
                data-testid="hero-contact-button"
              >
                Get in Touch
              </button>
              <button
                className={styles.secondaryButton}
                onClick={() => scrollToSection("projects")}
                data-testid="hero-projects-button"
              >
                View Projects
              </button>
            </div>
          </div>
          <div className={styles.heroScroll} onClick={() => scrollToSection("about")}>
            <ChevronDown className={styles.scrollIcon} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`${styles.section} ${isVisible.about ? styles.visible : ""}`}
        data-testid="about-section"
      >
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} data-testid="about-title">What I Do</h2>
          <div className={styles.aboutGrid}>
            {aboutItems.map((item, index) => (
              <div
                key={index}
                className={styles.aboutCard}
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`about-card-${index}`}
              >
                <div className={styles.aboutIcon}>{item.icon}</div>
                <h3 className={styles.aboutCardTitle}>{item.title}</h3>
                <p className={styles.aboutCardDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`${styles.section} ${styles.altSection} ${isVisible.experience ? styles.visible : ""}`}
        data-testid="experience-section"
      >
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} data-testid="experience-title">Experience</h2>
          <div className={styles.timeline}>
            {historyData.map((item, index) => (
              <div
                key={index}
                className={styles.timelineItem}
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`experience-item-${index}`}
              >
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <h3 className={styles.timelineRole}>{item.role}</h3>
                    <span className={styles.timelineDate}>
                      {item.startDate} - {item.endDate}
                    </span>
                  </div>
                  <p className={styles.timelineOrg}>
                    {item.organisation} • {item.location}
                  </p>
                  {item.experiences.length > 0 && (
                    <ul className={styles.timelineExperiences}>
                      {item.experiences.map((exp, expIndex) => (
                        <li key={expIndex}>{exp}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`${styles.section} ${isVisible.skills ? styles.visible : ""}`}
        data-testid="skills-section"
      >
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} data-testid="skills-title">Skills & Technologies</h2>
          <div className={styles.skillsContainer}>
            {Object.entries(skillsByCategory).map(([category, skills], catIndex) => (
              <div
                key={category}
                className={styles.skillCategory}
                style={{ animationDelay: `${catIndex * 0.1}s` }}
                data-testid={`skill-category-${catIndex}`}
              >
                <h3 className={styles.skillCategoryTitle}>{category}</h3>
                <div className={styles.skillTags}>
                  {skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={styles.skillTag}
                      data-testid={`skill-${skill.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      {skill.title}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`${styles.section} ${styles.altSection} ${isVisible.projects ? styles.visible : ""}`}
        data-testid="projects-section"
      >
        <div className={styles.container}>
          <h2 className={styles.sectionTitle" data-testid="projects-title">Featured Projects</h2>
          <div className={styles.projectsGrid}>
            {projectsData.map((project, index) => (
              <div
                key={index}
                className={styles.projectCard}
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`project-card-${index}`}
              >
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectSkills}>
                    {project.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className={styles.projectSkill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className={styles.projectLinks}>
                    {project.demo && (
                      <a
                        href={project.demo.startsWith("http") ? project.demo : `https://${project.demo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                        data-testid={`project-demo-${index}`}
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}
                    {project.source && (
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                        data-testid={`project-source-${index}`}
                      >
                        <Github size={16} />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`${styles.section} ${isVisible.contact ? styles.visible : ""}`}
        data-testid="contact-section"
      >
        <div className={styles.container}>
          <div className={styles.contactContent}>
            <h2 className={styles.sectionTitle} data-testid="contact-title">Let's Connect</h2>
            <p className={styles.contactDescription}>
              I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
            </p>
            <div className={styles.contactLinks}>
              <a
                href="mailto:pashar@umd.edu"
                className={styles.contactLink}
                data-testid="contact-email"
              >
                <Mail size={24} />
                <span>pashar@umd.edu</span>
              </a>
              <a
                href="https://www.linkedin.com/in/prathamashar"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
                data-testid="contact-linkedin"
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/PrathamAshar"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
                data-testid="contact-github"
              >
                <Github size={24} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer} data-testid="footer">
        <p>© 2025 Pratham Ashar. Designed with passion and precision.</p>
      </footer>
    </div>
  );
}

export default App;
