import { React } from 'react';

import latheCover from '../../assets/images/project-assets/lathe/lathe-cover.jpg';
import latheFRs from '../../assets/images/project-assets/lathe/lathe-frs.png';
import lathePreload from '../../assets/images/project-assets/lathe/lathe-preload.png';
import latheStiffness from '../../assets/images/project-assets/lathe/lathe-stiffness.png';
import latheCAD from '../../assets/images/project-assets/lathe/lathe-cad.png';
import latheCADSection from '../../assets/images/project-assets/lathe/lathe-cad-section.png';
import latheSpindle from '../../assets/images/project-assets/lathe/lathe-spindle.png';
import latheDovetail from '../../assets/images/project-assets/lathe/lathe-dovetail.png';
import latheZSlide from '../../assets/images/project-assets/lathe/lathe-z-slide.png';
import latheFEABuckling from '../../assets/images/project-assets/lathe/lathe-fea-buckling.png';
import latheFEADeflection from '../../assets/images/project-assets/lathe/lathe-fea-deflection.png';
import latheFabrication from '../../assets/images/project-assets/lathe/lathe-fabrication.png';

function Lathe(props) {
  return (
    <div className="project-content-container" id="lathe-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>This small tabletop lathe was designed and built to turn plastic, aluminum, and steel with 50 microns of precision for the MIT class 2.720 - Elements of Mechanical Design. Featuring a waterjet steady rest, steel dovetail, aluminum spindle, and CNC capability, the lathe was created to make fountain pen parts.</p>
        <img alt="" src={latheCover} />

        <p><span>*If you're a current 2.72/2.720 student, you can find some useful reference material <a href="https://github.com/michaellu2019/2.72-Elements-of-Mechanical-Design" target="_blank" rel="noreferrer">here</a>. Good luck!*</span></p>
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <p>The inspiration for the lathe came from talking to fountain pen makers in the greater Boston area. They provided useful insight into the process of pen making as well as the time and power requirements for making pens out of different materials.</p>
        
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={latheFRs} /></div>
          <div>
            <p>As a result, the lathe's functional requirements were tailored to those of small pen-making lathes. Because of this, the cost of the lathe (without CNC components) was a strict $200, the footprint was kept relatively small, and many of the accuracy, power, and material removal rate requirements were adjusted.</p>
          </div>
        </div>

        <p>The lathe's functional requirements were translated into subsystem requirements (for the spindle, dovetail, z-axis drive, etc.) so that they could be designed appropriately. One important consideration for reaching the 50-micron repeatability specification was designing components of the machine to have sufficient stiffness so that they wouldn't deflect too much under the loads of cutting. This was accomplished by solving for the stiffness of component elements, then combining those elements as springs in series and parallel to get an overall stiffness for the component.</p>

        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={latheStiffness} /></div>
          <div className="image-container"><img alt="" src={lathePreload} /></div>
        </div>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>

        <p>The lathe would be composed of three main subsystems: the spindle, dovetail/x-axis drive, and z-axis drive. I modeled these components  extensively in SolidWorks to ensure that parts would fit together without colliding and that assemblies were within size and mass specifications.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={latheCAD} /></div>
          <div className="image-container"><img alt="" src={latheCADSection} /></div>
        </div>

        <p>The spindle would be responsible for holding the lathe's spinning shaft and chuck, which would grip the workpiece being cut. The spindle would be designed to handle high loads from cutting forces, which is why the shaft would be made from 12L14 steel and turned to be a hefty 3/4" thick. The spindle shaft would be placed in an aluminum housing and constrained by two Timken tapered roller bearings, which would be preloaded by a set of Belleville washers (though these were eventually swapped out for an O-Ring) and a 3/4"-16 nut secured with Loctite.</p>
        <img alt="" src={latheSpindle} />

        <p>The dovetail/x-axis drive would hold the cutting tool, which would be driven into the workpiece for turning down its radius. The steel dovetail would be immensely stiff to handle the high cutting forces during operation. To mitigate any issues from misalignment, a brass gib would be fabricated to fit between the two parts of the dovetail and tensioned to provide the right amount of stiffness. One end of the x-axis drive leadscrew would also be coupled to a CNC motor for CNC capability.</p>
        <img alt="" src={latheDovetail} />

        <p>The z-axis drive would feature a steady rest to support long workpieces, the headstock to hold the spindle, two 3/4" steel rails to support the vertical cutting forces during operation, and a z-axis leadscrew assembly to move the mounted dovetail assembly with the cutting tool. The dovetail assembly would be mounted to the z-axis drive through bushings in a carriage skirt as well as a dancing-queen flexure and rail flexure, as to not over constrain the dovetail assembly.</p>
        <img alt="" src={latheZSlide} />

        <p>To ensure the aluminum flexures had the proper compliance and load capacity (buckling was one of the expected failure modes for the rail flexure), I used SolidWorks FEA to predict how the parts would react to certain loads in X and Y, and what internal stresses might develop if the flexure had to "flex" due to some misalignment in the lathe assembly. By conducting a bunch of different FEA studies across differently sized flexures, I was able to pick out the flexure geometry that maximized load capacity and compliance.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={latheFEADeflection} /></div>
          <div className="image-container"><img alt="" src={latheFEABuckling} /></div>
        </div>
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>Most parts of the lathe were either 3D-printed with ABS, waterjet from aluminum, or machined from aluminum or steel stock based on the required strength and precision. Flexures were waterjet out of 1" aluminum stock before being finished on the manual mill to remove any waterjet defects and to add bolt holes. All machined parts had accompanying engineering drawings and process plans to minimize the chances of errors in the machine shop.</p>
        <p>To mitigate any misalignment issues that would occur during assembly, alignment pins, adjustment screws, and potting with J-B Weld (particularly for the z-slide bushings and leadscrew nut) were used in design and assembly.</p>
        <img alt="" src={latheFabrication} />
        <p>Hardware:</p>
        <ul>
          <li>1 × Tian Pai K01-50 Three-Jaw Chuck</li>
          <li>2 × Timken LM11949-LM11910 Tapered Roller Bearings</li>
          <li>1 × 3/4"-16 Medium-Strength Steel Thin Hex Nut</li>
          <li>1 × 3/4" O-Ring</li>
          <li>1 × 1" Shaft Diameter Spring-Loaded Rotary Shaft Seal with Wiper Lip</li>
          <li>1 × 160XL025 XL Series Timing Belt</li>
          <li>1 × 1/4"-20 12L14 Steel Leadscrew</li>
          <li>1 × 1/4" Shaft Diameter R4-2RS Sealed Ball Bearing</li>
          <li>2 × 3/16" Straight Oil Fittings</li>
          <li>2 × 1/4" Shaft Diameter Oil-Embedded Bronze Thrust Bearings</li>
          <li>1 × 0.255" Wave Disc Spring</li>
          <li>1 × Carbide Cutting Tool</li>
          <li>2 × 3/4"-Diameter, 12" Long 1566 Carbon Steel Rods</li>
          <li>3 × 3/4" Shaft Diameter Oil-Embedded Bronze Sleeve Bearings</li>
          <li>1 × 1/2"-10 12L14 Steel Leadscrew</li>
          <li>2 × 1/2" Shaft Diameter Bronze Bushings</li>
          <li>2 × 1/2"-10 Flanged Nuts</li>
          <li>2 × 1/2" Shaft Diameter Thrust Bearings</li>
          <li>2 × 1/2"-10 Carbon Steel Acme Hex Nuts</li>
          <li>2 × Dial Indicators</li>
          <li>1 × #10-24 Alloy Steel 1/4" Shoulder Screw</li>
          <li>1 × VEX Robotics 217-2000 12V CIM Motor</li>
          <li>1 × Tian Pai K01-50 Three-Jaw Chuck</li>
          <li>2 × 0.25" to 0.25" Flexible Shaft Couplings</li>
          <li>2 × NEMA 23 Stepper Motors</li>
          <li>1 × NEMA 23 Steel Mounting Bracket</li>
          <li>1 × 24"×24"×1/2" Plywood Sheet</li>
          <li>A Bunch of 6061 Aluminum and 12L14 Steel Parts Made on the waterjet, Lathe, and Mill.</li>
          <li>Lots of 3D-Printed Components</li>
          <li>Too Many Fasteners (the Majority of Which Were Probably 1/4"-20 Screws)</li>
        </ul>  

        <p>Electronics:</p>
        <ul>
          <li>1 × Arduino UNO</li>
          <li>1 × CNC Shield</li>
          <li>1 × 24V 350W Mean Well Power Supply</li>
          <li>1 × E-Stop</li>
          <li>1 × Limit Switch</li>
          <li>1 × TB6600 4A 40V Stepper Driver</li>
        </ul>  
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>By the end of the class, the key functional requirements defined in the beginning of the class were met. The desktop lathe was able to cut plastic, aluminum, and steel with 0.007" of accuracy and 0.002" (~50 microns) of precision using about 80W of power.</p>
        <p>The lathe also proved to be very robust, maintaining functionality after several "death tests" carried out by Prof. Culpepper: three "sledgehammer" hits, a drop test, and a human-loading test.</p>
        <iframe src="https://www.youtube.com/embed/e4STLcCak6A" title="MIT 2.72 Final Project: Desktop Lathe" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>  
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <ul>
          <li>One of the major issues that the lathe had was the runout of the purchased chuck. The aluminum soft jaws created were waterjetted to match the profile of the chuck jaws, which introduced some taper into the part profile. Buying a better chuck to mitigate the issue or machining a better set of aluminum soft jaws to improve part accuracy could have improved the runout of the workpiece during operation.</li>
          <li>There was some power loss in the spindle assembly from the high preload on the spindle's tapered roller bearings. Increasing the thread pitch on the spindle shaft and preload nut or switching to aa softer O-Ring/spring washer could have given finer control of the bearing preload without sacrificing stiffness.</li>
          <li>The provided DC motor, in addition to being very old, was inefficient and only rated for 12V, which meant that it would draw higher current for the same amount of power. Switching to a brushless DC motor (albeit for a higher price) would make the machine much more efficient.</li>
        </ul>
      </div>
    </div>
  );
}

export default Lathe;