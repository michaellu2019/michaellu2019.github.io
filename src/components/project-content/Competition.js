import { React } from 'react';

import competitionCover from '../../assets/images/project-assets/competition/competition-cover.png'
import competitionRequirements from '../../assets/images/project-assets/competition/competition-requirements.png'
import competitionSketch from '../../assets/images/project-assets/competition/competition-sketch.png'
import competitionMechanismSketch from '../../assets/images/project-assets/competition/competition-mechanism-sketch.png'
import competitionHandCalcs from '../../assets/images/project-assets/competition/competition-hand-calcs.png'
import competitionCAD from '../../assets/images/project-assets/competition/competition-cad.png'
import competitionLiftCAD from '../../assets/images/project-assets/competition/competition-lift-cad.png'
import competitionWinchCAD from '../../assets/images/project-assets/competition/competition-winch-cad.png'
import competitionChassisCAD from '../../assets/images/project-assets/competition/competition-chassis-cad.png'
import competitionFEA from '../../assets/images/project-assets/competition/competition-fea.png'
import competitionMill from '../../assets/images/project-assets/competition/competition-mill.mp4'
import competitionLift from '../../assets/images/project-assets/competition/competition-lift.png'
import competitionHook from '../../assets/images/project-assets/competition/competition-hook.png'
import competitionSpring from '../../assets/images/project-assets/competition/competition-spring.png'
import competitionWinch from '../../assets/images/project-assets/competition/competition-winch.png'
import competitionHill from '../../assets/images/project-assets/competition/competition-hill.png'

