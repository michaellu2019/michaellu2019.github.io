import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import { ProjectTags, projects } from '../utils/project-list.js';

function Projects(props) {
  const [selectedCategory, selectCategory] = useState(ProjectTags.FEATURED);

  return (
    <article className="projects-section-container">
      <header>
        <h1 className="heading">🔨 Stuff I've Made 🔧</h1>
      </header>

      <div className="content">
        <div className="projects-container">
          <ul className="projects-container-heading">
            <li className={selectedCategory === ProjectTags.FEATURED ? `active ${ProjectTags.FEATURED}` : ProjectTags.FEATURED} onClick={() => selectCategory(ProjectTags.FEATURED)}>Featured</li>
            <li className={selectedCategory === ProjectTags.HARDWARE ? `active ${ProjectTags.HARDWARE}` : ProjectTags.HARDWARE} onClick={() => selectCategory(ProjectTags.HARDWARE)}>Hardware</li>
            <li className={selectedCategory === ProjectTags.SOFTWARE ? `active ${ProjectTags.SOFTWARE}` : ProjectTags.SOFTWARE} onClick={() => selectCategory(ProjectTags.SOFTWARE)}>Software</li>
            <li className={selectedCategory === "all" ? "active all" : "all"} onClick={() => selectCategory("all")}>All</li>
          </ul>

          <div className="project-cards-container">
            {projects.filter(project => selectedCategory === "all" || project.tags.indexOf(selectedCategory) > -1).map((project => 
              <Link to={`/${project.name}`} className="project-card" id={project.name} key={project.name} >
                <div className="project-card-info">
                  <h2>{project.title}</h2>

                  <div>{project.description}</div>
                  <br />
                  <div>Click to learn more...</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default Projects;