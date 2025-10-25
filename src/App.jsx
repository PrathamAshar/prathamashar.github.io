import React, { useState, useEffect, useRef } from "react";
import styles from "./App.module.css";
import { Mail, Linkedin, Github, ExternalLink, ChevronDown, Sparkles } from "lucide-react";
import historyData from "./data/history.json";
import projectsData from "./data/projects.json";
import skillsData from "./data/skills.json";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const aboutItems = [
    {
      title: "Frontend Developer",
      description: "Building responsive, eye-catching, and optimized websites with modern frameworks.",
      icon: "💻",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      title: "Data Engineer",
      description: "Data mining, cleaning, and transforming large datasets for downstream applications.",
      icon: "🔧",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      title: "Analyst",
      description: "Extracting insights, identifying trends, and supporting business decisions.",
      icon: "📊",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      title: "AI/ML Engineer",
      description: "Developing machine learning models and natural language processing applications.",
      icon: "🤖",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      title: "Researcher",
      description: "Exploring new technologies, validating ideas, and building prototypes.",
      icon: "🔬",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
  ];

  const skillsByCategory = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleCardMouseLeave = (e) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.app}>
      {/* Custom Cursor */}
      <div
        className={styles.cursor}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
      <div
        className={styles.cursorGlow}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      {/* Floating Background Elements */}
      <div className={styles.floatingBg}>
        <div className={styles.floatingShape} style={{ top: "10%", left: "5%" }} />
        <div className={styles.floatingShape} style={{ top: "60%", right: "10%" }} />
        <div className={styles.floatingShape} style={{ bottom: "20%", left: "15%" }} />
      </div>

      {/* Navigation */}
      <nav className={styles.nav} data-testid="main-navigation">
        <div className={styles.navContent}>
          <a href="#home" className={styles.logo} data-testid="logo">
            <Sparkles size={20} /> PA
          </a>
          <ul className={styles.navLinks}>
            {["about", "experience", "skills", "projects", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                  data-testid={`nav-${section}`}
                  onMouseEnter={() => setCursorVariant("link")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={styles.hero} data-testid="hero-section">
        <div className={styles.heroContent}>
          <div className={styles.heroGlitch}>
            <h1 className={styles.heroTitle} data-testid="hero-title">
              PRATHAM ASHAR
            </h1>
            <h1 className={styles.heroTitle} data-glitch="PRATHAM ASHAR">
              PRATHAM ASHAR
            </h1>
          </div>
          <p className={styles.heroSubtitle} data-testid="hero-subtitle">
            Software Engineer & Quantum ML Researcher
          </p>
          <p className={styles.heroDescription}>
            Building the future at the intersection of <span className={styles.highlight}>AI</span>,{" "}
            <span className={styles.highlight}>quantum computing</span>, and{" "}
            <span className={styles.highlight}>web development</span>
          </p>
          <div className={styles.heroButtons}>
            <button
              className={styles.primaryButton}
              onClick={() => scrollToSection("contact")}
              data-testid="hero-contact-button"
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <span>Get in Touch</span>
              <div className={styles.buttonGlow} />
            </button>
            <button
              className={styles.secondaryButton}
              onClick={() => scrollToSection("projects")}
              data-testid="hero-projects-button"
              onMouseEnter={() => setCursorVariant("button")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              View Projects
            </button>
          </div>
          <div className={styles.heroScroll} onClick={() => scrollToSection("about")}>
            <ChevronDown className={styles.scrollIcon} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.section} data-testid="about-section">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} data-testid="about-title">
            <span className={styles.titleNumber}>01.</span> What I Do
          </h2>
          <div className={styles.aboutGrid}>
            {aboutItems.map((item, index) => (
              <div
                key={index}
                className={styles.aboutCard}
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`about-card-${index}`}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className={styles.cardGradient} style={{ background: item.gradient }} />
                <div className={styles.aboutIcon}>{item.icon}</div>
                <h3 className={styles.aboutCardTitle}>{item.title}</h3>
                <p className={styles.aboutCardDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={styles.section} data-testid="experience-section">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} data-testid="experience-title">
            <span className={styles.titleNumber}>02.</span> Experience
          </h2>
          <div className={styles.experienceGrid}>
            {historyData.map((item, index) => (
              <div
                key={index}
                className={styles.experienceCard}
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`experience-item-${index}`}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className={styles.experienceHeader}>
                  <div>
                    <h3 className={styles.experienceRole}>{item.role}</h3>
                    <p className={styles.experienceOrg}>
                      {item.organisation} • {item.location}
                    </p>
                  </div>
                  <span className={styles.experienceDate}>
                    {item.startDate} - {item.endDate}
                  </span>
                </div>
                {item.experiences.length > 0 && (
                  <ul className={styles.experienceList}>
                    {item.experiences.map((exp, expIndex) => (
                      <li key={expIndex}>{exp}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.section} data-testid="skills-section">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} data-testid="skills-title">
            <span className={styles.titleNumber}>03.</span> Skills & Technologies
          </h2>
          <div className={styles.skillsGrid}>
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
                      onMouseEnter={() => setCursorVariant("skill")}
                      onMouseLeave={() => setCursorVariant("default")}
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
      <section id="projects" className={styles.section} data-testid="projects-section">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} data-testid="projects-title">
            <span className={styles.titleNumber}>04.</span> Featured Projects
          </h2>
          <div className={styles.projectsGrid}>
            {projectsData.map((project, index) => (
              <div
                key={index}
                className={styles.projectCard}
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`project-card-${index}`}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className={styles.projectNumber}>{String(index + 1).padStart(2, '0')}</div>
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
                      onMouseEnter={() => setCursorVariant("link")}
                      onMouseLeave={() => setCursorVariant("default")}
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
                      onMouseEnter={() => setCursorVariant("link")}
                      onMouseLeave={() => setCursorVariant("default")}
                    >
                      <Github size={16} />
                      Source
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.section} data-testid="contact-section">
        <div className={styles.container}>
          <div className={styles.contactContent}>
            <h2 className={styles.sectionTitle} data-testid="contact-title">
              <span className={styles.titleNumber}>05.</span> Let's Connect
            </h2>
            <p className={styles.contactDescription}>
              I'm always open to new opportunities, collaborations, or just a friendly chat.
            </p>
            <div className={styles.contactLinks}>
              <a
                href="mailto:pashar@umd.edu"
                className={styles.contactLink}
                data-testid="contact-email"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
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
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
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
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
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
        <p>© 2025 Pratham Ashar • Crafted with code & creativity</p>
      </footer>
    </div>
  );
}

export default App;
