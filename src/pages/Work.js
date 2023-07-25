import amazonLogo from '../assets/images/work-logos/work-amazon-logo.PNG'
import spaceXLogo from '../assets/images/work-logos/work-spacex-logo.PNG'
import milwaukeeLogo from '../assets/images/work-logos/work-milwaukee-logo.png'
import mitLogo from '../assets/images/work-logos/work-mit-logo.PNG'
import abbLogo from '../assets/images/work-logos/work-abb-logo.PNG'
import ibmLogo from '../assets/images/work-logos/work-ibm-logo.PNG'
import gnsLogo from '../assets/images/work-logos/work-gns-logo.png'

function Work() {
  return (
    <article className="work-section-container">
      <header>
        <h1 className="heading">🏢 Places I've Worked ✏️</h1>
      </header>

      <div className="content">
        <div className="work-container">
          <div className="work-card">
            <img id="spaceX2" src={spaceXLogo} />
            <div className="work-description">
              <h2>Jun. - Aug. 2023: Mechatronics Intern</h2>
              <h2>Jun. - Aug. 2021: Software Engineering Intern</h2>
            </div>
          </div>
          <div className="work-card">
            <img id="mit" src={mitLogo} />
            <div className="work-description">
              <h2>Sep. 2022 - May 2023: Undergraduate Researcher in Biomimetic Robotics Lab</h2>
              <h2>Feb. - May. 2021: Undergraduate Researcher in CSAIL HCIE Lab</h2>
            </div>
          </div>
          <div className="work-card">
            <img id="amazon" src={milwaukeeLogo} />
            <div className="work-description">
              <h2>Jan. 2023: Electrical Engineering Intern</h2>
              <h2><br /></h2>
            </div>
          </div>
          <div className="work-card">
            <img id="amazon" src={amazonLogo} />
            <div className="work-description">
              <h2>May. - Aug. 2022: Software Engineering Intern</h2>
              <h2><br /></h2>
            </div>
          </div>
          <div className="work-card">
            <img id="abb" src={abbLogo} />
            <div className="work-description">
              <h2>Jun. - Aug. 2020: Electrical and Software Engineering Intern</h2>
              <h2><br /></h2>
            </div>
          </div>
          <div className="work-card">
            <img id="ibm" src={ibmLogo} />
            <div className="work-description">
              <h2>Jan. 2020: Software Engineering Intern</h2>
              <h2><br /></h2>
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
