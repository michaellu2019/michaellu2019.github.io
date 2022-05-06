import { React, useState } from 'react';

import { ReactComponent as BackArrow } from '../assets/icons/arrow.svg'

function Project(props) {
  return (
    <article className={props.selectedProject !== null ? "project-section-container active" : "project-section-container"}>
      <div>
        <BackArrow className="back-arrow" onClick={() => props.selectProject(null)} />
        <header>
          <h1 className="heading">An Project</h1>
          <h2 className="subheading">Personal Project, Jan. - Jun. 2021</h2>
          <h2 className="subheading">Tech Stack: Raspberry Pi</h2>
        </header>

        <div className="content">

        </div>
      </div>
    </article>
  );
}

export default Project;