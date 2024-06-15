import { React } from 'react';

import latheCover from '../../assets/images/project-assets/lathe/lathe-cover.jpg';
import latheFRs from '../../assets/images/project-assets/lathe/lathe-frs.png';
import lathePreload from '../../assets/images/project-assets/lathe/lathe-preload.png';
import latheStiffness from '../../assets/images/project-assets/lathe/lathe-stiffness.png';
import latheCAD from '../../assets/images/project-assets/lathe/lathe-cad.png';
import latheCADSection from '../../assets/images/project-assets/lathe/lathe-cad-section.png';
import latheFEABuckling from '../../assets/images/project-assets/lathe/lathe-fea-buckling.png';
import latheFEADeflection from '../../assets/images/project-assets/lathe/lathe-fea-deflection.png';
import latheFabrication from '../../assets/images/project-assets/lathe/lathe-fabrication.png';

function Lathe(props) {
  return (
    <div className="project-content-container" id="lathe-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>Overview Text</p>
        <img alt="" src={latheCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <p>Ideation text</p>
        
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={latheFRs} /></div>
          <div>
            <p>text</p>
          </div>
        </div>

        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={latheStiffness} /></div>
          <div className="image-container"><img alt="" src={lathePreload} /></div>
        </div>
        <p>Ideation text</p>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>Design text</p>
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={latheCAD} /></div>
          <div className="image-container"><img alt="" src={latheCADSection} /></div>
        </div>
        <p>Design text</p>
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={latheFEADeflection} /></div>
          <div className="image-container"><img alt="" src={latheFEABuckling} /></div>
        </div>
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>Fabrication text.</p>
        <img alt="" src={latheFabrication} />
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
        <iframe src="https://www.youtube.com/embed/e4STLcCak6A" title="MIT 2.72 Final Project: Desktop Lathe" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>  
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

export default Lathe;