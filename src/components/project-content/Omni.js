import { React } from 'react';

import omniCover from '../../assets/images/project-assets/omni/omni-cover.png'
import omniDiagram from '../../assets/images/project-assets/omni/omni-diagram.png'
import omniWheel from '../../assets/images/project-assets/omni/omni-wheel.png'
import omniForwardKinematics from '../../assets/images/project-assets/omni/omni-forward-kinematics.png'
import omniInverseKinematics from '../../assets/images/project-assets/omni/omni-inverse-kinematics.png'
import omniCAD from '../../assets/images/project-assets/omni/omni-cad.png'
import omniCurve from '../../assets/images/project-assets/omni/omni-curve.png'
import omniChassis from '../../assets/images/project-assets/omni/omni-chassis.jpg'
import omniElectronics from '../../assets/images/project-assets/omni/omni-electronics.jpg'
import omniSTM from '../../assets/images/project-assets/omni/omni-stm.JPG'
import omniKp from '../../assets/images/project-assets/omni/omni-kp.png'
import omniKpKd from '../../assets/images/project-assets/omni/omni-kp-kd.png'

function Omni(props) {
  return (
    <div className="project-content-container" id="omni-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>This robot was built as a project for the MIT <a href="https://biomimetics.mit.edu/" rel="noreferrer" target="_blank">Biomimetic Robotics Lab</a>. Intended to test out the perception and navigation software of their new humanoid robot (since the control software for walking had not been finished yet), this robot was designed to move around in all directions as a biped robot would be able to do.</p>
        <img alt="" src={omniCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <p>The robot's ability to move in all directions came from using special wheels called omni-directional wheels. These wheels were shaped like regular wheels, but rollers that could spin sideways lined the perimeter of the wheel, allowing the wheel to roll forward and move sideways (perpendicular to the direction of rolling).</p>
        <img alt="" src={omniWheel} />
        <p>Placing multiple of these on a robot offset at different angles would allow me to combine the force vectors of different wheels to allow for movement and rotation in any direction.</p>
        
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={omniDiagram} /></div>
          <div className="text-container">
            <p>To test out this concept, I quickly developed a small prototype robot using a "kiwi" drive configuration, where 3 wheels would be placed 120 degrees apart from each other around a circle.</p>
            <p>The mathematical explanation is as follows: we would like the robot to move in any direction with velocity <i>v</i> composed of the horizontal and vertical components <i>v<sub>x</sub></i> and <i>v<sub>y</sub></i> and a rotational velocity <i>ω<sub>z</sub></i>. The motor speeds are given by <i>m<sub>1</sub></i>, <i>m<sub>2</sub></i>, and <i>m<sub>3</sub></i>, and since each wheel has radius <i>r</i>, the velocity provided by the <i>i</i>-th wheel is <i>v<sub>i</sub> = m<sub>i</sub>r</i>.</p>
          </div>
        </div>
        <p>To predict the velocity of the robot given the motor speeds, we define a forward-kinematics matrix <b>F<sub>k</sub></b> to be multiplied by a vector of velocities given by the wheels. The first row of the matrix gives the coefficients to multiply each motor speed to get <i>v<sub>x</sub></i>. The second row is for <i>v<sub>y</sub></i>. The last row is for <i>ω<sub>z</sub></i>.</p>
        <img alt="" src={omniForwardKinematics} />
        <p>To get <i>v<sub>x</sub></i>, wheel 1 contributes the horizontal component of <i>v<sub>1</sub></i>, which is given by <i>m<sub>1</sub>r</i> multiplied by <i>cos(90° + 2 × 120° - 90°)</i>. To get the angle the vector <i>v<sub>1</sub></i> points in, we add 90° from the x-axis, then 120° and 120° again since that's how far apart wheel 1 is from the x-axis, so now we are pointing in the direction of the dashed blue line. Then we subtract 90° since <i>v<sub>1</sub></i> is perpendicular to that dashed line. We repeat this equation for the rest of the motors to get all values in the first row of <b>F<sub>k</sub></b>. Taking the cosine of this angle gets us the horizontal component of the velocity vector.</p>
        <p>This process is repeated for the next row, but for <i>v<sub>y</sub></i>, we change all the cosine functions to sine to get the vertical component of the velocity vector. For the final row, all motor speeds contribute an equal proportion to <i>ω<sub>z</sub></i>, so all entries are <i>1</i>.</p>
        <img alt="" src={omniInverseKinematics} />
        <p>Now, given a desired velocity we want to move the robot in, if we solve for our wheel speeds by obtaining the inverse of <i>F<sub>k</sub></i> and multiplying it to both sides of the equation, we can obtain the necessary motor speeds to get that desired velocity, thus solving for the inverse kinematics of the system.</p>
        <p>Using this math, I then implemented it into the firmware of a small test robot with 3 omni-directional wheels to get a prototype omni-directional robot.</p>
        <iframe src="https://www.youtube.com/embed/pC2qX-MVKc4" title="Omni-Directional Wheeled Robot" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>The robot frame was designed to be built out of 8020 aluminum extrusion and 6061 aluminum sheet metal for a lightweight but rigid frame. Four 6" omni-directional wheels were used instead of three to provide more stability to the robot's larger mass (11.33 kg) and footprint, which would be a 16"×16" square frame and an Intel RealSense camera mount that went up 29", which was the height of the lab's humanoid robot.</p>
        <img alt="" src={omniCAD} />
        <p>IG42 24VDC 340 RPM Gear Motors with Encoders and a 1:17 reduction ratio were chosen to achieve the desired 2 m/s speed and 0.5 m/s<sup>2</sup> acceleration. The desired speed and torque values were calculated from those requirements and then ensured to be within the motor's torque-speed curve operating region with some safety margin.</p>
        <img alt="" src={omniCurve} />
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>The 8020-frame made much of the fabrication process relatively painless with the drop-in T nuts, but initial testing revealed certain drop-in T nuts (fasteners that would drop into the 8020 channel and tighten parts together through friction) near the drive motors were coming loose due to vibrations from the omni-wheels propagating upwards. In these areas, close-fit holes were drilled so that the drop-in T nuts would be replaced with long 1/4-20 bolts and lock nuts to keep the frame and motor mounting brackets secured together.</p>
        <img alt="" src={omniChassis} />
        <p>The Intel RealSense camera was mounted to the top of the robot with a 3D-printed mount, and a plexiglass cover was placed over the frame on which electronics could be mounted. An STM32-based microcontroller was chosen for its good computational power, clock speed, and the available motor driver shields that the lab produced.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={omniSTM} /></div>
          <div className="image-container"><img alt="" src={omniElectronics} /></div>
        </div>
        <p>Hardware:</p>
        <ul>
          <li>5 × 1"×1" T-Slotted Framing, 1.5' Long</li>
          <li>4 × 1"×1" T-Slotted Framing, 3' Long</li>
          <li>3 × T-Slotted Framing Inline Pivot</li>
          <li>3 × T-Slotted Framing Perpendicular Pivot</li>
          <li>10 × Silver Gusset Bracket, 1" Long</li>
          <li>4 × Silver Tee Surface Bracket</li>
          <li>1 × 4"×48" Multipurpose 6061 Aluminum Sheet, 1/8" Thick</li>
          <li>4 × IG42 24VDC 340 RPM Gear Motor with Encoder</li>
          <li>4 × 6" Omni-Directional Wheel</li>
          <li>4 × 1/4” ID Aluminum VersaHub</li>
          <li>4 × Anndason Nema 17 Stepper Motor Mounting Bracket</li>
          <li>2 × 12×24” Clear Acrylic Sheet Plexiglass, 1/8” Thick</li>
          <li>Lots of T-Slotted Framing Button-Head Bolts and End-Feed Nuts</li>
          <li>Lots of 1/4-20, M3, and M5 Bolts and Nylon Lock Nuts</li>
        </ul>  

        <p>Electronics:</p>
        <ul>
          <li>1 × STM32 Nucleo-144 Development Board with STM32H743ZI </li>
          <li>1 × MIT Biomimetics Robotics Lab 4-Channel Quadrature Encoder Motor Driver Shield</li>
          <li>1 × 24V LiPo Battery</li>
          <li>1 × 24V LiPo Battery</li>
          <li>1 × FrSky Taranis Radio and X8R Receiver</li> 
          <li>8 × 10kΩ Resistors</li>
        </ul>  
      </div>
      
      <div className="project-content-container-section project-programming">
        <h1>Programming</h1>
        <p>Since the robot's ability to move in any direction depended on a precise amount of speed from each motor, developing a robust speed-controller for the motors was essential. This was achieved by reading the quadrature encoder values of the motor and turning those values into a measured speed of the motor. There would be a setpoint speed to run the motor at (based on the math above), so the error between the setpoint and measured value would be calculated and fed into a feedback controller.</p>    
        <p>The feedback controller implemented was a PID controller with the gain values carefully tuned based on numerous tests to minimize overshoot (as shown by the left graph of a controller with too much proportional gain, where the blue line is the measured motor speed, the green is the setpoint speed, and the red is the PWM signal) and rise time (as shown by the graph on the right). Based on the PID controller's output, the motor PWM signal would be adjusted accordingly.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={omniKp} /></div>
          <div className="image-container"><img alt="" src={omniKpKd} /></div>
        </div>
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>After a few months of design, fabrication, and testing, I took the robot out for a drive in the university lobby. Using a radio controller, I was able to make the robot move in any direction.</p>
        <iframe src="https://www.youtube.com/embed/sVWTkhwmhlI" title="Omni-Directional Robot" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <ul>
          <li>Using smaller diameter omni-directional wheels could reduce the violent vibrations felt by the chassis. With such a large wheel diameter, the gap between rollers was quite large, meaning the rims of the omni-directional wheels were not as smooth as the wheels on my smaller prototype. A smaller wheel diameter would mean a smaller gap between rollers, thus leading to smoother driving.</li>
          <li>The robot's trajectory was essentially controlled by speed measurements of four motors. This meant that if one motor were to briefly miss its setpoint, the robot might not notice. Thus, augmenting the motor speed data with a gyroscope to measure errors in the desired yaw angle of the robot and implementing a controller to fix any error would make the system more robust.</li>
        </ul>
      </div>
    </div>
  );
}

export default Omni;