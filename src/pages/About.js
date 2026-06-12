import React from 'react';
import './About.css';

function About() {
  const skillCategories = [
    {
      title: "Languages & Core",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js (basics)"]
    },
    {
      title: "UI/UX & Concepts",
      skills: ["HCI Fundamentals"]
    },
    {
      title: "Tools & Workflow",
      skills: ["Git & GitHub", "VS Code", "npm"]
    }
  ];

  return (
    <div className="about-page">
      <div className="about-header">
        <h2>About Me</h2>
      </div>

      <div className="about-grid">
        <section className="about-bio-card">
          <h3>Who I Am</h3>
          <p>
            I am a Software Engineering student at the Institute of Technology, University of Moratuwa. I have a deep passion for creating clean, user-friendly, and accessible interfaces that bridge the gap between design and functionality.
          </p>
          <p>
            I aim to develop websites that offer beautiful designs combined with highly intuitive user experiences.
          </p>
        </section>

        <section className="about-education-card">
          <h3>Educational Background</h3>
          <div className="timeline-item">
            <h4 className="timeline-title">National Diploma in Technology</h4>
            <p className="timeline-inst">Institute of Technology, University of Moratuwa</p>
            <p className="timeline-desc">Specializing in Software Engineering and Information Technology systems.</p>
          </div>
        </section>
      </div>

      <section className="skills-section">
        <h3>Technical Skills</h3>
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-cat-card">
              <h4>{cat.title}</h4>
              <div className="skill-badges">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="aspirations-section">
        <div className="aspiration-card">
          <h3>Career Aspirations</h3>
          <p>
            My goal is to secure a software engineering internship where I can apply my knowledge of React, responsive styling, and UI design to contribute to production projects. I am eager to learn from industry experts, expand my skills, and build robust software solutions that solve real-world problems.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;