import { React } from 'react';

import ballCover from '../../assets/images/project-assets/ball/ball-cover.JPG'
import ballPhysics from '../../assets/images/project-assets/ball/ball-physics.png'
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
import ballBox from '../../assets/images/project-assets/ball/ball-box.JPG'

function Ball(props) {
  return (
    <div className="project-content-container" id="ball-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>Based on the famous <a href="https://youtu.be/_RWWKFqv7EM" target="_blank">BB-8 droid</a> from Star Wars, this robot was a remote-controlled 20"-diameter ball with a magnetically-attached head. A combination of machined, 3D-printed, and laser cut components controlled by PSoC firmware written in C, this project was completed over the course of 4 weeks as a final project for 6.115 - Microcomputer Project Laboratory.</p>
        <img src={ballCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <p>In addition to having an excuse to bring an iconic Star Wars character to life, I saw this project as an opportunity to solve an interesting controls problem: Stabilizing a ball so that it wouldn't rock back and forth.</p>
        <img src={ballPhysics} />
        <p>Balls can be viewed as marginally stable systems, meaning that if perturbed lightly/gently, a ball will rock back and forth and oscillate. Imagine a ball is on flat ground and perturbed such that the ball tips but does not roll, and a small angle θ is formed between the gravity vector and the radius from the center of the ball to the contact point P as shown above. One can imagine that if there were no damping in the system, θ would oscillate as time t goes on as shown in the graph of the dynamics. If damping were added to the system through some control loop, the graph of the dynamics would be seen converging to zero.</p>
        
        {/* <div className="image-next-to-container">
          <div className="image-container"><img src={null} /></div>
          <div>
            <p>INSERT SKETCH</p>
          </div>
        </div> */}
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>To develop a concrete build plan and design with such a short time frame, BB-8 was modeled in Solidworks as throughly as possible. This would help design 3D-printed parts with the necessary dimensions and ensure no collisions would occur between parts. The BB-8 ball would be comprised of three main mechanisms: a drive system to move forward and backward, a pendulum to steer, and a flywheel to turn on the spot.</p>
        <img src={ballCad} />
        <p>The system would contain three motors. Motor A would control the tilt of the pendulum by driving a pinion gear that would mesh with a giant gear on the main drive body, thus allowing the heavy pendulum to swing left and right to shift the robot's center of mass in each direction, steering the robot around the x-axis. The central axis of the ball would be connected to the robot's drive system with a free-spinning axle and Motor B. Motor B would be coupled to a hub that would spin the entire ball around the y-axis, allowing it to drive forward and backwards like a giant wheel. The flywheel, driven by Motor C, would be a heavy spinning disk that would allow the robot to rotate around the z-axis. If the heavy disk was spinning quickly in one direction, the entire ball would spin in the opposite direction to conserve angular momentum.</p>
        <p>The head structure would then be placed on a platform of caster wheels that would roll on top of the ball and would have a set of strong magnets underneath. The neck structure of the robot would also have a pair of magnets to pull the head into the ball, keeping it in place to prevent it from slipping off.</p>
        <img src={ballCadSection} />
        <p>The electronics of BB-8 would be centered around the PSoC CY8C58LP (after all, the class was sponsored by Cypress). The microcontroller would get data from a Flysky RC Receiver for user control and an MPU6050 accelerometer to get the tilt of the robot for stabilization control. This data would go through the firmware of the robot to be mapped to appropriate control outputs, leveraging DBH-12 Motor drivers to control the 3 Pololu 12V Gearmotors.</p>
        <img src={ballBlockDiagram} />
        {/* <p>INSERT FEA AND MOTOR SIZING?</p> */}
      </div>
      
      <div className="project-content-container-section project-fabrication">
        <h1>Fabrication</h1>
        <p>The biggest risk of the project was getting a rigid 20"-diameter ball (the actual size of the BB-8 robot from Star Wars) in less than a week as to offload as much difficult fabrication work as possible. Thankfully, I was able to find a 20" acrylic lamp post globe on Amazon with a reasonable ship date. To fit the entire mechanism inside, with proper mounting points, the neck hole of the acrylic ball was enlarged with an oscillating saw. Mounting holes for a drive hub and washer plate that would contain the drive shaft bearing were drilled and tapped.</p> 
        <p>Unfortunately, the ball was not uniform thickness (likely due to being blow molded) and was brittle in certain areas, thus becoming susceptible to cracks. It would eventually have to be reinforced on the inside with a layer of fiberglass and epoxy (inspired by techniques used in making boat hulls!).</p>
        <img src={ballBall} />
        <p>The fabrication methods chosen for each component of the robot were based on the need for structural integrity, fabrication time, and fabrication effort. Structural components of BB-8 that were needed quickly were manually machined from 6063-T6 aluminum extrusions. Precision parts, such as gears and mounting blocks, were 3D-printed. 3D printing was also useful for offloading a lot of fabrication to a precise machine that could run overnight. Non-structural components that needed to be produced in high volume quickly, such as mounting plates, were laser cut. Laser cutting was good for rapidly prototyping and testing out different designs.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img src={ballDriveSystem} /></div>
          <div className="image-container"><img src={ballPendulum} /></div>
          <div className="image-container"><img src={ballFlywheel} /></div>
        </div>
        <p>The drive system was primarily made out of aluminum to support the weight of the pendulum. A giant 3D-printed gear was fastened to the bottom to mesh with the 3D-printed pinion gear of the pendulum, which also was primarily built out of aluminum. The flywheel was a 3D-printed thick dome filled with tiny lead balls.</p>
        <div className="image-next-to-container">
          <div className="image-container"><img src={ballNeck} /></div>
          <div className="image-container"><img src={ballHead} /></div>
        </div>
        <p>The head of BB-8 would stay on the head with the help of two pairs of strong neodymium magnets press fit and glued into 3D-printed magnet mounts that were shaped to conform with the curvature of the 20" ball. The magnet mount in the ball would be attached to a threaded rod that would be spun by a continuous rotation goBilda 25-3 speed servo. The magnet mount in the head would be attached to another threaded road that fastened to the styrofoam hemisphere structure. This rod would spin freely inside the bearings of a tripod-like structure that would roll on top of the ball. The rollers shown in the picture would eventually be replaced with caster wheels for less friction.</p>
        <img id="schematic" src={ballSchematic} />
        <p>After all the electronics were mounted based on the schematic shown above, the full mechanism was able to control BB-8 to roll around and steer while maintaining stability. The battery was mounted near the end of the pendulum to shift the center of mass as far down as possible, helping with stability. The PSoC was mounted near the drive motor since that would make it close to the opening of the ball, keeping it easily accessible for uploading and debugging code.</p>
        <img src={ballMechanism} />
        <p>Once the full assembly was completed and an initial set of control software was implemented, the acrylic ball was spray painted white before being embellished with red and silver paint in the theme of <a href="https://youtu.be/IldZGkOA0VI" target="_blank">MIT's decision droid</a> with the help of some friends who were far more artistically gifted.</p>
        <img src={ballPaint} />
        <p>Hardware:</p>
        <ul>
          <li>1 × KastLite 20" Acrylic Lamp Post Globe</li>
          <li>1 × 11.5"×6" inJuvale White Half Sphere Foam Ball</li>
          <li>3 × WMYCONGCONG 37mm Diameter DC Geared Motor Mounting Bracket</li>
          <li>3 × Caster Wheels</li>
          <li>4 × 0.25"-Diameter 0.75"-Tall Neodymium Cylinder Magnets</li>
          <li>1 × 2LB Bag of Metal Magery Lead Shot Balls</li>
          <li>3 × Pololu 6mm Shaft Mounting Hub</li>
          <li>1 × goBilda goBilda 25-3 Speed Servo Motor</li>
          <li>1 × Pololu 131:1 37D 12V Gearmotor</li>
          <li>1 × Pololu 50:1 37D 12V Gearmotor</li>
          <li>1 × Pololu 19:1 37D 12V Gearmotor</li>
          <li>Some Fiberglass Cloth and KARBXON KBX-11 Ultra Bond Epoxy Resin</li>
          <li>A Bunch of McMaster-Carr Bearings and Nylon Bushings and Couplings</li>
          <li>A Decent Amount of 6063-T6 Aluminum 1/16" Box Extrusion and 6061-T6 Angle Extrusion and also 6061-T6 Rods</li>
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
        <img src={ballSoftwareDiagram} />
        <img src={ballPID} />
        <div className="image-next-to-container">
          <div className="image-container"><img src={ballPsocBlocks} /></div>
          <div className="image-container"><img src={ballPsocConfig} /></div>
        </div>
        <div className="image-next-to-container">
          <div className="image-container">
            <img src={ballRadioScope} />
            <img src={ballMotorScope} />
          </div>
          <div className="text-container">
            <p>Scope so kewl...</p>
          </div>
        </div>
        <iframe src="https://www.youtube.com/embed/Skfwr8KdXXk" title="Making MIT BB-8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <p>Programming text.</p>    
      </div>
      <img src={ballStabilization} />
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>Results text.</p>
        <iframe src="https://www.youtube.com/embed/xmnu_rDfkFk" title="MIT 6.115 Final Project: BB-8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe src="https://www.youtube.com/embed/Olh6qdgxJgc" title="BB-8 @ MIT" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <ul>
          <li>Improvement</li>
          <li>Improvement</li>
          <li>Improvement</li>
        </ul>
      </div>
    </div>
  );
}

export default Ball;