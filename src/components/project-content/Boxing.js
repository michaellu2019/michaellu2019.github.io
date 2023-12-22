import { React } from 'react';

import boxingCover from '../../assets/images/project-assets/boxing/boxing-cover.png'
import boxingSketch from '../../assets/images/project-assets/boxing/boxing-sketch.png'
import boxingCAD from '../../assets/images/project-assets/boxing/boxing-cad.png'
import boxingSchematic from '../../assets/images/project-assets/boxing/boxing-schematic.png'
import boxingGlove from '../../assets/images/project-assets/boxing/boxing-glove.png'
import boxingVest from '../../assets/images/project-assets/boxing/boxing-vest.png'
import boxingDiagram from '../../assets/images/project-assets/boxing/boxing-diagram.png'
import boxingPlots from '../../assets/images/project-assets/boxing/boxing-plots.png'
import boxingGameStateMachine from '../../assets/images/project-assets/boxing/boxing-game-state-machine.png'

function Boxing(props) {
  return (
    <div className="project-content-container" id="boxing-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>IoT boxing was an "Internet of Things" (IoT) version of the iconic Wii Sports boxing game that used an ESP32 WiFi MCU and accelerometer to send real-time punch motion data over WebSockets to an online 3D boxing game. It was made as a final project for the MIT class 6.08 - Intro to EECS via Interconnected Embedded Systems.</p>
        <img alt="" src={boxingCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <img alt="" src={boxingSketch} />
        <p>To give the player the most immersive gaming experience, the game had the electronics inside a pair of boxing gloves and a sports vest. The boxing gloves would hold MPU6050 accelerometers to detect punch movements in real time, and the main electronics, such as the ESP32 and TNTOR Ultra Thin Power Bank, would be mounted inside the sports vest.</p>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>In order to give the wearable game accessories a polished look, the electronics had to blend in with the boxing gloves and sports vest, so custom mounts for the MPU6050 and ESP32 were designed in Autodesk Fusion360 to be 3D printed.</p>
        <img alt="" src={boxingCAD} />
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>The game device was an ESP32 Wi-Fi MCU that communicated with two MPU6050 IMUs over I2C to get acceleration data from both hands of the game player.</p>
        <img alt="" src={boxingSchematic} />
        <p>The 3D-printed electronic housings were mounted to the wearable game accessories using Velcro, which would be relatively inconspicuous. In addition, using Velcro would allow the electronics to be easily removed in case they needed to be replaced or modified.</p>
        <img alt="" src={boxingGlove} />
        <p>To minimize the electronics and weight in the boxing gloves, the MPU6050s in the boxing gloves were wired to the heavier components—the ESP32 and TNTOR Ultra Thin Power Bank—in the sports vest. This would allow the player to throw punches without feeling the added weight of all the electronics.</p>
        <img alt="" src={boxingVest} />
        <p>Hardware:</p>
        <ul>
          <li>1 × Running Vest and a Pair of Boxing Gloves</li>
          <li>A Few M3 Screws Here and There</li>
          <li>A Couple of 3D-Printed Parts</li>
        </ul>  

        <p>Electronics:</p>
        <ul>
          <li>2 × MPU6050 Inertial Measurement Unit</li>
          <li>1 × ESP32 Dev Board</li>
          <li>1 × TNTOR Portable Charger Ultra Slim Power Bank</li>
        </ul>  
      </div>
      
      <div className="project-content-container-section project-programming">
        <h1>Programming</h1>
        <p>The ESP32 firmware processed the acceleration data from the player’s punches and sent them to a Python WebSockets server, which forwarded them to the game website. Written in HTML, CSS, and JavaScript (using Three.js for graphics and Cannon.js for physics), the game website would control a 3D model of a boxer based on the received movements and would also save player scores in a backend database.</p>    
        <img alt="" src={boxingDiagram} />
        <p>Scoring and classification of punches involved comparing the punch IMU data to some thresholds as well as a template data plot and running a correlation algorithm that would produce a similarity score, meaning that similar plots (as shown by the pairs of colored lines overlapping) would mean higher scores. These two methods would tell the game what punch the player threw and how well they threw it.</p>
        <img alt="" src={boxingPlots} />
        <p>This data would then be forwarded via WebSockets to the game server, which would run the following state machine to dictate the flow of the game.</p>
        <img alt="" src={boxingGameStateMachine} />
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>With all electrical, mechanical, and software components integrated together, we were able to create an IoT boxing game where a player could compete against a computer or another player to see who could throw the best punches.</p>
        <iframe src="https://www.youtube.com/embed/XnNphWLp-24" title="MIT 6.08 Final Project - Boxing Simulator" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <ul>
          <li>Threshold-based punch classification worked well for some players but not others. Performing some form of normalization with measurement data could have made the classifier more generalizable to more players.</li>
          <li>Yeah... Some of the animations were scuffed not gonna lie. Shoulda read up on quaternions a bit more...</li>
        </ul>
      </div>
    </div>
  );
}

export default Boxing;