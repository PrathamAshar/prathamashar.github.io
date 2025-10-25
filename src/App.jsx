import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import { Mail, Linkedin, Github, ExternalLink, Home, User, Briefcase, Code, FolderGit2, MessageCircle } from "lucide-react";
import historyData from "./data/history.json";
import projectsData from "./data/projects.json";
import skillsData from "./data/skills.json";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  const skillsByCategory = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const navigateToSection = (section) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
    }, 300);
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "contact", label: "Contact", icon: MessageCircle },
  ];

  return (
    <div className={styles.app}>
      {/* Side Navigation */}
      <nav className={styles.sidebar} data-testid="main-navigation">
        <div className={styles.sidebarHeader}>
          <h1 className={styles.sidebarLogo} data-testid="logo">PA</h1>
          <p className={styles.sidebarTagline}>Portfolio</p>
        </div>
        
        <ul className={styles.navList}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  className={`${styles.navItem} ${activeSection === item.id ? styles.navItemActive : ""}`}
                  onClick={() => navigateToSection(item.id)}
                  data-testid={`nav-${item.id}`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className={styles.sidebarFooter}>
          <p>© 2025 Pratham Ashar</p>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className={`${styles.mainContent} ${isTransitioning ? styles.transitioning : ""}`}>
        
        {/* Home Section */}
        {activeSection === "home" && (
          <div className={styles.homeSection} data-testid="hero-section">
            <div className={styles.heroLeft}>
              <div className={styles.heroTextContent}>
                <p className={styles.heroGreeting}>Hello, I'm</p>
                <h1 className={styles.heroName} data-testid="hero-title">Pratham Ashar</h1>
                <h2 className={styles.heroRole} data-testid="hero-subtitle">
                  Software Engineer &<br />Quantum ML Researcher
                </h2>
                <p className={styles.heroDescription}>
                  Passionate about building innovative solutions at the intersection of AI, quantum computing, and web development.
                </p>
                <div className={styles.heroButtons}>
                  <button
                    className={styles.primaryButton}
                    onClick={() => navigateToSection("contact")}
                    data-testid="hero-contact-button"
                  >
                    Get in Touch
                  </button>
                  <button
                    className={styles.secondaryButton}
                    onClick={() => navigateToSection("projects")}
                    data-testid="hero-projects-button"
                  >
                    View Projects
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.heroRight}>
              <div className={styles.heroGraphic}>
                <div className={styles.heroCircle}></div>
                <div className={styles.heroCircle}></div>
                <div className={styles.heroCircle}></div>
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        {activeSection === "about" && (
          <div className={styles.aboutSection} data-testid="about-section">
            <h2 className={styles.sectionTitle} data-testid="about-title">What I Do</h2>
            <div className={styles.bentoGrid}>
              {aboutItems.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.bentoCard} ${styles[`bentoCard${index + 1}`]}`}
                  data-testid={`about-card-${index}`}
                >
                  <div className={styles.bentoIcon}>{item.icon}</div>
                  <h3 className={styles.bentoTitle}>{item.title}</h3>
                  <p className={styles.bentoDescription}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeSection === "experience" && (
          <div className={styles.experienceSection} data-testid="experience-section">
            <h2 className={styles.sectionTitle} data-testid="experience-title">Experience</h2>
            <div className={styles.experienceContainer}>
              {historyData.map((item, index) => (
                <div
                  key={index}
                  className={styles.experienceCard}
                  data-testid={`experience-item-${index}`}
                >
                  <div className={styles.experienceYear}>
                    {item.startDate.split(" ")[1] || item.startDate}
                  </div>
                  <div className={styles.experienceContent}>
                    <h3 className={styles.experienceRole}>{item.role}</h3>
                    <p className={styles.experienceOrg}>
                      {item.organisation} • {item.location}
                    </p>
                    <p className={styles.experienceDuration}>
                      {item.startDate} - {item.endDate}
                    </p>
                    {item.experiences.length > 0 && (
                      <ul className={styles.experienceList}>
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
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <div className={styles.skillsSection} data-testid="skills-section">
            <h2 className={styles.sectionTitle} data-testid="skills-title">Skills & Technologies</h2>
            <div className={styles.skillsFlow}>
              {Object.entries(skillsByCategory).map(([category, skills], catIndex) => (
                <div
                  key={category}
                  className={styles.skillCategory}
                  data-testid={`skill-category-${catIndex}`}
                >
                  <h3 className={styles.skillCategoryTitle}>{category}</h3>
                  <div className={styles.skillTagsFlow}>
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
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <div className={styles.projectsSection} data-testid="projects-section">
            <h2 className={styles.sectionTitle} data-testid="projects-title">Featured Projects</h2>
            <div className={styles.masonryGrid}>
              {projectsData.map((project, index) => (
                <div
                  key={index}
                  className={`${styles.projectCard} ${index % 3 === 0 ? styles.projectCardTall : ""}`}
                  data-testid={`project-card-${index}`}
                >
                  <div className={styles.projectHeader}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                  </div>
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
              ))}
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <div className={styles.contactSection} data-testid="contact-section">
            <div className={styles.contactContainer}>
              <div className={styles.contactLeft}>
                <h2 className={styles.sectionTitle} data-testid="contact-title">Let's Connect</h2>
                <p className={styles.contactDescription}>
                  I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
                </p>
              </div>
              <div className={styles.contactRight}>
                <a
                  href="mailto:pashar@umd.edu"
                  className={styles.contactCard}
                  data-testid="contact-email"
                >
                  <Mail size={24} />
                  <div>
                    <div className={styles.contactLabel}>Email</div>
                    <div className={styles.contactValue}>pashar@umd.edu</div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/prathamashar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactCard}
                  data-testid="contact-linkedin"
                >
                  <Linkedin size={24} />
                  <div>
                    <div className={styles.contactLabel}>LinkedIn</div>
                    <div className={styles.contactValue}>@prathamashar</div>
                  </div>
                </a>
                <a
                  href="https://github.com/PrathamAshar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactCard}
                  data-testid="contact-github"
                >
                  <Github size={24} />
                  <div>
                    <div className={styles.contactLabel}>GitHub</div>
                    <div className={styles.contactValue}>@PrathamAshar</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
