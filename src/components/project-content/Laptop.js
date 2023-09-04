import { React } from 'react';

import laptopCover from '../../assets/images/project-assets/laptop/laptop-cover.png'
import laptopCAD from '../../assets/images/project-assets/laptop/laptop-cad.png'
import laptopBrackets from '../../assets/images/project-assets/laptop/laptop-brackets.png'
import laptopSolenoid from '../../assets/images/project-assets/laptop/laptop-solenoid.png'
import laptopArm from '../../assets/images/project-assets/laptop/laptop-arm.png'
import laptopROSDiagram from '../../assets/images/project-assets/laptop/laptop-ros-diagram.png'

function Laptop(props) {
  return (
    <div className="project-content-container" id="laptop-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>Laptop Bot was a robot with a 6 degrees-of-freedom (DOF) arm that typed on a laptop’s keyboard. The robot arm took commands from a laptop running ROS to move around and trigger an electrical solenoid end effector to press keyboard keys. The robot aimed to do simple tasks in the most complicated fashion.</p>
        <img src={laptopCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <p>The inspiration for Laptop Bot came from the simple "useless box" and comically intricate Rube-Goldberg machines that I had seen over the years. I wanted to create a complicated robot to complete the common task of using a computer keyboard, whether that would be typing a simple phrase or hitting the power button.</p>
        <p>I eventually settled on building a 6DOF robot arm because of their ridiculous kinematics and so that I could use a laptop running ROS MoveIt to control the machine, which would in turn control the laptop.</p>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>I modeled the entirety of Laptop Bot in SolidWorks, allowing me to test out the workspace of the 6DOF robot arm based on different assemblies to ensure all keyboard keys could be reached. The SolidWorks model was exported to a URDF file that ROS used for inverse kinematics calculations.</p> 
        <img src={laptopCAD} />
        <p>I also designed custom 3D-printed components to mount the arm’s servo motors and the end effector’s solenoid. Using 3D-printed brackets for certain linkages allowed me to specify the linkage length to determine the robot arm's workspace, allowing it to reach the necessary keys on the keyboard.</p>
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>The end effector and two servos of the robot arm were mounted on custom 3D-printed components. Other servos were mounted with aluminum mounting brackets that came with the servos to allow for easy "out-of-the-box" assembly. The arm’s end effector was a DEVMO JF-0530B electronic solenoid that could be extended and retracted to press keyboard keys by sending current through a relay.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img src={laptopBrackets} /></div>
          <div className="image-container"><img src={laptopSolenoid} /></div>
        </div>
        <p>The robot arm was assembled with four HobbyPark servos and two goBilda servos, which were controlled by an Arduino Mega and an Arduino Mega sensor shield. To minimize bouncing of the arm caused by the extended end effector solenoid hitting a keyboard key, I padded the end of the solenoid with foam.</p>
        <img src={laptopArm} />
        <p>Hardware:</p>
        <ul>
          <li>4 × Hobbypark HDR315M 15kg Digital High Torque Servos with Aluminum Mounting Brackets</li>
          <li>2 × goBilda 25-2 Torque Servo Motors</li>
          <li>1 × UCTRONICS 30kg High Torque Digital RC Servo with Brackets</li>
          <li>1 × DEVMO JF-0530B 5N/10mm Pull-Push-Type DC Linear Motion Solenoid Electromagnet</li>
          <li>1 × 12 inch, 1/4 Inch Thick, Birch Plywood Disc</li>
          <li>Some Lego Pieces</li>
          <li>Several 3D-Printed Brackets</li>
          <li>Lots of M3 and M5 Bolts and Nuts</li>
          <li>An Entire Microsoft Surface Laptop 2</li>
        </ul>  

        <p>Electronics:</p>
        <ul>
          <li>1 × Arduino Mega R3</li>
          <li>1 × HiLetgo Arduino Mega Sensor Shield Sensor Expansion Board</li>
          <li>1 × 7.4V LiPo Battery</li>
        </ul>  
      </div>
      
      <div className="project-content-container-section project-programming">
        <h1>Programming</h1>
        <p>To make the robot arm type on the laptop’s keyboard, I used ROS MoveIt’s inverse kinematic solver to determine servo motor joint angles from cartesian coordinates of the arm end effector. These joint angles were published over USB serial communication to a ROS subscriber in the Arduino Mega firmware that controlled the servo motor positions. This allowed the "beefier" laptop to handle all the complex computations for inverse kinematics and then offload the low-level motor control to the microcontroller.</p> 
        <div className="image-next-to-container">
          <div className="image-container"><img src={laptopROSDiagram} /></div>
          <div className="text-container">
            <p>To execute a move sequence to hit certain keys, I first created a map of keyboard key characters to end effector XYZ positions in the robot's frame. Then for each character in a desired phrase (or keyboard sequence), the <span className="code-text">moveit_controller</span> ROS node would retrieve the XYZ position from the character-to-position map and pass it into ROS MoveIt to get the joint angles for the robot arm.</p>
            <p>The <span className="code-text">hardware_controller</span> node would receive these angles through MoveIt's <span className="code-text">joint_states</span> topic. These joint angles would be modified with the appropriate offsets for the corresponding servo motor on the robot arm before being published under the <span className="code-text">controller_joint_states</span> topic.</p>
          </div>
        </div>
        <p>The joint states would then be received by the Arduino Mega over USB serial with the help of the <span className="code-text">serial_node</span> node, and the subscriber of the ROS node running on the Arduino would receive the joint angle data and write the values to the servo motors.</p>
        <p>Turning on the solenoid to push keys was done through a separate set of ROS topics. Everytime the <span className="code-text">moveit_controller</span> completed moving the arm to a keyboard key, it would change the value on the <span className="code-text">endeffector_triggers</span> topic, which would get forwarded downstream through the <span className="code-text">controller_endeffector_triggers</span> topic to the Arduino to write the value to the relay controlling the solenoid.</p>
           
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>After tuning up the software and some hardware adjustments, I was able to make Laptop Bot type its first words into the keyboard.</p>
        <iframe src="https://www.youtube.com/embed/Iixz6tXIA5E" title="Keyboard Typing Robot (ROS MoveIt)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <ul>
          <li>Even though the mechanical design of the robot made it easy to fabricate and assemble, it placed a lot of weight in the upper linkages of the arm. All that mass concentrated far away from the shoulder made the arm slow and difficult to manipulate. The cantilevered mass likely contributed to the harmonic-ish motion of the end effector as it traveled across the keyboard, which you can observe in the video. Moving the actuators closer to the shoulder and using belts to drive upper arm joints would mitigate this. </li>
          <li>Poor quality servos with a lot of backlash meant that the robot arm was not the most rigid. That's why when the solenoid was triggered, the servo backlash would occasionally allow the arm to get pushed away from the keyboard, rather than having all the force being directed into the key to push it down all the way.</li>
          <li>More deliberate publishing of joint states could have made the robot arm move a lot smoother. By naively publishing all the joint angles in the path output by MoveIt at fixed intervals, the robot arm moved rather ungracefully, which was only exacerbated by the poor mechanical assembly.</li>
        </ul>
      </div>
    </div>
  );
}

export default Laptop;