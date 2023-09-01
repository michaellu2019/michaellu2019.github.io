import { React, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { projects } from '../utils/project-list';

import { ReactComponent as BackArrow } from '../assets/icons/arrow.svg'

function Project(props) {

  const locationPathname = useLocation().pathname.substring(1);
  const project = projects.filter(p => p.name === locationPathname)[0];
  
  const [activeSection, selectSection] = useState(project !== null && project.sections.length > 0 ? project.sections[0] : "overview");

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  function scrollTo(section) {
    if (!document.querySelector(`.project-${section}`)) return;
    const offsetY = document.querySelector(`.project-${section}`).offsetTop - document.querySelector("header.primary").clientHeight;
    window.scroll({
      top: offsetY,
      behavior: "smooth",
    });
  }
  
  return (
    <article className={project !== null ? "project-section-container active" : "project-section-container"}>
      <aside className="project-contents">
        <Link to="/"><BackArrow className="back-arrow" /></Link>
        <ul className="project-contents-navbar">
          {project.sections.map((section) => 
            <li key={section} className={activeSection === section ? `${section}-link active` : `${section}-link`} onClick={() => { scrollTo(section); selectSection(section); }}>
              {`${section.charAt(0).toUpperCase()}${section.slice(1)}`}
            </li>
          )}
        </ul>
      </aside>
      <header>
        <h1 className="heading">{project.title}</h1>
        <h2 className="subheading">{project.date}</h2>
        <h2 className="subheading">Skills: {project.skills.join(", ")}</h2>
        {project.codeLink.length > 0 ? <h2 className="subheading">Code: <a href={project.codeLink} target="_blank">{project.codeLink}</a></h2> : ""}
        {project.demoLink.length > 0 ? <h2 className="subheading">Demo: <a href={project.demoLink} target="_blank">{project.demoLink}</a></h2> : ""}
      </header>

      <div className="content">
        {project.component(project)}
      </div>
    </article>
  );
}

export default Project;