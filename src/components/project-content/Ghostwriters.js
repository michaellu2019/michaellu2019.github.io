import { React } from 'react';

function Ghostwriters(props) {
  return (
    <div className="project-content-container" id="ghostwriters-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>A democratic literature experiment built with ReactJS and Golang that allowed users to collaboratively create stories. Users would pick from a list of stories to contribute to, then write a paragraph of the story based on previous entries. They could also like other entries from other users. What resulted was a bunch of chaotic plotlines created by all my friends.</p>
        <p>The frontend was implemented in ReactJS, and the backend was built with Golang. A relational SQL database stored entries of posts and users for the website.</p>
      </div>
    </div>
  );
}

export default Ghostwriters;