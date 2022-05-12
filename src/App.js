import { React, useState } from 'react';

import './styles/styles.scss';

import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Cover from './pages/Cover.js';
import Projects from './pages/Projects.js';
import Project from './pages/Project.js';
import Work from './pages/Work.js';
import About from './pages/About.js';

function App() {
  const [selectedProject, selectProject] = useState(null);

  function scrollTo(section) {
    const offsetY = document.querySelector(`.${section}-section-container`).offsetTop - document.querySelector("header.primary").clientHeight;
    window.scroll({
      top: offsetY,
      behavior: "smooth",
    });
  }

  return (
    <div className="wrapper">
      <main className="primary">
        <Cover scrollTo={scrollTo} />
        <Projects selectProject={selectProject} />
        <Project selectedProject={selectedProject} selectProject={selectProject}/>
        <Work />
        <About />
      </main>
      <Navbar scrollTo={scrollTo} />
      <Footer />
    </div>
  );
}

export default App;