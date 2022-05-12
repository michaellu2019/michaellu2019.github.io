import sqwardface from '../assets/images/about-sqwardface.jpeg'

function About() {
  return (
    <article className="about-section-container">
      <header>
        <h1 className="heading">Hi, I'm Michael</h1>
      </header>

      <div className="content">
        <img src={sqwardface} />
        <p>I don't mean to brag, but I excel at being average. As a senior at MIT studying electrical engineering and computer science 
          and mechanical engineering, I put the "me" in "mediocre." I've become an experienced amateur working at SpaceX, IBM, and ABB 
          in addition to working on some personal projects like a robot donkey and Facebook chatbot.</p>
      </div>
    </article>
  );
}

export default About;