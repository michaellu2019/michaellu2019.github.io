import { React } from 'react';

import canCover from '../../assets/images/project-assets/can/can-cover.png';
import canSketch from '../../assets/images/project-assets/can/can-sketch.png';

import canKinematics from '../../assets/images/project-assets/can/can-kinematics.png';
import canCAD from '../../assets/images/project-assets/can/can-cad.png';
import canBlockDiagram from '../../assets/images/project-assets/can/can-block-diagram.png';


import canLeg from '../../assets/images/project-assets/can/can-leg.mp4';
import canMechanism from '../../assets/images/project-assets/can/can-mechanism.png';
import canSwitchCapSim from '../../assets/images/project-assets/can/can-switch-cap-sim.png';
import canSwitchCap from '../../assets/images/project-assets/can/can-switch-cap.png';
import canHBridge from '../../assets/images/project-assets/can/can-hbridge.png';
import canTransition from '../../assets/images/project-assets/can/can-transition.mp4';

import canPsocBlocks from '../../assets/images/project-assets/can/can-psoc-blocks.png';
import canPsocConfig from '../../assets/images/project-assets/can/can-psoc-config.png';

function Can(props) {
  return (
    <div className="project-content-container" id="can-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>Based on the famous <a href="https://youtu.be/JLmOteqmDYc" rel="noreferrer" target="_blank">R2-D2</a> droid from Star Wars, this robot was a remote-controlled 40" tall can-shaped robot. A combination of machined, 3D-printed, and laser-cut components controlled by a PSoC with firmware written in C, this project was completed over the course of 4 weeks as a final project for the MIT class 6.131 - Power Electronics Laboratory.</p>
        <img alt="" src={canCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <img alt="" src={canSketch} />
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
        <img alt="" src={canKinematics} />
        <p>Design text</p>
        <img alt="" src={canCAD} />
        <p>Design text</p>
        <img alt="" src={canBlockDiagram} />
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>

        <div className="image-next-to-container">
          <div className="video-container">
            <video controls>
              <source src={canLeg} type="video/mp4" />
              Your browser does not support the video tag.
            </video>  
          </div>
          <div className="image-container"><img alt="" src={canMechanism} /></div>
        </div>
        <p>Fabrication text.</p>
        
        <img alt="" src={canSwitchCapSim} />
        <img alt="" src={canSwitchCap} />
        <img alt="" src={canHBridge} />
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
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={canPsocBlocks} /></div>
          <div className="image-container"><img alt="" src={canPsocConfig} /></div>
        </div>
        <video controls>
          <source src={canTransition} type="video/mp4" />
          Your browser does not support the video tag.
        </video>  
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>Results text.</p>
        <iframe src="https://www.youtube.com/embed/NPbbGyOREl0" title="MIT 6.131 Final Project: R2-D2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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