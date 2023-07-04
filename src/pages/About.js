import sqwardface from '../assets/images/about-sqwardface.jpeg'

function About() {
  return (
    <article className="about-section-container">
      <header>
        <h1 className="heading">Hi, I'm Michael</h1>
      </header>

      <div className="content">
        <img src={sqwardface} />
        <p>I don't mean to brag, but I excel at being average. I put the "me" in "mediocre." I'm also a big fan of—wait, do people even read these bios?</p>
      </div>
    </article>
  );
}

export default About;