import { React, useState } from 'react';

import { projects } from '../utils/project-list.js';

function Projects(props) {
  const [selectedCategory, selectCategory] = useState("featured");

  return (
    <article className="projects-section-container">
      <header>
        <h1 className="heading">Projects</h1>
      </header>

      <div className="content">
        <div className="projects-container">
          <ul className="projects-container-heading">
            <li className={selectedCategory === "featured" ? "active featured" : "featured"} onClick={() => selectCategory("featured")}>Featured</li>
            <li className={selectedCategory === "hardware" ? "active hardware" : "hardware"} onClick={() => selectCategory("hardware")}>Hardware</li>
            <li className={selectedCategory === "software" ? "active software" : "software"} onClick={() => selectCategory("software")}>Software</li>
            <li className={selectedCategory === "all" ? "active all" : "all"} onClick={() => selectCategory("all")}>All</li>
          </ul>

          <div className="project-cards-container">
            {projects.filter(project => selectedCategory === "all" || project.tags.indexOf(selectedCategory) > -1).map((project => 
              <div className="project-card" id={project.name} key={project.name} onClick={() => props.selectProject(project)}>
                <div className="project-card-info">
                  <h2>{project.title}</h2>

                  <div>{project.description}</div>
                  <br />
                  <div>Click to learn more...</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default Projects;