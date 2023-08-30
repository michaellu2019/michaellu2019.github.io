import { React } from 'react';

import nutriscanDemo from '../../assets/images/project-assets/nutriscan/nutriscan-demo.mp4'

function Nutriscan(props) {
  return (
    <div className="project-content-container" id="nutriscan-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>NutriScan was a project built at HackPrinceton 2019. It was a mobile web application that allowed users to take pictures of their meals, then used a deep learning with to classify the food and track macronutrients.</p>
        <p>The front-end was built entirely using React and front-end visualization tools. The backend was built using a Python Flask Application, which would send data to the front-end leveraging integration with Firebase (which was used to host user data) and Google Vision with a custom trained AutoML for computer vision. The calorie and nutritional information was fetched using the USDA API, while the SMS texts were sent using the Twilio API.</p>
        <p>The project was one of the finalist projects and won the "Best Use of Google Cloud" award at the hackathon.</p>
        <video controls>
          <source src={nutriscanDemo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Nutriscan;