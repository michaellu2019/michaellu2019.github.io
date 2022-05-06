import { React, useState } from 'react';

import './styles/styles.scss';

import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Cover from './pages/Cover.js';
import Projects from './pages/Projects.js';
import Project from './pages/Project.js';
import Work from './pages/Work.js';

function App() {
  const [selectedProject, selectProject] = useState(null);

  return (
    <div className="wrapper">
      <main className="primary">
        <Cover />
        <Projects selectProject={selectProject} />
        <Project selectedProject={selectedProject} selectProject={selectProject}/>
        <Work />
      </main>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;