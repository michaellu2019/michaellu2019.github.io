import { React } from 'react';

function Can(props) {
  return (
    <div className="project-content-container" id="can-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>Overview Text</p>
        <img alt="" src={null} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <img alt="" src={null} />
        <p>Ideation text</p>
        
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={null} /></div>
          <div>
            <p>text</p>
          </div>
        </div>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>Design text</p>
        <img alt="" src={null} />
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>Fabrication text.</p>
        <img alt="" src={null} />
        <p>Hardware:</p>
        <ul>
          <li>1 × Clonk</li>
          <li>1 × Clunk</li>
        </ul>  

        <p>Electronics:</p>
        <ul>
          <li>1 × Beep</li>
          <li>1 × Boop</li>
        </ul>  
      </div>
      
      <div className="project-content-container-section project-programming">
        <h1>Programming</h1>
        <p>Programming text.</p>   
        <img alt="" src={null} /> 
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>Results text.</p>
        {/* <iframe src="#" title="#" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <ul>
          <li>Improvement</li>
          <li>Improvement</li>
          <li>Improvement</li>
        </ul>
      </div>
    </div>
  );
}

export default Can;