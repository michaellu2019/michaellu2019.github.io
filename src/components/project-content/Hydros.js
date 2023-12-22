import { React } from 'react';

import hydrosBrochure from '../../assets/images/project-assets/hydros/hydros-brochure.png'
import hydrosTeam from '../../assets/images/project-assets/hydros/hydros-team.jpg'
import hydrosSketch from '../../assets/images/project-assets/hydros/hydros-sketch.png'
import hydrosHose from '../../assets/images/project-assets/hydros/hydros-hose.JPG'
import hydrosCAD from '../../assets/images/project-assets/hydros/hydros-cad.png'
import hydrosPrototype from '../../assets/images/project-assets/hydros/hydros-prototype.jpg'
import hydrosTesting from '../../assets/images/project-assets/hydros/hydros-testing.png'
import hydrosTruck from '../../assets/images/project-assets/hydros/hydros-truck.jpg'

function Hydros(props) {
  return (
    <div className="project-content-container" id="hydros-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <img alt="" src={hydrosBrochure} />
        <p>Hydros was a fire hose cleaning machine that used high-pressure water sprayers and hydro-powered scrubs to remove carcinogenic debris off fire hoses. It was my team's (go Purple!) project for MIT's MechE capstone class 2.009 - Product Engineering Processes.</p>
        <img alt="" src={hydrosTeam} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <img alt="" src={hydrosSketch} />
        <p>The idea for Hydros began when I observed firefighters packing up fire hose in the aftermath of a structure fire. I noticed how hours would be spent walking out the hoses to drain them of any residual water/air then packing them into the back of a truck.</p>
        
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={hydrosHose} /></div>
          <div>
            <p>The initial ideation phase of our project involved carrying out a bunch of interviews with our target users. We traveled across Massachusetts, going to fire departments in the area to learn about their pain points in the process of drying, cleaning, washing, and packing used fire hose. We even got a few old fire hoses as a gift!</p>
          </div>
        </div>
      </div>

      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>Our solution to the problem was to build a machine that would automate some of the steps of this process. Hydros contained a set of high-pressure water sprayers and hydro-powered brushes that would wash and scrub off debris from the used fire hose. The fire hose would also be spooled into a neat roll to squeeze out residual water/air and to make it easy to load onto a vehicle.</p>
        <img alt="" src={hydrosCAD} />
        <p>We designed most of our assembly in Fusion360 to ensure the spacing of all our mechanisms would fit onto one portable machine that could be deployed at the site of a fire.</p>
      </div>

      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>A lot of work was done to prototype and test out the device's ability to clean fire hose. We contacted local fire departments and ran our hydro-powered system on 50 PSI water flowing from a fire truck (which would be the water source at fire scenes) to ensure the structural integrity of our water system as well as the device's ability to clean.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={hydrosTruck} /></div>
          <div className="image-container"><img alt="" src={hydrosTesting} /></div>
        </div>

        <p>All mechanisms were then integrated onto a steel hand truck that would contain the spooling mechanism and washing box. More end-to-end testing was conducted with users before adding final touches to the product.</p>
        <img alt="" src={hydrosPrototype} />

        <p>Hardware:</p>
        <ul>
          <li>8 × High-Pressure Flat Spray Nozzle with 1/4" NPT Male Thread</li>
          <li>8 × High-Pressure Braided Chemical Hose with Fittings</li>
          <li>1 × Gradual On/Off Valve with 316 Stainless Steel Body and Gate</li>
          <li>1 × 75 PSI Pressure-Relief Valve</li>
          <li>1 × Rocker-Lug Fire-Fighting Hose Fitting NPT to NHT Adapter</li>
          <li>1 × Detergent Injector Bottle</li>
          <li>2 × Rotary Brushes</li>
          <li>1 × American Lifting Quick Change 4-in-1 Convertible Hand Truck and Cart</li>
          <li>Various 1/4" NPT Elbow, Tee, and Wye Connectors</li>
          <li>Plenty of Imperial Fasteners</li>
          <li>An Assortment of Spacers, Bushings, Bearings, Washers, and Shafts</li>
          <li>Several 4130 Steel Gears</li>
          <li>A lot of Steel, Aluminum, Delrin, and Polycarbonate</li>
        </ul> 
      </div>

      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>After months of hard work, we finally demoed our product at the class's final presentation event in December.</p>
        <iframe src="https://www.youtube.com/embed/Qw2EdmquCUw" title="MIT 2.009 Purple Team Final Presentation: Hydros" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>  
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <ul>
          <li>The washing system involved a lot of connectors, adapters, manifolds, and auxiliary control components. This increased the part count, assembly time, and thus the calculated product cost. It would have been good to attempt integrating some of these components or machining more manifolds to reduce the part count.</li>
          <li>Our product was very bottom heavy due to the washing box being so close to the end. Adding some counterweights, shifting the locations of other mechanisms, or adding some stability structures at the end would reduce the number of times we almost tipped over the device.</li>
        </ul>
      </div>
    </div>
  );
}

export default Hydros;