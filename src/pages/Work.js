import jplLogo from '../assets/images/work-logos/work-jpl-logo.png'
import spaceXLogo from '../assets/images/work-logos/work-spacex-logo.PNG'
import milwaukeeLogo from '../assets/images/work-logos/work-milwaukee-logo.png'
import amazonLogo from '../assets/images/work-logos/work-amazon-logo.PNG'
import mitLogo from '../assets/images/work-logos/work-mit-logo.PNG'
import abbLogo from '../assets/images/work-logos/work-abb-logo.PNG'
import ibmLogo from '../assets/images/work-logos/work-ibm-logo.PNG'

function Work() {
  return (
    <article className="work-section-container">
      <header>
        <h1 className="heading">🏢 Places I've Worked ✏️</h1>
      </header>

      <div className="content">
        <div className="work-container">
          <div className="work-card">
            <img alt="" id="jpl" src={jplLogo} />
            <div className="work-description">
              <h2>Jun. - Dec. 2024: Robotics Intern</h2>
            </div>
          </div>
          <div className="work-card">
            <img alt="" id="spaceX" src={spaceXLogo} />
            <div className="work-description">
              <h2>Jun. - Aug. 2023: Mechatronics Intern</h2>
              <h2>Jun. - Aug. 2021: Software Engineering Intern</h2>
            </div>
          </div>
          {/* <div className="work-card">
            <img alt="" id="mit" src={mitLogo} />
            <div className="work-description">
              <h2>Sep. 2022 - May 2023: Robotics Undergraduate Researcher</h2>
              <h2>Feb. - May. 2021: HCI Undergraduate Researcher</h2>
            </div>
          </div> */}
          <div className="work-card">
            <img alt="" id="amazon" src={milwaukeeLogo} />
            <div className="work-description">
              <h2>Jan. 2023: Electrical Engineering Intern</h2>
              <h2><br /></h2>
            </div>
          </div>
          <div className="work-card">
            <img alt="" id="amazon" src={amazonLogo} />
            <div className="work-description">
              <h2>May. - Aug. 2022: Software Engineering Intern</h2>
              <h2><br /></h2>
            </div>
          </div>
          <div className="work-card">
            <img alt="" id="abb" src={abbLogo} />
            <div className="work-description">
              <h2>Jun. - Aug. 2020: Electrical and Software Engineering Intern</h2>
              <h2><br /></h2>
            </div>
          </div>
          <div className="work-card">
            <img alt="" id="ibm" src={ibmLogo} />
            <div className="work-description">
              <h2>Jan. 2020: Software Engineering Intern</h2>
              <h2><br /></h2>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Work;
