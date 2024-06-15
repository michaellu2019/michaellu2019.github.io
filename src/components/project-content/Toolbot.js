import { React } from 'react';

import toolbotCover from '../../assets/images/project-assets/toolbot/toolbot-cover.jpg';
import toolbotTorsionMath from '../../assets/images/project-assets/toolbot/toolbot-torsion-math.png';
import toolbotSimulink from '../../assets/images/project-assets/toolbot/toolbot-simulink.png';
import toolbotSimulinkGraphs from '../../assets/images/project-assets/toolbot/toolbot-simulink-graphs.png';
import toolbotSimulinkVideo from '../../assets/images/project-assets/toolbot/toolbot-simulink-video.mp4';
import toolbotBendingMath from '../../assets/images/project-assets/toolbot/toolbot-bending-math.png';
import toolbotShearMoment from '../../assets/images/project-assets/toolbot/toolbot-shear-moment.png';
import toolbotClamp from '../../assets/images/project-assets/toolbot/toolbot-clamp.png';
import toolbotTorsionBar from '../../assets/images/project-assets/toolbot/toolbot-torsion-bar.mp4';
import toolbotChassisCAD from '../../assets/images/project-assets/toolbot/toolbot-chassis-cad.png';
import toolbotCarouselCAD from '../../assets/images/project-assets/toolbot/toolbot-carousel-cad.png';
import toolbotChassis from '../../assets/images/project-assets/toolbot/toolbot-chassis.jpg';
import toolbotWheels from '../../assets/images/project-assets/toolbot/toolbot-wheels.jpg';
import toolbotTreads from '../../assets/images/project-assets/toolbot/toolbot-treads.jpg';
import toolbotElectronics from '../../assets/images/project-assets/toolbot/toolbot-electronics.jpeg';
import toolbotGear from '../../assets/images/project-assets/toolbot/toolbot-gear.jpg';
import toolbotCarousel from '../../assets/images/project-assets/toolbot/toolbot-carousel.jpg';

function Toolbot(props) {
  return (
    <div className="project-content-container" id="toolbot-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>Overview Text</p>
        <img alt="" src={toolbotCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <p>Ideation text</p>
        
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={toolbotTorsionMath} /></div>
          <div>
            <p>text</p>
          </div>
        </div>
        
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={toolbotSimulink} /></div>
          <div className="image-container"><img alt="" src={toolbotSimulinkGraphs} /></div>
        </div>

        <div className="image-next-to-container">
          <div className="video-container">
            <video controls>
              <source src={toolbotSimulinkVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>  
          </div>
          <p>text</p>
        </div>
        
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={toolbotBendingMath} /></div>
          <div className="image-container"><img alt="" src={toolbotShearMoment} /></div>
        </div>
        
        <p>Ideation text</p>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>Design text</p>

        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={toolbotClamp} /></div>
          <div className="video-container">
            <video controls>
              <source src={toolbotTorsionBar} type="video/mp4" />
              Your browser does not support the video tag.
            </video>  
          </div>
        </div>

        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={toolbotChassisCAD} /></div>
          <div className="image-container"><img alt="" src={toolbotCarouselCAD} /></div>
        </div>
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>Fabrication text.</p>
        <img alt="" src={toolbotChassis} />

        <p>Fabrication text.</p>
        
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={toolbotWheels} /></div>
          <div className="image-container"><img alt="" src={toolbotTreads} /></div>
        </div>

        <p>Fabrication text.</p>
        
        <div className="image-container"><img alt="" src={toolbotElectronics} /></div>

        <p>Fabrication text.</p>

        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={toolbotGear} /></div>
          <div className="image-container"><img alt="" src={toolbotCarousel} /></div>
        </div>
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
        <p>Results text.</p>
        <iframe src="https://www.youtube.com/embed/mJ3B9_n0ato" title="Torsion Bar Suspension Tank Chassis" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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

export default Toolbot;