import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import { PROJECT_TAGS, projects } from '../utils/project-list.js';

function Projects(props) {
  const [selectedCategory, selectCategory] = useState(PROJECT_TAGS.FAVORITES);

  return (
    <article className="projects-section-container">
      <header>
        <h1 className="heading">🔨 Stuff I've Made 🔧</h1>
      </header>

      <div className="content">
        <div className="projects-container">
          <ul className="projects-container-heading">
            <li className={selectedCategory === PROJECT_TAGS.FAVORITES ? `active ${PROJECT_TAGS.FAVORITES}` : PROJECT_TAGS.FAVORITES} onClick={() => selectCategory(PROJECT_TAGS.FAVORITES)}>Favorites</li>
            <li className={selectedCategory === PROJECT_TAGS.HARDWARE ? `active ${PROJECT_TAGS.HARDWARE}` : PROJECT_TAGS.HARDWARE} onClick={() => selectCategory(PROJECT_TAGS.HARDWARE)}>Hardware</li>
            <li className={selectedCategory === PROJECT_TAGS.SOFTWARE ? `active ${PROJECT_TAGS.SOFTWARE}` : PROJECT_TAGS.SOFTWARE} onClick={() => selectCategory(PROJECT_TAGS.SOFTWARE)}>Software</li>
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