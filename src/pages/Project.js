import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { projects } from '../utils/project-list';

import { ReactComponent as BackArrow } from '../assets/icons/arrow.svg'

function Project(props) {
  const locationPathname = useLocation().pathname.substring(1);
  const project = projects.filter(p => p.name == locationPathname)[0];
  console.log(locationPathname, project);
  return (
    <article className={project !== null ? "project-section-container active" : "project-section-container"}>
      <div>
        <Link to="/"><BackArrow className="back-arrow" /></Link>
        <header>
          <h1 className="heading">{project.title}</h1>
          <h2 className="subheading">{project.date}</h2>
          <h2 className="subheading">Skills: {project.skills.join(", ")}</h2>
        </header>

        <div className="content">
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
          i <br/>
        </div>
      </div>
    </article>
  );
}

export default Project;