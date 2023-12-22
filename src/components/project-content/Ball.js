import { React } from 'react';

import ballCover from '../../assets/images/project-assets/ball/ball-cover.JPG'
import ballPhysics from '../../assets/images/project-assets/ball/ball-physics.png'
import ballSketch from '../../assets/images/project-assets/ball/ball-sketch.png'
import ballCad from '../../assets/images/project-assets/ball/ball-cad.png'
import ballCadSection from '../../assets/images/project-assets/ball/ball-cad-section.png'
import ballBlockDiagram from '../../assets/images/project-assets/ball/ball-block-diagram.png'
import ballBall from '../../assets/images/project-assets/ball/ball-ball.JPG'
import ballDriveSystem from '../../assets/images/project-assets/ball/ball-drive-system.JPG'
import ballPendulum from '../../assets/images/project-assets/ball/ball-pendulum.JPG'
import ballFlywheel from '../../assets/images/project-assets/ball/ball-flywheel.JPG'
import ballNeck from '../../assets/images/project-assets/ball/ball-neck.JPG'
import ballHead from '../../assets/images/project-assets/ball/ball-head.JPG'
import ballSchematic from '../../assets/images/project-assets/ball/ball-schematic.png'
import ballMechanism from '../../assets/images/project-assets/ball/ball-mechanism.JPG'
import ballPaint from '../../assets/images/project-assets/ball/ball-paint.JPG'
import ballSoftwareDiagram from '../../assets/images/project-assets/ball/ball-software-diagram.png'
import ballPsocBlocks from '../../assets/images/project-assets/ball/ball-psoc-blocks.png'
import ballPsocConfig from '../../assets/images/project-assets/ball/ball-psoc-config.png'
import ballRadioScope from '../../assets/images/project-assets/ball/ball-radio-scope.png'
import ballMotorScope from '../../assets/images/project-assets/ball/ball-motor-scope.png'
import ballPID from '../../assets/images/project-assets/ball/ball-pid.png'
import ballStabilization from '../../assets/images/project-assets/ball/ball-stabilization.png'
// import ballBox from '../../assets/images/project-assets/ball/ball-box.JPG'

