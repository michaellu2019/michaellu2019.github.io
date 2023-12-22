import { React } from 'react';

import krabsCover from '../../assets/images/project-assets/krabs/krabs-cover.png'
import krabsSketch from '../../assets/images/project-assets/krabs/krabs-sketch.jpg'
import jansensLinkage from '../../assets/images/project-assets/krabs/jansen-linkage.gif'
import krabsCAD from '../../assets/images/project-assets/krabs/krabs-cad.png'
import krabsCADVideo from '../../assets/images/project-assets/krabs/krabs-cad-video.mp4'
import krabsLegs from '../../assets/images/project-assets/krabs/krabs-legs.jpg'
import krabsElectronics from '../../assets/images/project-assets/krabs/krabs-electronics.jpg'

function Krabs(props) {
  return (
    <div className="project-content-container" id="krabs-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>Kombat Krabs were remote-controlled toy robot crabs that walked using Jansen's linkage (created by kinetic sculptor Theo Jansen). These Krabs were built primarily out of foam core, paper, and cardboard to meet the $20 material constraint of the class (2.00B - Toy Product Design) for which they were made.</p>
        <img alt="" src={krabsCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <img alt="" src={krabsSketch} />
        <p>The biggest challenge of this project was designing a mechanism for the Krabs to walk on eight legs with such a tight budget. I decided to use <a href="https://en.wikipedia.org/wiki/Jansen%27s_linkage" rel="noreferrer" target="_blank">Jansen’s Linkage</a>, a walking mechanism that would trace out a smooth walking curve when driven by a circular rotational movement.</p>
        
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={jansensLinkage} /></div>
          <div className="text-container">
            <p>By attaching several linkages of particular lengths together and driving the leg with a motor, the linkage would generate a smooth walking motion. Jansen's Linkage was also quite scalable because multiple sets of linkages could be attached to one rotor to create <a href="https://youtu.be/MYGJ9jrbpvg" rel="noreferrer" target="_blank">bipeds, quadrupeds, octopeds, etc.</a>.</p>
          </div>
        </div>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>Using Jansen’s Linkage, multiple legs could be driven by one motor. Thus, a Krab with eight legs would have two motors—one motor to control the front set of legs, and another motor to control the back set of legs. This would allow the Krabs to move straight and turn.</p>
        <p>A pair of legs would be attached to one side of the motor. They would be driven by a common drive shaft turned by the motor so that their walking curve trajectories would be out of phase by 180°. The other pair of legs driven by the motor would also have its drive shaft rotated to be 180° from the other drive shaft.</p>
        <div className="image-next-to-container">
          <div className="image-container">
            <video controls>
              <source src={krabsCADVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="image-container"><img alt="" src={krabsCAD} /></div>
        </div>
        <p>The entire Krab was modeled in Autodesk Fusion360 to work out how I would be able to fit eight legs inside a foam core frame along with all the necessary electronics.</p>
        <iframe title="krab-cad" src="https://mymit709.autodesk360.com/g/shares/SH56a43QTfd62c1cd968c5e3fd890a4bc8e1" frameBorder="0" allowFullScreen></iframe>
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>Based on the dimensions planned in CAD, I carved out parts for eight legs from the foam core sheets given to us from the class. Rigid parts of the linkage were created with foam core glued together to make solid blocks. Linkages would be joined with folded paper to create hinge-joints between components.</p>
        <p>The drive shaft and leg carriage shafts would be made from paperclip wire, and the legs would have paper bushings glued to them, which would slide onto the paper clip wire shafts.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={krabsLegs} /></div>
          <div className="image-container"><img alt="" src={krabsElectronics} /></div>
        </div>
        <p>The biggest challenge of prototyping was optimizing the Krab's walking curve by tweaking the dimensions of Jansen’s linkage for the Krab legs. The initial linkage lengths made the Krab's walk too unstable, so some linkage segments were shortened to reduce the size of the Krab's walking curve. This allowed the Krab to maintain its balance, especially with a high center of gravity.</p>
        <p>Hardware:</p>
        <ul>
          <li>1 × SG90 Micro Servo Motor</li>
          <li>2 × Antrader Dual-shaft Gear Motors</li>
          <li>Lots of Foam Core and Paper</li>
          <li>6 × Paper Clips</li>
        </ul>  

        <p>Electronics:</p>
        <ul>
          <li>1 × Arduino Uno R3</li>
          <li>1 × L298N Motor Driver</li>
          <li>2 × 9V Batteries</li>
          <li>5 × Chanzon Tactile Push Button Switches</li>
        </ul>
      </div>
      
      <div className="project-content-container-section project-programming">
        <h1>Programming</h1>
        <iframe src="https://www.youtube.com/embed/CdymjvrQwWg" title="Prototyping Jansen’s Linkage" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <p>By programming the Krab's Arduino microcontroller, I was able to drive the Krab so that it could move sideways and turn on the spot by controlling the speed and direction of one or both sets of legs. After connecting a set of five buttons to the Arduino, I was able to teleoperate the Krab with a tethered remote to make it walk around and move its arm.</p>
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>By the end of two months, I was able to build two Krabs while meeting the class's budget requirement.</p>
        <iframe src="https://www.youtube.com/embed/xg4couBU9fM" title="Kombat Krabs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <ul>
          <li>Since most of the Krab parts were hand-made, there was a lot of variation in the parts produced. Having a method to measure and reject parts that were out of the specifications (by mass or dimensions) would likely improve the machine's overall build quality.</li>
          <li>Optimizing the fabrication process to be more consistent with the use of jigs, guides, and part templates rather than eyeballing with a ruler would likely lead to more consistent part output.</li>
        </ul>
      </div>
    </div>
  );
}

export default Krabs;