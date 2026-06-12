import React from 'react';
import './Projects.css';

function Projects() {
  const projectsData = [
    {
      title: "Charitap",
      img: "/Charitap.jpeg",
      desc: "A donation and community-support web application designed to connect people in need with donors. Built with a focus on making charitable giving easier, transparent, and impactful through a smart digital experience.",
      techs: ["PHP", "MySQL", "Vanilla CSS", "Web Architecture"],
      github: "https://github.com/NaduniVimadhya/Charitap"
    },
    {
      title: "Hospital Management System",
      img: "/Hospital_Management.jpeg",
      desc: "A complete backend corporate web service engineered to handle clinical scheduling, medical records management, and real-time appointment booking workflows.",
      techs: ["Java", "Spring Boot", "Spring Data JPA", "MySQL"],
      github: "https://github.com/NaduniVimadhya/Hospital_Appointment_System"
    },
    {
      title: "Task Manager App",
      img: "/Task_Manager.png",
      desc: "A dynamic task manager application featuring real-time task editing, persistence via Web LocalStorage, and interactive toast feedback.",
      techs: ["React.js", "CSS Grid", "LocalStorage", "Web Hooks"],
      github: "https://github.com/NaduniVimadhya"
    }
  ];

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h2>My Projects</h2>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <div key={idx} className="project-card">
            {project.img && (
              <div className="project-card-image">
                <img src={process.env.PUBLIC_URL + project.img} alt={project.title} />
              </div>
            )}
            <div className="project-card-header">
              <div className="project-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <a href={project.github} className="github-icon-link" target="_blank" rel="noreferrer" title="View Code">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
            <div className="project-card-footer">
              <div className="project-tech-badges">
                {project.techs.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-badge">{tech}</span>
                ))}
              </div>
              <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
                View Project <span>&rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;