import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <div className="home-content">
        <div className="home-page-text">
          <h1>Hello, I'm</h1>
          <h2 className="name-gradient">Naduni Vimadhya</h2>
          <p className="subtitle">
            Software Engineering student at the Institute of Technology, University of Moratuwa.
            I design and build interactive, responsive web applications with a focus on human-computer interaction and modern frontend technologies.
          </p>
          <div className="home-actions">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>
        </div>

        <div className="home-page-img-wrapper">
          <div className="home-page-img">
            <img src="/profile.jpeg" alt="Naduni Vimadhya Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;