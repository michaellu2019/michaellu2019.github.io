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
          {/* I make hardware ⚙️ go beep boop bop 🤖. I studied mechanical engineering along with electrical engineering and computer science at MIT.
          <br /> 
          <br />
          I've worked as a software engineering intern at Amazon, electrical engineering intern at Milwaukee Tool, mechatronics intern at SpaceX, and am currently working on robots for the moon at NASA JPL. */}
          Ever since I was born, I knew that I wanted to be that one dude that other dudes would look up to and say to other dudes, "Dude, I want to be that dude."
          <br />
          <br />
          Today, I have become an exceptionally mediocre engineer and experienced amateur programmer after trudging through the MechE and EECS curriculum at MIT for a few years.
        </div>
      </div>
    </article>
  );
}

export default Cover;