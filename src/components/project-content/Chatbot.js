import { React } from 'react';

import chatbotCover from '../../assets/images/project-assets/chatbot/chatbot-cover.png'
import chatbotArchitecture from '../../assets/images/project-assets/chatbot/chatbot-architecture.png';
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
        <p>The inspiration for the Transformer model was the rise of chat bots on the Internet. Since I had accrued over 4 years of text messaging data on Facebook Messenger, I wanted to experiment with training a machine learning model using this Messenger data as a dataset to see if it would pick up my speech patterns.</p>
        <img src={chatbotArchitecture} />
        <p>Transformer architectures were a relatively recent development at the time, so they were of particular interest. Also, Transformer models supposedly train faster than the conventional LSTM and RNN architectures, which were historically used for natural language processing applications.</p>
      </div>
      
      <div className="project-content-container-section project-design">
        <h1>Design</h1>
        <p>Since the Transformer model would hopefully mimic my speech patterns well, I wanted to be able to deploy it online so that it could converse with my friends on Facebook posts and on Facebook Messenger. I would first run a Python bot that would first pull messages from my friends off of these sites in real time using web scrapers.</p>
        <p>This bot would then use the most recent message as a prompt and then make an HTTP request to a server where the Transformer model was being hosted. The prompt would be fed into the model, and the model would predict a response.</p>
        <img src={chatbotDiagram} />
        <p>The text from the model would be sent back as an HTTP request to the bot, and then the bot would control my laptop to enter that response into the webpage to respond to my friends.</p>
      </div>
      
      <div className="project-content-container-section project-programming">
        <h1>Programming</h1>
        <img src={chatbotRawData} />
        <p>Facebook Messenger data downloaded from Facebook was structured as JSON files with each message being its own JSON object along with metadata about the text message. A large portion of the project involved preprocessing this data to:</p>
        
        <div className="image-next-to-container">
          <div className="image-container"><img src={chatbotData} /></div>
          <div className="text-container">
            <ol>
              <li>Remove "junk" messages that were made up of photos, URLs, and emojis.</li>
              <li>Restructure the data into "prompt" and "answer" pairs between myself and the other person.</li>
              <li>Aggregate all the different JSON files into one giant JSON file.</li>
            </ol>
          </div>
        </div>
        
        <p>Finally, all this data was preprocessed into a word matrix and then fed into a Transformer model built in TensorFlow, which I trained over 50 epochs until I got a "whopping" 15.56% accuracy... The model was then deployed on a Flask server so that it could give responses to a web scraper bot.</p>
        <img src={chatbotTraining} />
        <p>The web scraper bot used a combination of Beautiful Soup, Selenium, and PyAutoGui to pull prompts from Facebook Messenger or Facebook posts in real time and forward the extracted strings to the Transformer model Flask server for a response.</p> 
        <p>Because Facebook blocked automated bot manipulation of the website (for good reason), PyAutoGui was used to control my mouse and keyboard to type the response from the server into the text box and post/send the message to my friend.</p>
      </div>
      
      <div className="project-content-container-section project-results">
        <h1>Results</h1>
        <p>After deploying my model and testing it out realtime on Facebook posts and in Facebook Messenger chats, I was able to trick many of my friends into thinking that the bot was me. Of course, since most of the responses the bot gave were out-of-context and nonsensical, people just assumed I was messing with them or that I was "out of it" that day.</p>
        <p>In addition, since much of the training data composed of the succint "texting" language I used in middle and high school, the bot frequently replied with short one-word pharses rather than appropriate responses to many prompts.</p>
        <iframe src="https://www.youtube.com/embed/KBvbvm9B2dA" title="Facebook Chatbot Test" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <p>Overall, the Transformer model was able to mimic my speech patterns, mainly by just learning to use the most frequent phrases that I had used over Messenger. And while nobody suspected they were talking to a machine learning model, nobody believed they were talking to a rational version of myself either.</p>
      </div>

      <div className="project-content-container-section project-improvements">
        <h1>Improvements</h1>
        <p>Since the Transformer model has been proven to be pretty good at natural language processing tasks, I think the project would have benefited the most from an improved dataset and training method. The results are a good demonstration of "garbage in, garbage out."</p>
        <ul>
          <li>Pretraining the model on a larger, better dataset would improve the models ability to learn normal conversations before learning my speech patterns. The deployed model's biggest issue was lack of semantic understanding of prompts it was given.</li>
          <li>Doing more diligence on data preprocessing would iron out some of the undesirable conversation habits the bot picked up. Filtering out emojis, typos, and nonsensical messages would have reduced the appearance of weird responses the bot gave.</li>
        </ul>
      </div>
    </div>
  );
}

export default Chatbot;