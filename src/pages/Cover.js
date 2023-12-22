import dummy from '../assets/images/cover-photos/dummy.png'

function Cover(props) {
  return (
    <article className="cover-section-container">
      <header>
        <h1 className="heading">👋 Hi, I'm Michael! 👋</h1>
      </header>

      <div className="content">
        <div className="cover-image">
          <img alt="" src={dummy} />
        </div>
        <div className="cover-text">
          I make hardware ⚙️ go beep boop bop 🤖 for a living (and for fun). I studied electrical engineering and computer science along with mechanical engineering at MIT.
          <br /> 
          <br />
          I've worked as a software engineering intern at Amazon, electrical engineering intern at Milwaukee Tool, undergraduate researcher at MIT, and most recently, a mechatronics intern at SpaceX.
        </div>
      </div>
    </article>
  );
}

export default Cover;