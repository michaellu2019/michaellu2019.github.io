import { React } from 'react';

import donkeyCover from '../../assets/images/project-assets/donkey/donkey-cover.jpg'
import donkeySketch from '../../assets/images/project-assets/donkey/donkey-sketch.png'
import donkeyKinematics from '../../assets/images/project-assets/donkey/donkey-kinematics.jpg'
import donkeyCAD from '../../assets/images/project-assets/donkey/donkey-cad.png'
import donkeyTopView from '../../assets/images/project-assets/donkey/donkey-top-view.jpg'

function Donkey(props) {
  return (
    <div className="project-content-container" id="donkey-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>The robot donkey was a WiFi-controlled quadruped that walked using inverse kinematics. It had four legs, each with 3-degrees-of-freedom (DOF), a 2-DOF neck/head, and two mini speakers for audio output. The robot was built as a personal project to emulate quadruped locomotion.</p>
        <img src={donkeyCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <img src={donkeySketch} />
        <p>To build a 12-DOF quadruped and manipulate its orientation and position, I had to figure out how to pass in a 3D position and turn it into a set of angles for the servos to rotate to. Inverse kinematics would provide an easy way to calculate these values.</p>
        <p>Each robot leg had a "shoulder" joint that connected it to the body and allowed the leg to swing to side, an "upper leg joint" that allowed the entire leg to swing forward and backward, and an "elbow joint" that connected the upper and lower leg.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img src={donkeyKinematics} /></div>
          <div className="text-container">
            <p>I tackled the problem by isolating one leg and modeling it as a two-linkage system attached to the body with a pivot joint. I then viewed this system as an isosceles triangle and used the law of cosines and triangle geometric properties to solve for the two unique angle values that would give a particular distance between the shoulder joint and ground.</p>
            <p>This process was repeated for all the legs and different joints on the robot. A lot of trigonometry occurred... Like... a lot...</p>
          </div>
        </div>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>The robot donkey was designed for ease-of-assembly, so parts were selected to minimize the need for fabrication (especially during the COVID-19 pandemic, when most maker spaces and machine shops were closed). This was why high-torque HobbyPark servos that came with aluminum mounting brackets were chosen, as it made it easy to assemble four 3-DOF legs around a main wooden body with servo parts "straight out of the box."</p>
        <p>For the robot’s feet, I used Autodesk Inventor to design four 3D-printed ball-point hooves that could be fastened to the servo brackets and were covered with rubber tips for better traction with the ground.</p>
        <img src={donkeyCAD} />
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>Because the robot donkey was designed to be easily assembled, most of the fabrication and assembly process involved fastening together different off-the-shelf components or 3D-printed parts.</p>
        <img src={donkeyTopView} />
        <p>Hardware:</p>
        <ul>
          <li>12 × Hobbypark HDR315M 15kg Digital High Torque Servos with Aluminum Mounting Brackets</li>  
          <li>2 × SG90 Micro Servos</li>
          <li>Lots of M3 Bolts and Nuts</li>
          <li>Several 3D-Printed Hoofs and Micro Servo Brackets and a Donkey Neck or Something...</li>
          <li>A Block of Wood and Some Foam Core</li>
          <li>A Pair of Googly Eyes 👀</li>
        </ul>  

        <p>Electronics:</p>
        <ul>
          <li>1 × Raspberry Pi</li>  
          <li>1 × PCA9695 16-Channel Servo Driver</li>
          <li>1 × Super Mini PAM8403 Audio Amplifier </li>
          <li>2 × MakerHawk 3W 8Ω Mini Speakers</li>
          <li>1 × 7.4V LiPo Battery</li>
          <li>1 × Small USB Power Bank</li>
        </ul>  
      </div>
      
      <div className="project-content-container-section project-programming">
        <h1>Programming</h1>
        <p>The robot was controlled by a Raspberry Pi Python script that rotated the leg joints based on inverse kinematics to move the robot to precise positions and orientations. Once the Raspberry Pi connected to the Internet after powering up, I could SSH into the board and control the robot from the command line on my laptop over WiFi.</p>
        <iframe src="https://www.youtube.com/embed/aikBnfc7GT0" title="DIY Quadruped Robot" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <p>The <a href="https://github.com/michaellu2019/dog" target="_blank">software</a> was split into several modules. One module defined all robot constants, another module was used for all vector-mathematics, one module was used to calculate inverse kinematics and write values to the servo motors, and the final module took in keyboard commands to control the robot.</p>
        <p>To make the robot walk, I defined several key coordinates of the donkey's foot, which were different points in the foot's during the robot's gait. While walking, the robot would move its feet to each of these points repeatedly.</p>
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>Eventually, I was able to program a teleoperated quadruped donkey that could walk in all directions. I also programmed the Raspberry Pi to play audio clips through the robot's mini speakers.</p>
        <iframe src="https://www.youtube.com/embed/A4OMXvGx_4I" title="Ogres Have Layers" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <ul>
          <li>The mechanical design of the robot made it easy to fabricate and assemble, but also placed a lot of weight in the legs as mass was distributed throughout the leg. This made the legs super slow, resulting in a lot of drift and tipping as the robot walked. This is why a lot of legged robots keep actuators closer to the hip and shoulder area and use belt-drives to rotate far-away joints, reducing the amount of mass swinging around.</li>
          <li>The electrical system of the robot was simple and rudimentary but also meant that the high-power LiPo battery would often cause the servo driver board to ignite if too much current was drawn. This was patched up in software by setting joint limits to reduce the chance of servo motors stalling, but a fuse, breaker, or current-sensing component would make the robot's servo driver board less inclined to burst into flames.</li>
          <li>The software of the robot was written in Python, which made programming convenient, but could have negatively affected the robot's speed, being a slower language. This would matter more, as the robot donkey required joint angles to be written quickly to the servo motor to ensure it wouldn't start tipping over.</li>
        </ul>
      </div>
    </div>
  );
}

export default Donkey;