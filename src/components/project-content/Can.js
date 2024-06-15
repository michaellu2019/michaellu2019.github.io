import { React } from 'react';

import canCover from '../../assets/images/project-assets/can/can-cover.png';
import canSketch from '../../assets/images/project-assets/can/can-sketch.png';
import canKinematics from '../../assets/images/project-assets/can/can-kinematics.png';
import canCAD from '../../assets/images/project-assets/can/can-cad.png';
import canBlockDiagram from '../../assets/images/project-assets/can/can-block-diagram.png';
import canLeg from '../../assets/images/project-assets/can/can-leg.mp4';
import canFabrication from '../../assets/images/project-assets/can/can-fabrication.png';
import canSwitchCapSim from '../../assets/images/project-assets/can/can-switch-cap-sim.png';
import canSwitchCap from '../../assets/images/project-assets/can/can-switch-cap.png';
import canHBridgeSim from '../../assets/images/project-assets/can/can-hbridge-sim.png';
import canHBridge from '../../assets/images/project-assets/can/can-hbridge.png';
import canTransition from '../../assets/images/project-assets/can/can-transition.mp4';
import canPsocBlocks from '../../assets/images/project-assets/can/can-psoc-blocks.png';
import canPsocConfig from '../../assets/images/project-assets/can/can-psoc-config.png';

