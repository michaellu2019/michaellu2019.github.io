import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import { PROJECT_TAGS, projects, FAVORITE_PROJECT_RANKINGS } from '../utils/project-list.js';

function Projects(props) {
  const [selectedCategory, selectCategory] = useState(PROJECT_TAGS.FAVORITES);

  const ACTIVE = "active";
  const ALL = "all";

  function sortProjects(category, p1, p2) {
    // sort projects p1 and p2 so that most recent/favorite ones are at the top
    const FIRST = 42069;

    if (category === PROJECT_TAGS.FAVORITES) {
      let projectSet = [p1, p2];
      let projectIds = [p1.id, p2.id];

      for (let i = 0; i < projectSet.length; i++) {
        // check if project is favorited. If so, bump up its id ranking.
        if (FAVORITE_PROJECT_RANKINGS.indexOf(projectSet[i].name) > -1) {
          projectIds[i] =  FIRST - FAVORITE_PROJECT_RANKINGS.indexOf(projectSet[i].name);
        }
      }

      return projectIds[1] - projectIds[0];
    } else {
      return p2.id - p1.id;
    }
  }

  return (
    <article className="projects-section-container">
      <header>
        <h1 className="heading">🔨 Stuff I've Made 🔧</h1>
      </header>

      <div className="content">
        <div className="projects-container">
          <ul className="projects-container-heading">
            <li className={selectedCategory === PROJECT_TAGS.FAVORITES ? `${ACTIVE} ${PROJECT_TAGS.FAVORITES}` : PROJECT_TAGS.FAVORITES} onClick={() => selectCategory(PROJECT_TAGS.FAVORITES)}>Favorites</li>
            <li className={selectedCategory === PROJECT_TAGS.HARDWARE ? `${ACTIVE} ${PROJECT_TAGS.HARDWARE}` : PROJECT_TAGS.HARDWARE} onClick={() => selectCategory(PROJECT_TAGS.HARDWARE)}>Hardware</li>
            <li className={selectedCategory === PROJECT_TAGS.SOFTWARE ? `${ACTIVE} ${PROJECT_TAGS.SOFTWARE}` : PROJECT_TAGS.SOFTWARE} onClick={() => selectCategory(PROJECT_TAGS.SOFTWARE)}>Software</li>
            <li className={selectedCategory === ALL ? `${ACTIVE} ${ALL}` : ALL} onClick={() => selectCategory(ALL)}>All</li>
          </ul>

          <div className="project-cards-container">
            {projects.filter(project => selectedCategory === ALL || project.tags.indexOf(selectedCategory) > -1).sort((p1, p2) => sortProjects(selectedCategory, p1, p2)).map((project => 
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