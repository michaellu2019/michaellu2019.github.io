import { React } from 'react';

import friendsCover from '../../assets/images/project-assets/friends/friends-cover.png'

function Friends(props) {
  return (
    <div className="project-content-container" id="friends-project-content-container">
      <div className="project-content-container-section project-overview">
        <h1>Overview</h1>
        <p>This little visualization tool was built with data scraped from Facebook using the Python web-scraping libraries Selenium and Beautiful Soup. Data was compiled into a JSON file, then the Google Maps Geocode API was used to retrieve latitude and longitude coordinates that could be placed on Google Maps to see all the spots around the world where my Facebook friends were from.</p>
        <img alt="" src={friendsCover} />
      </div>
    </div>
  );
}

export default Friends;