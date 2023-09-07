import { React } from 'react';

import tobyCover from '../../assets/images/project-assets/toby/toby-cover.png'
import tobyBox from '../../assets/images/project-assets/toby/toby-box.png'
import tobySketches from '../../assets/images/project-assets/toby/toby-sketches.jpg'
import tobyDiagram from '../../assets/images/project-assets/toby/toby-diagram.png'
import tobyTray from '../../assets/images/project-assets/toby/toby-tray.png'
import tobyHead from '../../assets/images/project-assets/toby/toby-head.png'
import tobyVision from '../../assets/images/project-assets/toby/toby-vision.png'
import tobyPresentation from '../../assets/images/project-assets/toby/toby-presentation.png'

function Toby(props) {
  return (
    <div className="project-content-container" id="toby-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>Toby was a homemade robot built primarily out of ordinary items: cardboard, paper, Legos, cordless drills, and a smartphone.</p>
        <img src={tobyCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <img src={tobyBox} />
        <p>I noticed this #morethanabox illustration on one of my Amazon packages over the summer, and it inspired me to push the limits of what a simple cardboard box could become, so I decided to create a giant robot named Toby out of ordinary items. I especially explored through many post-it sketches how to make Toby seem as friendly as possible.</p>
        <img src={tobySketches} />
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>The crux of Toby’s design was that computationally heavy processes would be handled by a smartphone, which would communicate over Bluetooth with an Arduino Mega to control the movement of Toby with servo motors that controlled his arms and cordless drill motors that controlled his wheels.</p>
        <img src={tobyDiagram} />
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>The drivetrain chassis for Toby consisted of two cordless drills bolted to a plastic lunch tray. The main electronics included an Arduino Mega and Servo Shield, L298N Motor Driver, HC-06 Bluetooth Module, SG90 Micro Servo Motors, and two Hi-Spec Cordless Drills.</p>
        <img src={tobyTray} />
        <p>The smartphone was mounted inside Toby’s head and the camera was put behind Toby’s little mouth opening. This would allow Toby to observe his surroundings with the smartphone’s built-in camera and to run computer vision algorithms to respond to his environment.</p>
        <img src={tobyHead} />
        <p>Hardware:</p>
        <ul>
          <li>4 × SG90 Micro Servo Motors</li>
          <li>2 × RDS3218 20KG Dual Shaft U-Mount RC Digital Servo</li>
          <li>2 × Hi-Spec Cordless Drills</li>
          <li>1 × Lunch Tray</li>
          <li>Plenty of Cardboard and Tape...</li>
        </ul>  

        <p>Electronics:</p>
        <ul>
          <li>1 × Arduino Mega</li>
          <li>1 × Arduino Mega Servo Shield</li>
          <li>1 × L298N Motor Driver</li>
          <li>1 × HC-06 Bluetooth Module</li>
          <li>1 × HC-06 Bluetooth Module</li>
          <li>1 × HC-06 Bluetooth Module</li>
          <li>1 × HC-06 Bluetooth Module</li>
          <li>2 × Hi-Spec Cordless Drills</li>
          <li>1 × LM2596 DC to DC Buck Converter</li>
          <li>1 × 12V NiMH Battery</li>
          <li>1 × Bluetooth Speaker</li>
          <li>1 × LG Smartphone</li>
        </ul>  
      </div>
      
      <div className="project-content-container-section project-programming">
        <h1>Programming</h1>
        <img src={tobyVision} />
        <p>The smartphone inside Toby’s head ran a custom Android app that I wrote called “Annice Brain” so that Toby could carry out intensive computer vision (OpenCV Haar Cascade Classifiers) and speech recognition (CMU PocketSphinx) algorithms.</p>    
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>With all parts of the system integrated together, Toby was able to drive around, track the faces of humans, obey certain voice commands, and move his little flipper-like penguin arms. Because of the relatively simple materials used for Toby, multiple local elementary schools asked me to present my project to their students to pique their interest in robotics.</p>
        <img src={tobyPresentation} />
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <ul>
          <li>Over the course of several months, Toby's heavy head caved into his body, the main box of the robot was significantly warped. I probably backed myself into a tough corner building the entire structure out of cardboard, but adding diagonal cross member trusses into the assembly (even if they were made out of cardboard) would add some rigidity to the main body.</li>
          <li>Because I decided to zip tie two drills into a lunch tray and relied on a frictional force between the drill chuck and a rubber wheel to drive a robot, the performance of the drive system was very unreliable. Obviously, pledging to build a robot out of simple materials removes the likelihood of a high-quality assembly, so adding an inertial measurement unit and some software hacks could have at least helped the robot drive straight for more than two meters.</li>
        </ul>
      </div>
    </div>
  );
}

export default Toby;