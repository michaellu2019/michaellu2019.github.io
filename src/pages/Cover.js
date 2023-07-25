import coverPortrait from '../assets/images/cover-photos/cover-portrait.png';
import dummy from '../assets/images/cover-photos/dummy.png'

function Cover(props) {
  return (
    <article className="cover-section-container">
      {/* <div id="cover-title">
        <span className="heading">Exceptionally Mediocre</span>
        <span className="subheading">Michael Lu - EECS & MechE @ MIT</span>
        <button onClick={() => props.scrollTo("projects")}>My Projects <div className="animated-chevron">›</div></button>
      </div>
      <div id="cover-portrait">
        <img src={coverPortrait} />
      </div> */}
      
      <header>
        <h1 className="heading">👋 Hi, I'm Michael! 👋</h1>
      </header>

      <div className="content">
        <div className="cover-image">
          <img src={dummy} />
        </div>
        <div className="cover-text">
          I make hardware ⚙️ go beep boop bop 🤖 for a living (and for fun). I studied electrical engineering and computer science along with mechanical engineering at MIT.
          <br /> 
          <br />
          I've worked as a software engineering intern at Amazon, electrical engineering intern at Milwaukee Tool, undergraduate researcher at MIT, and most recently, a mechatronics intern at SpaceX.
          Zoo wee mama!
        </div>
      </div>
    </article>
  );
}

export default Cover;