import { React } from 'react';

import regretCover from '../../assets/images/project-assets/regret/regret-cover.png'

function Regret(props) {
  return (
    <div className="project-content-container" id="regret-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>With the sudden onset of the 2020 COVID-19 pandemic, MIT had to send all students home in March of 2020. I came back to my bland, empty bedroom and realized if I were to spend the next who-knows-how-long months here, I would need some more decor along my barren plaster walls. Regret was both a way to connect with my now distant friends and a way to get inspiration for a new room aesthetic.</p>
        <p>It was built with ReactJS and Flask and a relational SQL database. Users would log in with Facebook then have three decorations that they could make on any of the four walls in my room. They would be able to make custom illustrations using the web apps HTML canvas editor or upload photos from their computer/online. They would then have the ability to move their addition to any spot along the wall of the room. What resulted was a collection of some pretty creative and often embarrassing decorations from my friends.</p>

        <img alt="" src={regretCover} />
      </div>
    </div>
  );
}

export default Regret;