function Ball(props) {
  return (
    <div className="project-content-container" id="ball-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>Based on the famous <a href="https://youtu.be/_RWWKFqv7EM" rel="noreferrer" target="_blank">BB-8 droid</a> from Star Wars, this robot was a remote-controlled 20"-diameter ball with a magnetically attached head. A combination of machined, 3D-printed, and laser cut components controlled by a PSoC with firmware written in C, this project was completed over the course of 4 weeks as a final project for the MIT class 6.115 - Microcomputer Project Laboratory.</p>
        <iframe src="https://www.youtube.com/embed/xmnu_rDfkFk" title="MIT 6.115 Final Project: BB-8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <img alt="" src={ballCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <p>In addition to having an excuse to bring an iconic Star Wars character to life, I saw this project as an opportunity to solve an interesting control problem: Stabilizing a ball on flat ground so that it wouldn't rock back and forth.</p>
        <img alt="" src={ballPhysics} />
        <p>Balls can be viewed as marginally stable systems, meaning that if perturbed gently, a ball will rock back and forth and oscillate. Imagine a ball is on flat ground and perturbed such that the ball tips but does not roll, and a small angle <i>θ</i> is formed between the gravity vector and the radius from the center of the ball to the contact point <i>P</i> as shown above. One can imagine that if there were no damping in the system, <i>θ</i> would oscillate as time <i>t</i> goes on as shown in the graph of the dynamics. If damping were added to the system through some control loop, the graph of the dynamics would be seen converging to zero.</p>
        <img alt="" src={ballSketch} />
        <p>To stabilize a large ball, I brainstormed some mechanisms to put inside the ball as a means of controlling it. I considered putting a large wheel inside the ball that would drive inside the ball as if it were a giant hamster wheel. I also considered building a platform with four omni-wheels so that ball movement could be omni-directional. I eventually ran with the idea of placing a suspended pendulum inside the ball, with a heavy mass at the bottom that could be swung around to counter the tilt of the ball.</p>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>To develop a concrete build plan and design with such a short time frame, BB-8 was modeled in SolidWorks as thoroughly as possible. This would help with creating 3D-printed parts with the necessary dimensions and ensuring no collisions would occur between parts. Using the pendulum design, the BB-8 ball would contain three main control mechanisms: a drive system to move forward and backward, a pendulum to steer, and a flywheel to turn on the spot. This design was chosen because other designs would require a perfectly round closed 20"-diameter sphere, which I had no way of obtaining or fabricating in four weeks (all 20"-diameter balls that were available for purchase online had some sort of opening).</p>
        <img alt="" src={ballCad} />
        <p>The system would contain three motors. Motor A would control the tilt of the pendulum by driving a pinion gear that would mesh with a giant gear on the main drive body, thus allowing the heavy pendulum to swing left and right to shift the robot's center of mass in each direction, steering the robot around the x-axis. The central axis of the ball would be connected to the robot's drive system with a free-spinning axle and Motor B. Motor B would be coupled to a hub that would spin the entire ball around the y-axis, allowing it to drive forward and backwards like a giant wheel. The flywheel, driven by Motor C, would be a heavy spinning disk that would allow the robot to rotate around the z-axis. If the heavy disk was spinning quickly in one direction, the entire ball would spin in the opposite direction to conserve angular momentum.</p>
        <p>The head structure would then be placed on a platform of caster wheels that would roll on top of the ball and would have a set of strong magnets underneath. The neck structure of the robot would also have a pair of magnets to pull the head into the ball, keeping it in place to prevent it from slipping off.</p>
        <img alt="" src={ballCadSection} />
        <p>The electronics of BB-8 would be centered around the PSoC CY8C58LP (after all, the class was sponsored by Cypress). The microcontroller would get data from a Flysky RC Receiver for user control and an MPU6050 accelerometer to get the tilt of the robot for stabilization control. This data would go through the firmware of the robot to be mapped to appropriate control outputs, leveraging DBH-12 Motor drivers to control the 3 Pololu 12V Gearmotors.</p>
        <img alt="" src={ballBlockDiagram} />
        {/* <p>INSERT FEA AND MOTOR SIZING?</p> */}
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>The biggest risk of the project was getting a rigid 20"-diameter ball (the actual size of the BB-8 robot from Star Wars) in less than a week to offload as much difficult fabrication work as possible. Thankfully, I was able to find a 20" acrylic lamp post globe on Amazon with a reasonable ship date. To fit the entire mechanism inside, the neck hole of the acrylic ball was enlarged by cutting out more material with an oscillating saw. Mounting holes for a drive hub and washer plate that would house the drive shaft bearing were drilled and tapped.</p> 
        <p>Unfortunately, the ball was not uniform thickness (likely due to being blow molded) and was brittle in certain areas, which led to the formation of a few cracks during fabrication. It would eventually have to be reinforced on the inside with a layer of fiberglass and epoxy (inspired by techniques used in making boat hulls!).</p>
        <img alt="" src={ballBall} />
        <p>The fabrication methods chosen for each component of the robot were based on the need for structural integrity, fabrication time, and fabrication effort. Structural components of BB-8 were manually machined from 6063-T6 aluminum stock. Non-structural precision parts, such as gears and mounting blocks, were 3D-printed. 3D printing was also useful for offloading a lot of fabrication to a precise machine that could run overnight. Non-structural components that needed to be produced in high volume quickly, such as mounting plates, were laser cut. Laser cutting was good for rapidly prototyping and testing out different designs.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={ballDriveSystem} /></div>
          <div className="image-container"><img alt="" src={ballPendulum} /></div>
          <div className="image-container"><img alt="" src={ballFlywheel} /></div>
        </div>
        <p>The drive system was made from aluminum to support the weight of the pendulum. A giant 3D-printed gear was fastened to the bottom to mesh with the 3D-printed pinion gear of the pendulum, whose structure was also built out of aluminum. The flywheel was a thick 3D-printed dome filled with tiny lead balls.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={ballNeck} /></div>
          <div className="image-container"><img alt="" src={ballHead} /></div>
        </div>
        <p>The head of BB-8 would stay attached to the body with the help of two pairs of strong neodymium magnets press-fit and glued into two 3D-printed magnet mounts that were shaped to conform with the curvature of the 20" ball. The magnet mount in the ball was attached to a threaded rod that was spun by a continuous rotation goBilda 25-3 speed servo. The magnet mount in the head was attached to another threaded road that fastened to the Styrofoam hemisphere structure. This rod spun freely inside the bearings of a tripod-like structure that would roll on top of the ball. The rollers shown in the picture were eventually replaced with caster wheels for less friction.</p>
        <img alt="" id="schematic" src={ballSchematic} />
        <p>After all the electronics were mounted based on the schematic shown above, the full mechanism was able to control BB-8 to roll around and steer while maintaining stability. The battery was mounted near the end of the pendulum to shift the center of mass as far down as possible, helping with stability. The PSoC was mounted near the drive motor since that would make it close to the opening of the ball, keeping it easily accessible for uploading and debugging code.</p>
        <img alt="" src={ballMechanism} />
        <p>Once the full assembly was completed and an initial set of control software was implemented, the acrylic ball was spray painted white before being embellished with red and silver paint in the theme of <a href="https://youtu.be/IldZGkOA0VI" rel="noreferrer" target="_blank">MIT's decision droid</a> with the help of some friends who were far more artistically gifted than I was.</p>
        <img alt="" src={ballPaint} />
        <p>Hardware:</p>
        <ul>
          <li>1 × KastLite 20" Acrylic Lamp Post Globe</li>
          <li>1 × 11.5"×6" inJuvale White Half Sphere Foam Ball</li>
          <li>3 × WMYCONGCONG 37mm Diameter DC Geared Motor Mounting Bracket</li>
          <li>3 × Caster Wheels</li>
          <li>4 × 0.25"-Diameter 0.75"-Tall Neodymium Cylinder Magnets</li>
          <li>1 × 2lb Bag of Metal Magery Lead Shot Balls</li>
          <li>3 × Pololu 6mm Shaft Mounting Hub</li>
          <li>1 × goBilda goBilda 25-3 Speed Servo Motor</li>
          <li>1 × Pololu 131:1 37D 12V Gearmotor</li>
          <li>1 × Pololu 50:1 37D 12V Gearmotor</li>
          <li>1 × Pololu 19:1 37D 12V Gearmotor</li>
          <li>Some Fiberglass Cloth and KARBXON KBX-11 Ultra Bond Epoxy Resin</li>
          <li>A Bunch of McMaster-Carr Bearings and Nylon Bushings and Couplings</li>
          <li>A Decent Amount of 6063-T6 Aluminum 1/16" Box Extrusion and 6061-T6 Angle Extrusion and 6061-T6 Rods</li>
          <li>Lots of 3D-Printed Components</li>
          <li>Plenty of Laser-Cut Acrylic Pieces</li>
          <li>Too Many Fasteners (the Majority of Which Are Probably #8 and M3 Screws)</li>
        </ul>  

        <p>Electronics:</p>
        <ul>
          <li>1 × PSoC CY8CKIT-059 Prototyping Kit</li>
          <li>2 × DBH-12 Motor Driver</li>
          <li>1 × HiLetgo GY-521 MPU6050</li>
          <li>1 × Flysky RC Receiver and Remote</li>
          <li>1 × LM7805 Linear Regulator</li>
          <li>1 × 12V NiMH Battery</li>
        </ul>  
      </div>
      
      <div className="project-content-container-section project-programming">
        <h1>Programming</h1>
        <p>The software for BB-8 was written in C for the PSoC 5LP system (which was the microcontroller family we were forced to use for the class) with Cypress's PSoC Creator. The main program loop involved reading data from the robot's accelerometer, motor encoders, and RC receiver then controlling/stabilizing the ball based on those inputs.</p>
        <img alt="" src={ballSoftwareDiagram} />
        <p>To figure out how to pull data from the RC receiver and motor encoders, I first hooked up the respective modules to an oscilloscope to observe the signal and how it changed as data came in.</p>
        <div className="image-next-to-container">
          <div className="image-container">
            <img alt="" src={ballRadioScope} />
            <img alt="" src={ballMotorScope} />
          </div>
          <div className="text-container">
            <p>The top set of captures showed two channels of the RC receiver, which were 54Hz square waves. The duty cycle of a particular channel's square wave would change based on the position of the remote's joystick for that channel (as shown by the yellow square wave changing from 10.365% duty cycle to 5.448%).</p>
            <p>The bottom pair of scope captures showed a quadrature encoder signal for one motor, where two square waves could be observed. The frequency of the square waves was indicative of the speed, i.e. a faster frequency indicated the motor was spinning faster. The phase offset of the two square waves indicated the direction in which the motor was spinning.</p>
          </div>
        </div>
        <p>Cypress PSoC Creator schematic blocks were configured to capture this data. RC channel square wave duty cycle was counted with a timer block to deduce how far the remote joystick was being pushed. The quadrature encoder block was used to pull in motor encoder data. Finally, MPU6050 accelerometer data was received over I2C using the I2C block.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img alt="" src={ballPsocBlocks} /></div>
          <div className="image-container"><img alt="" src={ballPsocConfig} /></div>
        </div>
        <p>With data received from the accelerometer, I then moved on to implement a PD controller to prevent the ball from rocking back and forth when it was supposed to be stationary. The controller would calculate the tilt angle measured by the MPU6050 (either the pitch or roll of the robot) and then apply a proportional and derivative gain to the signal to output a motor PWM signal.</p>    
        <img alt="" src={ballPID} />
        <p>If the robot was leaning forward/backward when it was supposed to be upright, the robot would drive forward/backward in the same direction to compensate (like a segway/hoverboard driving in the direction of tilt). If it was leaning to the side, the pendulum would swing out then back in the opposite direction to bring the center of mass back in to have the ball stand straight up.</p>
        <img alt="" src={ballStabilization} />
        <p>MPU6050 data was recorded to test the efficacy of the PD controller. The plot on the left demonstrated that the ball experienced significant harmonic motion for 6+ seconds when perturbed slightly without feedback control. With the PD controller running, when the ball was perturbed slightly, it was able to dampen the motion within 4 seconds.</p>
        <iframe src="https://www.youtube.com/embed/Skfwr8KdXXk" title="Making MIT BB-8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>After four weeks of intense work under a tight schedule, I was able to build a prototype of the MIT-themed BB-8 droid for my final project with the necessary control software to stabilize itself and drive on the various terrains of MIT's campus.</p>
        <iframe src="https://www.youtube.com/embed/Olh6qdgxJgc" title="BB-8 @ MIT" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <ul>
          <li>In addition to the control software, the stability of BB-8 relied on having a low center of mass. While building the central drive system out of aluminum gave it good structural integrity, I might have been able to get away with 3D printing it. This would have reduced the time spent machining and assembling (by overnight 3D printing a design) aluminum components that were prone to human fabrication error (which is a lot if it's made by me) and also would have brought down the weight and part count (fasteners are heavy!). A lighter drive system structure would allow the center of mass to shift farther down, improving system stability.</li>
          <li>Accelerometer plots and video footage indicated that the drive motors for BB-8 were not fast enough to always stabilize the robot. As indicated by the spikes in the plot (assuming they were not caused by sensor noise) and the jerky motion in some of the perturbation tests, the higher-torque motors used in BB-8 didn't have the speed to adjust the robot's dynamics in time. More diligence in motor selection (choosing higher power motors or using higher performance BLDC motors) could have mitigated this issue.</li>
          <li>The performance of the system was heavily contingent on battery life, so a better battery/power management system would improve the robot's performance (granted, the class did not allow the use of LiPo batteries or any batteries above 12V). Control software gains would only work in certain voltage ranges, so having a way to compensate based on measured battery voltage could have been a way to improve robustness.</li>
        </ul>
      </div>
    </div>
  );
}

export default Ball;