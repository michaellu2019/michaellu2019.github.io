import { React, useState } from 'react';

import donkeyCard from '../assets/images/projects-donkey-card.jpg';

function Projects() {
  const [selectedCategory, selectCategory] = useState("all");

  return (
    <section className="main">
        <article className="project-section-container">
          <header>
            <h1 className="heading">Projects</h1>
          </header>

          <div className="content">
            <div className="projects-container">
              <ul className="projects-container-heading">
                <li className={selectedCategory === "all" ? "active all" : "all"} onClick={() => selectCategory("all")}>All</li>
                <li className={selectedCategory === "hardware" ? "active hardware" : "hardware"} onClick={() => selectCategory("hardware")}>Hardware</li>
                <li className={selectedCategory === "software" ? "active software" : "software"} onClick={() => selectCategory("software")}>Software</li>
              </ul>

              <div className="project-cards-container">
                
                <div className="project-card" id="donkey">
                  <div className="project-info">
                    <h2>Donkey</h2>

                    <span>Robot Donkey...</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </article>
    </section>
  );
}

export default Projects;