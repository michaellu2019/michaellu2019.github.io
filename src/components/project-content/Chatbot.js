import { React } from 'react';

import chatbotCover from '../../assets/images/project-assets/chatbot/chatbot-cover.png'
import chatbotDiagram from '../../assets/images/project-assets/chatbot/chatbot-diagram.png'
import chatbotRawData from '../../assets/images/project-assets/chatbot/chatbot-raw-data.png'
import chatbotData from '../../assets/images/project-assets/chatbot/chatbot-data.png'
import chatbotTraining from '../../assets/images/project-assets/chatbot/chatbot-training.png'

function Chatbot(props) {
  return (
    <div className="project-content-container" id="chatbot-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>My Facebook Chatbot was an attempt to train a Transformer neural network on all my Facebook text messages so that it could replicate my speech patterns.</p>
        <img src={chatbotCover} />
      </div>

      <div className="project-content-container-section project-ideation">
        <h1>Ideation</h1>
        <img src={null} />
        <p>Ideation text</p>
        
        <div className="image-next-to-container">
          <div className="image-container"><img src={null} /></div>
          <div>
            <p>text</p>
          </div>
        </div>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>Design text</p>
        <img src={chatbotDiagram} />
      </div>
      
      <div className="project-content-container-section project-programming">
        <h1>Programming</h1>
        <img src={chatbotRawData} />
        <img src={chatbotData} />
        
        <img src={chatbotTraining} />
        <p>Programming text.</p>    
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>Results text.</p>
        <iframe src="https://www.youtube.com/embed/KBvbvm9B2dA" title="Facebook Chatbot Test" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <p>Be better:</p>
        <ul>
          <li>Improvement</li>
          <li>Improvement</li>
          <li>Improvement</li>
        </ul>
      </div>
    </div>
  );
}

export default Chatbot;