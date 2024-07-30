import { React } from 'react';

import toolbotCover from '../../assets/images/project-assets/toolbot/toolbot-cover.jpg';
import toolbotMath from '../../assets/images/project-assets/toolbot/toolbot-math.png';
import toolbotDiagram from '../../assets/images/project-assets/toolbot/toolbot-diagram.png';
import toolbotSimulink from '../../assets/images/project-assets/toolbot/toolbot-simulink.png';
import toolbotSimulinkGraphs from '../../assets/images/project-assets/toolbot/toolbot-simulink-graphs.png';
import toolbotSimulinkVideo from '../../assets/images/project-assets/toolbot/toolbot-simulink-video.mp4';
import toolbotBendingMaths from '../../assets/images/project-assets/toolbot/toolbot-bending-maths.png';
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
        <p>Designed to carry farming tools across muddy, uneven farmland terrain, this robot was built as a project for MIT's <a href="https://bioinstrumentation.mit.edu/" rel="noreferrer" target="_blank">BioInstrumentation Laboratory</a>. It was engineered to carry payloads of about 100lbs and used a torsion-bar based suspension with tank treads as well as a 2 degrees-of-freedom (DOF) motion platform with a rotating tool carousel.</p>
        <img alt="" src={toolbotCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <p>The robot was intended to support other BioInstrumentation Lab farming robots by carrying compatible robotic agricultural equipment from soil moisture probes to thermal cameras to spectroscopy tools. I expected that the robot would operate on farmland with soft soil and uneven terrain, which meant that:</p>
        <ol>
          <li>The carousel on the robot that held the farming tools would need to be able to level itself, especially since the other farming robots didn't have all the necessary degrees of freedom in their arms to pick up the tools.</li>
          <li>The robot's chassis suspension would have to conform to the roughness of the terrain, and the chassis would also have to prevent sinking into soft soil while carrying heavy payloads.</li>
        </ol>

        <p>The robot's tool carrying mechanism would comprise of a rotating carousel that could be tilted in both pitch and yaw if the robot was on ground that was not level. This would allow other agricultural robots in the fleet to easily pick up tools from the carousel.</p>

        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={toolbotMath} /></div>
          <div className="image-container"><img alt="" src={toolbotDiagram} /></div>
        </div>
        

        <p>To aid with traction and sinkage, the robot would use treads to drive itself around its environment, distributing its weight over a wider area on the ground. At the core of the robot's chassis suspension would be eight steel torsion bars that would add the necessary springiness to the idler wheel assemblies in contact with the ground. I sized these torsion bars based on the calculated load per wheel to allow for a certain amount of twisting and thus compliance in the swing arm assembly.</p>
        
        <img alt="" src={toolbotSimulink} />
        <p>I then plugged these vehicle parameters into a Simulink model to simulate vehicle dynamics in response to irregularities in terrain. The model consisted of several spring-mass-damper wheels (to model the vehicle's torsion bars) attached to a rigid body that would be hit by a bump on the road. Vertical and angular displacement of the vehicle were plotted and simulated (with the animated vehicle angular/displacement response exaggerated for visualization purposes).</p>

        <div className="image-next-to-container">
          <div className="video-container">
            <video controls>
              <source src={toolbotSimulinkVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>  
          </div>
          <div className="image-container"><img alt="" src={toolbotSimulinkGraphs} /></div>
        </div>

        <p>MATLAB was used to solve for the stresses and strains endured by the torsion bars to ensure they would not yield under the predicted loads. The stress, strain, deflection, and angle of the torsion bar were plotted along the length of the bar to see which areas would be undergoing the most load. In addition, I checked the predicted cyclic stresses against steel's endurance limit to make sure the torsion bars would not fail due to fatigue.</p>

        <img alt="" src={toolbotBendingMaths} />
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>To de-risk the feasibility of the torsion bars, I built a simple prototype torsion bar system out of laser cut and machined aluminum. The torsion bar would be a square extrusion of 1/4"×1/4"×12" A2 tool steel, which had the strength to endure the predicted loads and the stiffness to achieve the desired compliance. The square profile could be easily clamped between two machined aluminum blocks fastened together by two M4 screws. On the opposite end, two circular bushings with square holes slid onto the torsion bar, then the bushings were pressed into two flanged bearings, allowing the torsion bar to twist in place with minimal friction. I put the swing arm under different loads to measure the approximate spring constant and to see if the clamping mechanism would keep the torsion bar in place.</p>

        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={toolbotClamp} /></div>
          <div className="video-container">
            <video controls>
              <source src={toolbotTorsionBar} type="video/mp4" />
              Your browser does not support the video tag.
            </video>  
          </div>
        </div>

        <p>This design was extended to the entire chassis when I modeled it in SolidWorks. The chassis would consist of a skeleton assembly of five T-slotted aluminum extrusions fastened to a central aluminum bar that ran down the length of the assembly. This piece would have four 1/4" machined slots into which the torsion bars would be pressed. This skeleton assembly would be fastened to the two wheel assemblies, which had the swing arms, drive wheel, and idler wheel sandwiched between two laser cut aluminum plates. The drive wheel would be coupled to a 30-tooth sprocket, which would be driven via a #25 chain by a 3250W brushless DC motor with a 12-tooth sprocket. The idler wheel assembly could slide forwards and backwards to properly tension the treads on the robot.</p>

        <img alt="" src={toolbotChassisCAD} />

        <p>SolidWorks was also used to design the tool carousel, which would contain a stepper-motor-driven pinion gear turning an internal spur gear plate. These would be resting on a 1" universal joint under the center of the plate and two ball-joint linkages connected to stepper motors with a non-backdrivable worm gearbox (so that the platform would not move if power was ever cut to the motors). These actuators and transmission elements would allow for pitch, roll, and yaw control of items on the carousel.</p>

        <img alt="" src={toolbotCarouselCAD} />
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>Most parts of the agricultural robot were made of aluminum as it was light and had sufficient strength. I machined the aluminum block that ran down the center of the chassis to have gaps for the transverse T-slotted aluminum extrusions and 1/4" slots for the A2 tool steel torsion bars to sit in. The side plates of the chassis and swing arm plates were laser cut to accommodate complex geometries and features that would be difficult or costly to machine manually (though some features, like the square holes for the square torsion bars in the swing arm plates were machined). Non-structural components like spacers were 3D-printed overnight to offload the fabrication work.</p>
        <img alt="" src={toolbotChassis} />

        <p>Where possible, I used off-the-shelf components to save on time and fabrication, including the robot's treads and twelve 20-tooth plastic pulleys. The treads were composed of several sections of steel-reinforced urethane timing belt laminated with an outer layer of blue nitrile rough-top tread. To join two ends of the belt together, I cut off the blue nitrile tread on one end, exposing the steel wire reinforcement and urethane timing belt layer, and cut the urethane timing belt off the other end to expose the underside of the nitrile tread. I then joined these two exposed ends with super glue and sewed them together with Kevlar thread to add more tensile strength.</p>
        
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={toolbotWheels} /></div>
          <div className="image-container"><img alt="" src={toolbotTreads} /></div>
        </div>

        <p>The electronics for the chassis included two 12Ah drill batteries powering two FOC motor controllers connected to the 3250W brushless DC motors and the robot's radio receiver. Fuses and safety switches were added in between the battery and the rest of the electronics.</p>
        
        <img alt="" src={toolbotElectronics} />

        <p>The tool carousel was made primarily out of laser-cut aluminum pieces. Some non-structural parts were 3D-printed or laser cut to reduce time spent machining. The center of the carousel plate was fastened to a 1" U-joint while the ends were attached to aluminum ball-joint linkages, which were coupled to NEMA 23 stepper motors with worm gearboxes. I controlled these motors with 24V stepper motor drivers receiving signals from a Teensy microcontroller.</p>

        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={toolbotGear} /></div>
          <div className="image-container"><img alt="" src={toolbotCarousel} /></div>
        </div>
        <p>Hardware:</p>
        <ul>
          <li>5 × 40mm×20mm×300mm Aluminum T-Slotted Extrusions</li>
          <li>1 × 1"×1" Stainless Steel Universal Joint</li>
          <li>8 × 1/4"×1/4"×12" A2 Tool Steel Bars</li>
          <li>2 × NEMA 23 20:1 Worm Gearbox NMRV30 Stepper Motors</li>
          <li>1 × Demotor Performance 1" Stainless Steel U-Joint</li>
          <li>1 × NEMA 17 17HS24-2104-ME1K Stepper Motor</li>
          <li>2 × Flipsky 6374 190KV 3250W BLDC Motors</li>
          <li>2 × 14mm Diameter 1045 Carbon Steel Keyed Rotary Shafts</li>
          <li>1 × 10mm to 5mm <i style={{color: "#ffd700"}}>Golden</i> Flexible Shaft Coupling</li>
          <li>2 × 14mm Shaft Diameter Shaft Collars</li>
          <li>1 × 10mm Shaft Diameter Flanged Ball Bearing</li>
          <li>1 × 10mm Shaft Diameter Oil-Embedded Bronze Thrust Bearing</li>
          <li>20 × 3/8" Shaft Diameter Oil-Embedded Bronze Thrust Bearings</li>
          <li>16 × 12mm Shaft Diameter Flanged Ball Bearings</li>
          <li>4 × 3/8" Shaft Diameter Sealed Flanged Ball Bearings</li>
          <li>4 × M6 Ball-Joint Rod Ends with Right-Hand Threads</li>
          <li>2 × #25 Chain 30T Sprockets</li>
          <li>2 × #25 Chain 12T Sprockets</li>
          <li>12 × AndyMark 20T Track Plastic Drive Pulleys with 3/8" Shaft Diameter Shielded Bearings</li>
          <li>Some 0.038" Diameter Kevlar Thread</li>
          <li>A Bunch of AndyMark 2" Wide Blue Roughtop Nitrile Track Timing Belt Spliced Together</li>
          <li>Rolls of #25 Roller Chain</li>
          <li>An Expensive Amount of 20mm×20mm Aluminum T-Slotted Extrusion Corner Brackets</li>
          <li>An Assortment of Aluminum and Steel Shafts and Blocks of Various Sizes</li>
          <li>Lots of 3D-Printed Components</li>
          <li>Plenty of Laser-Cut Acrylic Pieces</li>
          <li>Some M5 Polyethylene Spacers Here and There</li>
          <li>Too Many Fasteners (the Majority of Which Were Probably M5 Screws)</li>
        </ul>  

        <p>Electronics:</p>
        <ul>
          <li>1 × Teensy 4.1</li>
          <li>2 × DeWalt 20V/60V 12Ah FlexVolt Batteries</li>
          <li>2 × DeWalt 20V Battery Adapter with 30A Fuses</li>
          <li>1 × 30A Flip Switch</li>
          <li>2 × Taiss Quadrature Two-Phase 600P/R Rotary Encoders</li>
          <li>3 × DM542T StepperOnline CNC Stepper Motor Drivers</li>
          <li>1 × Flipsky 50A Mini FESC4.20</li>
          <li>1 × Radiolink T8S Receiver and Remote</li>
        </ul>  
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>After a few months, I had the chassis and carousel fully assembled and tested. The tool carousel was able to tilt in both the pitch and roll axis and also spin around. The chassis's torsion-bar suspension was able to support a ~150lb human load and also absorb shocks from terrain irregularities while driving at high speeds.</p>
        <iframe src="https://www.youtube.com/embed/mJ3B9_n0ato" title="Torsion Bar Suspension Tank Chassis" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <ul>
          <li>During testing, there was some noticeable backlash in the pitch and roll axis of the tool carousel. This was because some of the 3D-printed components had been made out of tolerance or had some features deform under load. Printing with higher infill or switching to a stronger material could have reduced the slop in the system.</li>
          <li>I noticed after a lot of chassis drive tests that cracks were forming in the drive pulley by the bolts of the triangular aluminum hub. High stresses were developing in these areas when the drive motor was transmitting torque through these bolts to spin the wheel. A way to mitigate this would be to machine the drive pulley out of metal or to increase the number of bolts used to share the load across more bolt holes.</li>
        </ul>
      </div>
    </div>
  );
}

export default Toolbot;