function Can(props) {
  return (
    <div className="project-content-container" id="can-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>Based on the famous <a href="https://youtu.be/JLmOteqmDYc" rel="noreferrer" target="_blank">R2-D2</a> droid from Star Wars, this robot was a remote-controlled 40"-tall can-shaped robot. A combination of machined, 3D-printed, and laser-cut components controlled by a PSoC with firmware written in C, this project was completed over the course of 4 weeks as a final project for the infamous MIT class 6.131 - Power Electronics Laboratory.</p>
        <img alt="" src={canCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <img alt="" src={canSketch} />
        <p>The biggest challenge of the project was finding a way to design and build a mechanism (in four weeks) that would allow the robot to transition from two legs to three legs and back (as done in the films). When standing still, the robot's center leg would be tucked inside the body and the robot would be standing up straight, but when driving around, the center leg would come down, and the robot would have its two side legs tilted back. After some research, I discovered that many R2-D2 builds had used an actuated linear mechanism to deploy the center leg and some rotary mechanism for the side legs.</p>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>One difficult part of the kinematic model was creating a linkage system such that the robot could stand on two legs (if there was just one linkage connecting the foot with a passive pin joint, the robot would fall over, so a second linkage was needed to prevent rotation) but could also rotate into the three-legged mode and angle the foot and body appropriately. This was achieved by having two linkages per side leg that were spaced distance <i>d</i> apart at the body-leg hub and spaced distance <i>2d</i> at the foot, ensuring that when the body was tilted at an angle <i>α = 18°</i> from the vertical, the foot would stay approximately flat.</p>
        <img alt="" src={canKinematics} />
        <p>The design for the leg hub would be a cam with a slot cut out for the secondary linkage shaft (represented by the pin joint in the diagram shown in red). As the linear actuator (shown in yellow) extended, it would cause the cam and thus the entire leg (shown in blue) to rotate with it, causing the side leg to tilt back.</p>
        <img alt="" src={canCAD} />
        <p>R2-D2 was modeled in SolidWorks, allowing me to test out the kinematic model that I had developed. Overall, the system would require six motors. A high-torque servo motor would control the rotation of the head. A DC motor would rotate a lead screw to raise and lower the center leg. Two DC linear actuators would push cams to rotate the side legs. Finally, two DC motors controlled the drive wheels at the feet.</p>
        <p>As the class was a power electronics class, most of the electronics would be built from scratch. The system would comprise of two H-bridges to control the drive DC motors at the feet, a pair of SPDT relays for the center leg DC motor, a pair of SPDT relays for the two side leg linear actuators, a buck converter to power the servo motor and PSoC microcontroller, and a 3/4 switched capacitor converter to power additional logic circuitry for motor control.</p>
        <img alt="" src={canBlockDiagram} />
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>Most of the frame and structural parts of the robot would be constructed out of 20mm×20mm aluminum T-slotted extrusion. Non-structural or complex aesthetic components would be 3D-printed (overnight) or laser-cut, as this would be faster and more cost-effective than machining aluminum stock.</p>
        <div className="image-next-to-container">
          <div className="video-container">
            <video controls>
              <source src={canLeg} type="video/mp4" />
              Your browser does not support the video tag.
            </video>  
          </div>
          <div className="image-container"><img alt="" src={canFabrication} /></div>
        </div>
        <p>To get a logic-level power line for some of the control circuitry to power the chips for the H-bridges and buck converter, a switched capacitor converter was used to step 12V down to 9V. This voltage would then be fed into a 7805 linear regulator, which required at least 7V to operate properly (which is why a 3/4 switched capacitor converter was used, to give buffer voltage above the minimum input voltage level). The circuit was first simulated in LTSpice then validated with oscilloscope captures.</p>
        <img alt="" src={canSwitchCapSim} />
        <p>Switching components were made with PNP and NPN BJTs. The switched capacitor converter performed best when soldered onto a perfboard and when fast switching schottky diodes were used. As the load of the converter increased, the output voltage dropped significantly, which is why the switched capacitor converter only powered a few logic chips used for the buck converter and for motor control logic.</p>
        <img alt="" src={canSwitchCap} />
        <p>The H-bridge logic circuitry involved passing in a PWM signal and a high-low direction signal into a series of AND and NOT gates, which would then pass through an additional delay circuit to create a pair of inverted signals with some shoot through delay between them (as to not short the high-side and low-side FETs of the H-bridge). The circuit was first simulated in LTSpice then validated with oscilloscope captures.</p>
        <img alt="" src={canHBridgeSim} />
        <p>The logic gates were built with 74HC14 and 74LS08 chips. The PWM and direction signal would come from the PSoC microcontroller digital output pins.</p>
        <img alt="" src={canHBridge} />
        <p>Hardware:</p>
        <ul>
          <li>2 × BaneBots 3.875" Rubber Wheel</li>
          <li>4 × DJCRAWLER 58mm Omni-Directional Wheel</li>
          <li>2 × 6mm to 6mm Flexible Shaft Coupling</li>
          <li>1 × 6mm to 10mm Flexible Shaft Coupling</li>
          <li>2 × 20mm×20mm Aluminum T-Slotted Extrusion V-Wheel Plate</li>
          <li>1 × 300mm T10×8 Lead Screw and Nut Assembly</li>
          <li>2 × WMYCONGCONG 37mm Diameter DC Geared Motor Mounting Bracket</li>
          <li>1 × goBilda goBilda 25-2 Torque Servo Motor</li>
          <li>2 × JQDML 2" Stroke 12V Linear Actuator</li>
          <li>1 × Pololu 50:1 37D 12V Gearmotor</li>
          <li>2 × Pololu 19:1 37D 12V Gearmotor</li>
          <li>Many M3×45mm Aluminum Standoffs</li>
          <li>An Expensive Amount of 20mm×20mm Aluminum T-Slotted Extrusion</li>
          <li>An Expensive Amount of 20mm×20mm Aluminum T-Slotted Extrusion Corner Brackets</li>
          <li>A Bunch of Pillow Block and Flanged Bearings and Bushings found on Amazon</li>
          <li>Not Enough 6mm Shaft Lock Collars</li>
          <li>An Assortment of 20mm and 6mm Stainless Steel Shaft and 6mm 6061-T6 Aluminum Shaft</li>
          <li>Lots of 3D-Printed Components</li>
          <li>Plenty of Laser-Cut Acrylic Pieces</li>
          <li>Too Many Fasteners (the Majority of Which Were Probably M5 Screws)</li>
        </ul>  

        <p>Electronics:</p>
        <ul>
          <li>1 × PSoC CY8CKIT-059 Prototyping Kit</li>
          <li>1 × Radiolink T8S Receiver and Remote</li>
          <li>1 × T80-52 Toroidal Core</li>
          <li>2 × LM7805 Linear Regulator</li>
          <li>4 × SPDT Relay Board</li>
          <li>2 × LM555 Timer Chips</li>
          <li>2 × 74LS08 Chips</li>
          <li>7 × 74HC14 Chips</li>
          <li>10 × IR2125 Chips</li>
          <li>10 × IRF540A N-Channel MOSFETs</li>
          <li>3 × 2N2222 NPN BJT</li>
          <li>1 × 2N2907 PNP BJT</li>
          <li>6 × 1N5818 Schottky Diodes</li>
          <li>Many 1N4148 Diodes</li>
          <li>A Few Resistors Here and There</li>
          <li>A Medley of Ceramic, Film, and Electrolytic Capacitors from 0.1µF to 1000µF</li>
        </ul>  
      </div>
      
      <div className="project-content-container-section project-programming">
        <h1>Programming</h1>
        <p>The software for R2-D2 was written in C for the PSoC 5LP system (which was the microcontroller family we were forced to use for the class) with Cypress's PSoC Creator. The main program loop involved reading data from the robot's RC receiver then controlling the appropriate actuator based on those inputs.</p>   
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={canPsocBlocks} /></div>
          <div className="image-container"><img alt="" src={canPsocConfig} /></div>
        </div>
        <p>This allowed me to control the robot's drive motors to move around as well as the head servo and the lead screw assembly and linear actuators, which were used to switch from the two-legged mode to the three-legged mode and back.</p>
        <video controls>
          <source src={canTransition} type="video/mp4" />
          Your browser does not support the video tag.
        </video>  
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>After four weeks, I was able to build a prototype of R2-D2 for my final project with the necessary electronics and software controls to move all six actuators on the robot.</p>
        <iframe src="https://www.youtube.com/embed/NPbbGyOREl0" title="MIT 6.131 Final Project: R2-D2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <ul>
          <li>The use of aluminum for the entire frame of the robot might have been overkill. All the aluminum added an unnecessary amount of weight to the system since there were no particularly heavy "payloads" besides a few actuators. Swapping out aluminum extrusion for a lighter material like wood or plastic and being more deliberate with placement and use of internal space could have provided sufficient structural integrity for much less weight and cost.</li>
          <li>With so many different parts that had to be assembled, the robot suffered from manufacturing error stack-up, adding a lot of "slop" to the system. This was especially true for 3D-printed parts and aluminum extrusion assemblies. This could have been mitigated at the design phase by trying to remove as many parts as possible by combining structures as one 3D-printed or machined piece (though this would have made structures more complicated to manufacture).</li>
        </ul>
      </div>
    </div>
  );
}

export default Can;