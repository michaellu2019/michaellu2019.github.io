import { React } from 'react';

import ballCover from '../../assets/images/project-assets/ball/ball-cover.JPG'
import ballPhysics from '../../assets/images/project-assets/ball/ball-physics.png'
import ballCad from '../../assets/images/project-assets/ball/ball-cad.png'
import ballCadSection from '../../assets/images/project-assets/ball/ball-cad-section.png'
import ballBlockDiagram from '../../assets/images/project-assets/ball/ball-block-diagram.png'
import ballBall from '../../assets/images/project-assets/ball/ball-ball.JPG'
import ballDriveShaft from '../../assets/images/project-assets/ball/ball-drive-shaft.JPG'
import ballPendulum from '../../assets/images/project-assets/ball/ball-pendulum.JPG'
import ballFlywheel from '../../assets/images/project-assets/ball/ball-flywheel.JPG'
import ballNeck from '../../assets/images/project-assets/ball/ball-neck.JPG'
import ballHead from '../../assets/images/project-assets/ball/ball-head.JPG'
import ballSchematic from '../../assets/images/project-assets/ball/ball-schematic.png'
import ballMechanism from '../../assets/images/project-assets/ball/ball-mechanism.JPG'
import ballPaint from '../../assets/images/project-assets/ball/ball-paint.JPG'
import ballSoftwareDiagram from '../../assets/images/project-assets/ball/ball-software-diagram.png'
import ballPsocBlocks from '../../assets/images/project-assets/ball/ball-psoc-blocks.png'
import ballPsocConfig from '../../assets/images/project-assets/ball/ball-psoc-config.png'
import ballRadioScope from '../../assets/images/project-assets/ball/ball-radio-scope.png'
import ballMotorScope from '../../assets/images/project-assets/ball/ball-motor-scope.png'
import ballPID from '../../assets/images/project-assets/ball/ball-pid.png'
import ballStabilization from '../../assets/images/project-assets/ball/ball-stabilization.png'
import ballBox from '../../assets/images/project-assets/ball/ball-box.JPG'

function Ball(props) {
  return (
    <div className="project-content-container" id="ball-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>Overview Text</p>
        <img src={ballCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <img src={ballPhysics} />
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
        <img src={ballCad} />
        <img src={ballCadSection} />
        <img src={ballBlockDiagram} />
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>Fabrication text.</p>
        <img src={ballBall} />
        <img src={ballDriveShaft} />
        <img src={ballPendulum} />
        <img src={ballFlywheel} />
        <div className="image-next-to-container">
          <div className="image-container"><img src={ballNeck} /></div>
          <div className="image-container"><img src={ballHead} /></div>
        </div>
        <img src={ballSchematic} />
        <img src={ballMechanism} />
        <img src={ballPaint} />
        <p>Hardware:</p>
        <ul>
          <li>Clonk</li>
          <li>Clunk</li>
        </ul>  

        <p>Electronics:</p>
        <ul>
          <li>Beep</li>
          <li>Boop</li>
        </ul>  
      </div>
      
      <div className="project-content-container-section project-programming">
        <h1>Programming</h1>
        <img src={ballSoftwareDiagram} />
        <img src={ballPID} />
        <div className="image-next-to-container">
          <div className="image-container"><img src={ballPsocBlocks} /></div>
          <div className="image-container"><img src={ballPsocConfig} /></div>
        </div>
        <div className="image-next-to-container">
          <div className="image-container">
            <img src={ballRadioScope} />
            <img src={ballMotorScope} />
          </div>
          <div className="text-container">
            <p>Scope so kewl...</p>
          </div>
        </div>
        <iframe src="https://www.youtube.com/embed/Skfwr8KdXXk" title="Making MIT BB-8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <p>Programming text.</p>    
      </div>
      <img src={ballStabilization} />
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>Results text.</p>
        <iframe src="https://www.youtube.com/embed/xmnu_rDfkFk" title="MIT 6.115 Final Project: BB-8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe src="https://www.youtube.com/embed/Olh6qdgxJgc" title="BB-8 @ MIT" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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

export default Ball;