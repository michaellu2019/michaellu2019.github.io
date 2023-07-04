import amazonLogo from '../assets/images/work-amazon-logo.PNG'
import spaceXLogo from '../assets/images/work-spacex-logo.PNG'
import mitLogo from '../assets/images/work-mit-logo.PNG'
import abbLogo from '../assets/images/work-abb-logo.PNG'
import ibmLogo from '../assets/images/work-ibm-logo.PNG'
import gnsLogo from '../assets/images/work-gns-logo.png'

function Work() {
  return (
    <article className="work-section-container">
      <header>
        <h1 className="heading">Places I've Worked</h1>
      </header>

      <div className="content">
        <div className="work-container">
          {/* <div><img id="amazon" className="work-logo" src={amazonLogo} /></div> */}
          <div className="work-card">
            <img id="spaceX2" src={spaceXLogo} />
            <div className="work-description">
              <h2>Jun. - Aug. 2023</h2>
              <h2>Automation and Controls Engineering Intern</h2>
              <h3>Developed satellite production machinery</h3>
            </div>
          </div>
          <div className="work-card">
            <img id="amazon" src={amazonLogo} />
            <div className="work-description">
              <h2>May. - Aug. 2022</h2>
              <h2>Software Engineering Intern</h2>
              <h3>Developed database cleaning tools.</h3>
            </div>
          </div>
          <div className="work-card">
            <img id="spaceX1" src={spaceXLogo} />
            <div className="work-description">
              <h2>Jun. - Aug. 2021</h2>
              <h2>Software Engineering Intern</h2>
              <h3>Developed WiFi mesh software for networks of connected SpaceX Starlink routers to improve WiFi signal strength over large areas.</h3>
            </div>
          </div>
          <div className="work-card">
            <img id="mit" src={mitLogo} />
            <div className="work-description">
              <h2>Feb. - May. 2021</h2>
              <h2>Undergraduate Researcher</h2>
              <h3>Assembled an infrared camera module with a Raspberry Pi Zero W to read QR codes hidden behind infrared-transparent 3D-printed plastic.</h3>
            </div>
          </div>
          <div className="work-card">
            <img id="abb" src={abbLogo} />
            <div className="work-description">
              <h2>Jun. - Aug. 2020</h2>
              <h2>Electrical and Software Engineering Intern</h2>
              <h3>Created a cross-platform computer application to configure and read data from ABB's Power Distribution Unit logic boards.</h3>
            </div>
          </div>
          <div className="work-card">
            <img id="ibm" src={ibmLogo} />
            <div className="work-description">
              <h2>Jan. 2020</h2>
              <h2>Full Stack Software Engineering Intern</h2>
              <h3>Developed an online word association game where users played against a Natural Language Processing AI.</h3>
            </div>
          </div>
        </div>
      </div>

      {/* <header>
        <h1 className="heading">Places I've Studied</h1>
      </header>

      <div className="content">
        <div className="work-container">
          <div className="work-card">
            <img id="mit" src={mitLogo} />
            <div className="work-description">
              <h2>Sep. 2019 - May. 2023</h2>
              <h2>B.S. in Electrical Engineering and Computer Science</h2>
              <h2>Minor in Mechanical Engineering</h2>
            </div>
          </div>
          <div className="work-card">
            <img id="gns" src={gnsLogo} />
            <div className="work-description">
              <h2>Sep 2015 - Jun. 2019</h2>
              <h2>High School Student</h2>
            </div>
          </div>
        </div>
      </div> */}
    </article>
  );
}

export default Work;
