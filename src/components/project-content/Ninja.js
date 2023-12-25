import { React } from 'react';

import ninjaCover from '../../assets/images/project-assets/ninja/ninja-cover.png';
import ninjaFruitNinja from '../../assets/images/project-assets/ninja/ninja-fruit-ninja.png';
import ninjaDiagram from '../../assets/images/project-assets/ninja/ninja-diagram.png';
import ninjaTrajectoryDiagram from '../../assets/images/project-assets/ninja/ninja-trajectory-diagram.png';
import ninjaIK from '../../assets/images/project-assets/ninja/ninja-ik.png';
import ninjaKTO from '../../assets/images/project-assets/ninja/ninja-kto.png';
import ninjaTrajectory from '../../assets/images/project-assets/ninja/ninja-trajectory.png';
import ninjaDojoVideo from '../../assets/images/project-assets/ninja/ninja-dojo.mp4'
import ninjaNinjaVideo from '../../assets/images/project-assets/ninja/ninja-ninja.mp4'

function Ninja(props) {
  return (
    <div className="project-content-container" id="ninja-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>Made for the MIT class 6.881/6.4212 - Robotic Manipulation, this project involved creating a simulation of a KUKA iiwa robot arm wielding a giant katana to slice fruits thrown at it in real-time. All software was written in Python, leveraging Drake (created by Prof. Russ Tedrake, the course's instructor), a Python/C++ toolbox for building robotic control systems and analyzing the resulting dynamics.</p>
        <img alt="" src={ninjaCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <img alt="" src={ninjaFruitNinja} />
        <p>This project was inspired by the mobile game <a rel="noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/Fruit_Ninja">"Fruit Ninja"</a> that was popular in the 2010s. In this game, fruits would by thrown up in the air, and the player would wield a sword to slice them in mid-air for points. This project aimed to replicate that gameplay in a Drake simulation with a robot arm.</p> 
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <img alt="" src={ninjaDiagram} />
        <p>In the simulation, fruits would be randomly generated and launched in the air. A KUKA iiwa robot arm would have a katana welded to its final linkage, and it would use a camera system to detect the moving fruit, predict its trajectory, then use optimization methods to execute a trajectory to cut the fruit as it fell.</p>
        <img alt="" src={ninjaTrajectoryDiagram} />
        <p>Once a fruit was detected at a certain position with a certain velocity vector, kinematic equations for the ballistic trajectory of the fruit were solved to predict the future (<i>x</i>, <i>y</i>) position of the fruit for a certain height <i>z</i> as well as what time <i>t</i> at which this would occur. After generating this predicted point <i>P</i>, a linear trajectory of three points was then made with <i>P</i> being the center point, <i>P<sub>0</sub></i> being the current position of the blade, and <i>P<sub>f</sub></i> being an extrapolated point along the vector from <i>P<sub>0</sub></i> to <i>P</i>. One important thing to note was that <i>P</i> and <i>P<sub>f</sub></i> had reference frames calculated and stored with them so that it was known how to orient the blade perpendicular to the fruit's surface when cutting it.</p>
        
        <p>Given the linear trajectory above, two optimization problems were formulated, each of which would provide a different approach for generating a joint-space trajectory that the robot arm could use to cut the fruit.</p>
        <div className="image-next-to-container">
          <p className="text-next-to-math">The first strategy involved inverse kinematics. The nominal joint angles <i>q<sub>0</sub> = [0, 0.6, 0, -1.75, 0, 1, 0]<sup>T</sup></i> and the bounds of accepted solved pose values <i>ϵ</i> were <i>[0, 0, 0.005]<sup>T</sup></i> for the position and <i>π/26</i> for the orientation. This optimization problem aimed to minimize the distance between the solved joint angles <i>q</i> and nominal joint angles <i>q<sub>0</sub></i> while satisfying the start and end position constraints as well as ensuring the solved joint angles would put the katana close enough to the cutting points <i>P<sub>i</sub></i> in the linear trajectory.</p>
          <div className="image-container"><img alt="" src={ninjaIK} /></div>
        </div>
        <div className="image-next-to-container">
          <p className="text-next-to-math">The second strategy involved kinematic trajectory optimization with a SNOPT solver. The bounds of accepted solved pose values <i>ϵ</i> were <i>[0.3, 0.01, 0.01]<sup>T</sup></i> for the position and <i>π/26</i> for the orientation. This optimization problem aimed to minimize the trajectory length and duration while satisfying the start and end position constraints as well as ensuring the solved joint angles would put the katana close enough to the cutting points <i>P<sub>i</sub></i> in the linear trajectory. There were additional velocity and duration constraints as well. One of the useful features of trajectory optimization was loosening the <i>ϵ</i> value to allow for <i>0.3</i> of margin in the <i>x</i> direction, allowing the solver to use any point along the katana blade as a valid point to satisfy the cutting position constraint.</p>
          <div className="image-container"><img alt="" src={ninjaKTO} /></div>
        </div>
        
      </div>
      
      <div className="project-content-container-section project-programming">
        <h1>Programming</h1>
        <p>Drake offered a lot of built-in tools to set up the KUKA iiwa robot controls and physics simulations; but since there were no detailed models in literature or in Drake of fruit cutting, fruits were represented as two half spheres traveling at the exact same velocity, appearing as one body until they collided with another object, at which point they'd separate (simulating a slice).</p>
        <p>Drake also made it easy to solve optimization problems. By setting up the kinematic trajectory optimization and inverse kinematic problems and invoking the Drake solver, I was able to get the robot arm to cut arbitrary points in 3D space.</p>    
        <video controls>
          <source src={ninjaDojoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>Combining this with the linear trajectory generator above, I was able to get the robot arm to slice through a point in 3D space, represented by the purple point where the fruit would be. The final part was to work out the timing of the trajectory execution so that the robot arm would hit the fruit just as it passed through the predicted (purple) point. This was done by taking time <i>t</i> for when the fruit would pass through the predicted cut point and comparing it to the time <i>t<sub>c</sub></i> when the katana would pass through that point. The execution of the trajectory would then be delayed by <i>t - t<sub>c</sub></i>, essentially having the robot wait to execute the trajectory so that it would intercept the fruit.</p>
        <img alt="" src={ninjaTrajectory} />
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>With all these systems combined, the robot arm was able to reliably cut fruit thrown in the air, as shown in the video below. The first four cuts were made with trajectories from kinematic trajectory optimization, and the last four cuts were made with trajectories from inverse kinematics.</p>
        <video controls>
          <source src={ninjaNinjaVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>  
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <ul>
          <li>Since there was no high-fidelity modeling of fruit cutting in our simulation, there was a degree of uncertainty on how well this simulation would transfer to real life. Having more rigorous research into the forces and velocities required to slice a fruit in mid-air and finding a way to include those into the optimization constraints would produce a more realistic simulation.</li>
          <li>There were instances of the robot arm executing the trajecory too soon or too late and missing the fruit as it fell. Having a more analytical solution that took into the account the dimensions of the fruit, the katana, and the relevant velocities would likely make this system more robust.</li>
        </ul>
      </div>
    </div>
  );
}

export default Ninja;