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
          in addition to working on some personal hobby projects like a robot donkey and Facebook chatbot. I guess in addition to doing 
          all that stuff I also enjoy some ordinary hobbies like running, cooking, doing volunteer firefighting and EMS, 
          watching movies, and sleeping. I'm also a big fan of—wait, do people even read these bios?</p>
      </div>
    </article>
  );
}

export default About;