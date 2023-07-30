import { React } from 'react';

import omniCover from '../../assets/images/project-assets/omni/omni-cover.png'
import omniCAD from '../../assets/images/project-assets/omni/omni-cad.png'
import omniChassis from '../../assets/images/project-assets/omni/omni-chassis.jpg'
import omniElectronics from '../../assets/images/project-assets/omni/omni-electronics.jpg'
import omniSTM from '../../assets/images/project-assets/omni/omni-stm.JPG'

function Omni(props) {
  return (
    <div className="project-content-container" id="omni-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>Overview Text</p>
        <img src={omniCover} />
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
        <iframe src="https://www.youtube.com/embed/pC2qX-MVKc4" title="Omni-Directional Wheeled Robot" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>Design text</p>
        <img src={omniCAD} />
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>Fabrication text.</p>
        <img src={omniChassis} />
        <div className="image-next-to-container">
          <div className="image-container"><img src={omniSTM} /></div>
          <div className="image-container"><img src={omniElectronics} /></div>
        </div>
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
        <iframe src="https://www.youtube.com/embed/sVWTkhwmhlI" title="Omni-Directional Robot" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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

export default Omni;