function Competition(props) {
  return (
    <div className="project-content-container" id="competition-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>This robot was built for the final competition of 2.007, MIT’s design and manufacturing class. The aluminum robot featured a belt-driven cascade lift, detachable winch, and tank chassis to lift and pull heavy items on the competition field. Many of the components of the robot were designed and fabricated from aluminum and plastic stock from scratch.</p>
        <img alt="" src={competitionCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <img alt="" src={competitionRequirements} />
        <p>The final competition for the class rewarded robots that could lift and pull heavy game objects over long distances in a certain period of time.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={competitionSketch} /></div>
          <div className="image-container"><img alt="" src={competitionMechanismSketch} /></div>
        </div>
         <p>Based on these requirements, I identified the key mechanisms for my robot were going to be a grippy tank chassis for climbing up the game board hill, a powerful cascade lift to lift the 17N weight and pull down the 20N pendulum, and a high torque winch that could pull the 12N weight on the pulley.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={competitionHandCalcs} /></div>
          <div className="text-container">
            <p>A lot of analysis was done early on to see what torques, speeds, and power outputs were needed to achieve these game objectives. This was especially crucial since robots were only allowed a certain number and type of actuators and batteries from the specified kit of materials.</p>
          </div>
        </div>
        <p>The mechanisms I decided on also had to be manufactured from scratch within the span of two months using the available stock and machines in the class's lab space.</p>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>I used SolidWorks to model the entire competition robot, ensuring that it would be within the 12”×12”×16” competition size limit and 10lbs weight limit. Assembling the entire robot in CAD also helped me figure out the internal spacing of mechanisms to ensure that they would not interfere with each other.</p>
        <img alt="" src={competitionCAD} />
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={competitionLiftCAD} /></div>
          <div className="image-container"><img alt="" src={competitionWinchCAD} /></div>
        </div>
        <p>The lifting mechanism (pictured on the left) I designed was a belt-driven cascading elevator lift with three 14" stages. Because three separate belts were coupled together, each stage would rise and lower simultaneously, allowing for up to 31" of lift in less than 4 seconds with no load. In addition, because a belt was used instead of a cable, the mechanism was able to both lift up and pull down, so it could be reused for different game objectives.</p>
        <p>The winch mechanism was a detachable machine that would be deployed by the main robot to pull the pulley weight. This allowed for the completion of the game objective while the main robot could drive off and complete other tasks, saving time. The winch consisted of two high-torque DC motors coupled together, driving a giant rotating hook that would grab the weight handle and wind up the pulley rope.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={competitionChassisCAD} /></div>
          <div className="image-container"><img alt="" src={competitionFEA} /></div>
        </div>
        <p>The robot chassis was modeled to be a tank chassis with 6mm timing belt treads to give it the most traction as it would climb up and down the competition field hill. Using SolidWorks also allowed me to perform FEA analysis on load-bearing components of the robot’s chassis as well as analysis of the robot’s mass properties to determine its center of gravity. These simulation tools were useful in anticipating any potential performance issues with the robot assembly.</p>
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>All robot structures were fabricated from raw stock, mainly Delrin, acrylic, 6063 aluminum extrusion, and 5052 aluminum sheet metal.</p>
        <video controls>
          <source src={competitionMill} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>The cascade lift was assembled from three 6063 aluminum box extrusion pieces. I milled channels into each extrusion to insert Delrin sliders and added a series of pulleys, brackets, and 6mm timing belt loops so that one goBilda 25-2 torque servo motor with a 2:1 gearbox could move all three stages simultaneously. </p>
        <img alt="" src={competitionLift} />
        <p>Since the cascade lift also had to pull down a pendulum weight, a passively retractable hook was attached to the top. When the robot was pushed into the weight it needed to lift, the hook would be pushed in to lie flush with the weight. However, when pulling down, the hook was pulled out by an elastic band and would hit a hard stop to prevent it from rotating as the weight handle was pulled. This simple design removed the need to add an additional actuator.</p>
        <p>Since the 6mm timing belts would loosen over time, I added spring-loaded idler to keep the belt teeth engaged to the pulley. A spring-loaded idler was necessary since the idler needed to apply more tension as the lift was higher up (as the bracket fastened the driving belt to the next stage was farther away, so the belt became floppier near the drive pulley).</p>
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={competitionHook} /></div>
          <div className="image-container"><img alt="" src={competitionSpring} /></div>
        </div>
        <p>The winch was made from pieces of aluminum stock fastened together and two LDO 217:1 DC motors that spun a laser-cut acrylic winch and hook. The winch would be carried along by the robot, resting on two Delrin rails. When it was to be deployed, the winch hook would spin backwards to push itself off the robot, and the folded legs would come down. These legs spaced the winch from the wall and the pulley weight handle so the hook could spin and grab it consistently.</p>
        <img alt="" src={competitionWinch} />
        <p>Hardware:</p>
        <ul>
          <li>2 × goBilda 25-3 Speed Servo Motors</li>
          <li>1 × goBilda 25-2 Torque Servo Motor</li>
          <li>2 × LDO 217:1 Gearhead DC Motors</li>
          <li>A Bunch of McMaster-Carr Bearings, Plastic Pulleys, Nylon Bushings, Nylon Gears, Couplings, etc.</li>
          <li>Lots of 6mm Timing Belt</li>
          <li>Lots Delrin, 1/8" Thick Acrylic 5052-H32 Aluminum 1/16" Sheet Metal, 6063-T6 Aluminum 1/16" Box Extrusion and 1/8" Box Extrusion, 6061-T6 Angle Extrusion, and 6061-T6 Rods</li>
          <li>Too Many Fasteners (the Majority of Which Were Probably #8 Screws)</li>
        </ul>  

        <p>Electronics:</p>
        <ul>
          <li>1 × Arduino Nano</li>
          <li>1 × MPU6050 Accelerometer</li>
          <li>2 × goBilda Micro Limit Switches</li>
          <li>2 × QTR-1A Reflectance Sensors</li>
          <li>1 × Photoresistor</li>
          <li>1 × goBilda RC Receiver and Remote</li>
          <li>1 × Sony PS2 Receiver and Controller</li>
          <li>4 × AA Batteries</li>
          <li>1 × 7.4V LiPo Battery</li>
        </ul>  
      </div>
      
      <div className="project-content-container-section project-programming">
        <h1>Programming</h1>
        <img alt="" src={competitionHill} />
        <p>To mitigate any imperfections in the robot’s tank chassis assembly (of which there were a couple lol), I used an Arduino Nano and programmed C++ firmware to process MPU6050 accelerometer data so that a PID controller would adjust the PWM signal to the robot’s left and right drive motors, helping the robot drive straight and make precise turns.</p>   
        <p>In addition, the robot had two reflectance sensors that were used for line following to navigate the game field during the autonomous portion of the competition.</p>
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>By the end of the semester, I had built a remote-controlled robot that was able to complete all the game objectives involving moving heavy objects. My robot was seeded second in the competition playoff bracket with the second-highest score on the competition seeding ladder.</p>
        <iframe src="https://www.youtube.com/embed/f2lEhvnP2P4" title="MIT 2.007 Final Project: Big Daddy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <ul>
          <li>The robot was designed in an iterative process (partly due to the nature of the class's weekly deliverables), i.e. design a mechanism, fabricate it, then design and fabricate the next mechanism, etc. However, this meant that a lot of early decisions negatively impacted future mechanisms, especially in terms of leaving space and mounting points. For instance, the elevator was designed and built early on with little consideration for how much space it would take up, making it more difficult to design the winch within the robot dimension limits.</li>
          <li>Too many mechanisms on the robot required manual machining rather than the available computer-aided manufacturing methods e.g. water jetting, laser cutting, 3D printing. This led to bulky, heavy mechanisms that required a lot of fasteners (fasteners ended up adding a significant amount of weight!) and took a lot of time to make. In addition, over reliance on manual machining still led to a lot of fabrication errors, and parts being out of spec, leading to poor manufacturing quality that had to be patched in software.</li>
          <li>The software did minimal processing to sensor data (e.g. the accelerometer data and the line-following sensor data), which led to control software making decisions on noisy data, leading to unreliable autonomous behavior, coupled with the unreliability caused by poor manufacturing.</li>
        </ul>
      </div>
    </div>
  );
}

export default Competition;