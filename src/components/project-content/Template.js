import { React } from 'react';

function Template(props) {
  return (
    <div className="project-content-container" id="template-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>Overview Text</p>
        <img src={null} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <img src={null} />
        <p>Ideation text</p>
        
        <div className="image-next-to-container">
          <div className="image-container"><img src={null} /></div>
          <div>
            <p>text</p>
          </div>
        </div>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>Design text</p>
        <img src={null} />
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>Fabrication text.</p>
        <img src={null} />
        <p>
          Hardware:
          <ul>
            <li>Clonk</li>
            <li>Clunk</li>
          </ul>  

          Electronics:
          <ul>
            <li>Beep</li>
            <li>Boop</li>
          </ul>  
        </p>
      </div>
      
      <div className="project-content-container-section project-programming">
        <h1>Programming</h1>
        {/* <iframe src="#" title="DIY Quadruped Robot" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
        <p>Programming text.</p>    
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>Results text.</p>
        {/* <iframe src="#" title="#" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <p>Be better:</p>
        <ul>
          <li>Improvement</li>
          <li>Improvement</li>
          <li>Improvement</li>
        </ul>
      </div>
    </div>
  );
}

export default Template;