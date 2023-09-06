import { React } from 'react';

import carCover from '../../assets/images/project-assets/car/car-cover.png'
import carDiagram from '../../assets/images/project-assets/car/car-diagram.png'
import carStop from '../../assets/images/project-assets/car/car-stop.png'
import carDriving from '../../assets/images/project-assets/car/car-driving.mp4'

function Car(props) {
  return (
    <div className="project-content-container" id="car-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>This ROS-controlled RC car used lidar and a depth camera to navigate around a mini-city and an indoor track as the final challenge for the MIT class 6.141 - Robotic Science. It relied extensively on computer vision and machine learning techniques to identify landmarks for orienting itself and feedback control to reposition itself within its environment.</p>
        <img src={carCover} />
      </div>
      
      <div className="project-content-container-section project-programming">
        <h1>Programming</h1>
        <img src={carDiagram} />
        <p>The robot would use its camera to identify the lane lines in a track. First, it would perform an HSV color mask and Hough transform to find the two largest straight white lines in its camera feed. Then, it would identify the two lines closest to the center of the image. Finally, it would find the midline between those two lane lines and place a point ahead of itself as a goal point to drive towards. Using pure pursuit, the robot car would then steer itself towards that point.</p>   
        <img src={carStop} /> 
        <p>In addition, the YOLO algorithm for object detection was deployed on the car to identify stop signs so that the car would stop if one was within view.</p>
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>With all the software implemented, the car was able to complete a full lap around the indoor track and navigate through the mini city built for the class.</p>
        <video controls>
          <source src={carDriving} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Car;