import { React } from 'react';

import legoCover from '../../assets/images/project-assets/lego/lego-cover.png'
import legoIdea from '../../assets/images/project-assets/lego/lego-idea.png'
import legoCAD from '../../assets/images/project-assets/lego/lego-cad.png'
import legoCADGripper from '../../assets/images/project-assets/lego/lego-cad-gripper.png'
import legoFingers from '../../assets/images/project-assets/lego/lego-fingers.png'
import legoCompliance from '../../assets/images/project-assets/lego/lego-compliance.jpg'
import legoUR5 from '../../assets/images/project-assets/lego/lego-ur5.png'
import legoColorVisionImage from '../../assets/images/project-assets/lego/lego-color-vision-image.png'
import legoBlackAndWhiteVisionImage from '../../assets/images/project-assets/lego/lego-black-and-white-vision-image.png'
import legoControl from '../../assets/images/project-assets/lego/lego-control.mp4'
import legoVision from '../../assets/images/project-assets/lego/lego-vision.mp4'

function Lego(props) {
  return (
    <div className="project-content-container" id="lego-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>The Lego Building Bot was a ROS-controlled 6 degrees-of-freedom (DOF) UR5 robot arm that leveraged OpenCV computer vision and a compliant gripper to retrieve and assemble giant Lego® bricks for the final competition of 2.12 - Introduction to Robotics.</p>
        <img src={legoCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <img src={legoIdea} />
        <p>Because Lego® bricks would start off scattered on the table in many different orientations, our team wanted to design and end effector that was compliant. This meant that if the robot arm was not perfectly aligned with a Lego® brick, the grabbing end effector would be able to shift into place to align itself with the Lego® brick.</p>
        <p>While we considered many different approaches to achieve compliance, we settled on using flexible 3D-printer filament strands due to their availability and deflection characteristics.</p>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>We designed our gripper two have two 3D-printed fingers that would slide into the stud holes of the Lego® bricks. One finger would be stationary, and the other one would be mounted on a servo motor to spin and grip the flange of the stud.</p>
        <p>3D modeling the gripper and Lego® brick in Solidworks helped with visualizing and determining how much room there would be in the end effector claws when grabbing the Lego® brick hole edges for different claw shapes and sizes.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img src={legoCAD} /></div>
          <div className="image-container"><img src={legoCADGripper} /></div>
        </div>
        <img src={null} />
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <div className="image-next-to-container">
          <div className="image-container"><img src={legoFingers} /></div>
          <div className="image-container"><img src={legoCompliance} /></div>
        </div>
        <p>The end effector frame was built out of two aluminum 5052 bent sheet metal brackets and two plates of machined aluminum 6061. The gripper and UR5 robot arm parts of the end effector were connected with six 1.75mm PETG 3D-printer filament strands, which were attached to the machined plates via 3D-printed brackets. The servo fingers were 3D-printed, and one of them was attached to a goBilda servo motor.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img src={legoUR5} /></div>
          <div className="text-container">
            <p>The end effector was fastened to a UR5 mounting plate that attached to the final link of a UR5 robot.</p>
            <p>Hardware:</p>
            <ul>
              <li>1 × goBilda 25-2 Torque Servo Motor</li>
              <li>5052-H32 Aluminum 1/16" Sheet Metal and 6061-T6 Aluminum 1/2" Plates</li>
              <li>1.75mm PETG 3D-Printer Filament</li>
              <li>Lots of Fasteners</li>
            </ul>  

            <p>Electronics:</p>
            <ul>
              <li>1 × Arduino Uno R3</li>
              <li>1 × USB Webcam</li>
            </ul>  
          </div>
        </div>
      </div>
      
      <div className="project-content-container-section project-programming">
        <h1>Programming</h1>
        <div className="image-next-to-container">
          <div className="image-container"><img src={legoColorVisionImage} /></div>
          <div className="image-container"><img src={legoBlackAndWhiteVisionImage} /></div>
        </div>
        <p>OpenCV algorithms were run on the UR5 camera feed to detect Lego® bricks. Hue segmentation was used to isolate bricks of certain colors, followed by brick layer filtering based on Intel RealSense depth camera data, and finally contour detection with Hough transforms to draw bounding boxes around bricks. Erosion and dilation were used in between steps to remove noise from the image, improving brick detection performance. For a selected brick, we then drew a bounding box rectangle around it and calculated the centroid of the rectangle to be the "location" of the brick.</p>
        <video controls>
          <source src={legoVision} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>The UR5 robot arm was controlled by pressing laptop keyboard arrow keys, which would change the cartesian coordinates of the UR5 end effector. These coordinates would be passed into ROS MoveIt, which would return the UR5 joint angles and a planned path to move to those angles. The gripper was controlled by an Arduino Uno that would read USB serial commands from the laptop.</p>  
        <video controls>
          <source src={legoControl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>  
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>Combining the two software components, we were able to build a robot arm where a human could teleoperate the robot arm with visual assistance from the output of the comptuer vision system. The robot arm could be indexed to the desired approximate position of a Lego® brick, and the compliance in the gripper would remove the need to be perfectly aligned to grab the brick.</p>
        <iframe src="https://www.youtube.com/embed/oTqwCtPKNQM" title="MIT 2.12 Final Project: Lego-Building UR5 Robot Arm" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <p>Some improvements include:</p>
        <ul>
          <li>Fine-tuning the 3D-printed filament compliance mechanism would make the end effector more reliable, since we often found the strands would plastically deform if slammed into the block. Experimenting with different strand materials, configurations, dimensions, and quantities could help with this.</li>
          <li>Integrating the computer vision and control software to make the robot fully autonomous would improve the robot performance, since human-controlled indexing made the robot extremely slow.</li>
        </ul>
      </div>
    </div>
  );
}

export default Lego;