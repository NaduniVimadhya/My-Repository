import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header className="site-header">
          <div className="header-container">
            <nav className="nav-links">
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About Me</NavLink>
              <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
            </nav>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <div className="footer-container">
            <p>&copy; {new Date().getFullYear()} Naduni Vimadhya. All rights reserved.</p>
            <div className="footer-links">
              <a href="https://github.com/NaduniVimadhya" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/naduni-vimadhya-81a0a4360" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;