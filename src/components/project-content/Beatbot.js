import { React } from 'react';

import beatbotCover from '../../assets/images/project-assets/beatbot/beatbot-cover.jpg'
import beatbotChassis from '../../assets/images/project-assets/beatbot/beatbot-chassis.jpg'
import beatbotSchematic from '../../assets/images/project-assets/beatbot/beatbot-schematic.png'
import beatbotCAD from '../../assets/images/project-assets/beatbot/beatbot-cad.jpg'
import beatbotWheel from '../../assets/images/project-assets/beatbot/beatbot-wheel.jpg'
import beatbotCar from '../../assets/images/project-assets/beatbot/beatbot-car.jpg'
import beatbotTrack from '../../assets/images/project-assets/beatbot/beatbot-track.png'
import beatbotRun from '../../assets/images/project-assets/beatbot/beatbot-run.png'

function Beatbot(props) {
  return (
    <div className="project-content-container" id="beatbot-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>The BeatBot was an autonomous line-following car that paced long distance runners along a running track. This was a prototype I built for product design firm <a href="https://www.10xbeta.com/" target="_blank">10XBeta</a> as a second version for the original PUMA BeatBot built by 10XBeta, JWT, and PUMA in 2016.</p>
        <img src={beatbotCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <img src={beatbotChassis} />
        <p>The previous BeatBot had been built on a large, heavy remote-controlled car chassis, which was limiting its maneuverability at high speeds. For the new BeatBot, I decided to go with a smaller and lighter chassis. The challenge thus became fitting the numerous electronic components on a smaller chassis.</p>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>Because a new chassis was being used, I had to redesign many sensor mounts in Solidworks. For instance, the tachometer magnets used to measure wheel rotations would be housed in a new custom SLA 3D-printed wheel mount that would clip onto the car wheel spokes.</p>
        <img src={beatbotCAD} />
        <p>The electroincs of the car would be based around an Arduino Due (because of its higher clock speed), which would interface with the car's sensors and controllers. The line-following would be achieved by an array of six LED-photoresistor pairs. The microcontroller would also receive control inputs from a pair of multiplexers that would feed the input from the RC controller into the Arduino Due.</p>
        <img src={beatbotSchematic} />
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>Once the chassis was changed to the lighter version, I added two plates to mount electronics as well as mounting brackets for some PID-tuning potentiometers and the line-following array of six LED-photoresistor pairs.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img src={beatbotWheel} /></div>
          <div className="image-container"><img src={beatbotCar} /></div>
        </div>
        <p>In addition to changing the chassis, I switched many metal pieces of the old BeatBot to SLA 3D-printed plastic pieces that were strong yet light. This change ultimately reduced the prototype weight by 34% and size by 40%.</p>
        <p>Hardware:</p>
        <ul>
          <li>A Bunch 3D-Printed Parts</li>
          <li>Some M3 Fasteners</li>
          <li>A Few Tiny Magnets</li>
        </ul>  

        <p>Electronics:</p>
        <ul>
          <li>1 × Arduino Due</li>
          <li>2 × Pololu 4-Channel RC Multiplexers</li>
          <li>6 × Green LEDs</li>
          <li>6 × Photoresistors</li>
          <li>1 × Tachometer</li>
          <li>1 × Portable USB Power Bank</li>
          <li>A Bunch of Resistors</li>
        </ul>  
      </div>
      
      <div className="project-content-container-section project-programming">
        <h1>Programming</h1>
        <img src={beatbotTrack} />
        <p>When the BeatBot was placed on a track, the array of photoresistors would be able to detect the position of the line relative to the midline of the car. This deviation would be fed into a PID loop to adjust the car's steering angle so that as it drove forward, it would steer itself into the line to recenter itself over it. A large portion of the prototype development cycle was dedicated to retuning the PID values for the new car chassis.</p>    
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <img src={beatbotRun} />
        <p>After extensive PID parameter tuning, I was able to implement a first pass of the line-following algorithm for the RC car, allowing me to run alongside it.</p>
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <ul>
          <li>Speed-control of the drive motors was not implemented into the line-following controller. Because of the limited resolution of the servo control, coarse steering at high speeds would lead to a lot of overshoot and destabilization of the system. Considering the RC car's speed and adjusting it as part of the line-following algorithm could improve stability.</li>
          <li>More rigor onto measuring and characterizing the response time of the system vs. its measurements and position could help with debugging the system rather than blindly tuning PID parameters.</li>
        </ul>
      </div>
    </div>
  );
}

export default Beatbot;