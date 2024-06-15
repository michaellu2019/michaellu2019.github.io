import { React } from 'react';

import lightCover from '../../assets/images/project-assets/light/light-cover.jpg';
import lightPowerStates from '../../assets/images/project-assets/light/light-power-states.png';
import lightBlockDiagram from '../../assets/images/project-assets/light/light-block-diagram.png';
import lightSpreadsheet from '../../assets/images/project-assets/light/light-spreadsheet.png';
import lightSchematic from '../../assets/images/project-assets/light/light-schematic.png';
import lightLayout from '../../assets/images/project-assets/light/light-layout.png';
import lightBoost from '../../assets/images/project-assets/light/light-boost.jpg';
import lightScope from '../../assets/images/project-assets/light/light-scope.jpg';
import lightBaby from '../../assets/images/project-assets/light/light-baby.jpeg'

function Light(props) {
  return (
    <div className="project-content-container" id="light-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>Overview Text</p>
        <img alt="" src={lightCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <img alt="" src={lightPowerStates} />
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
        <img alt="" src={lightBlockDiagram} />
        <p>Design text</p>
        <img alt="" src={lightSpreadsheet} />
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>Fabrication text.</p>
        
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={lightSchematic} /></div>
          <div className="image-container"><img alt="" src={lightLayout} /></div>
        </div>
        <img alt="" src={lightBoost} />
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
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <img alt="" src={lightScope} />
        <p>Results text.</p>
        <iframe src="https://www.youtube.com/embed/6yVy80NyFwI" title="MIT 2.75 Final Project: Surgical Lighting Control System" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <img alt="" src={lightBaby} />
        <ul>
          <li>Improvement</li>
          <li>Improvement</li>
          <li>Improvement</li>
        </ul>
      </div>
    </div>
  );
}

export default Light;