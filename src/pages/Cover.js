import coverPortrait from '../assets/images/cover-portrait.png';

function Cover() {
  function scrollToProjects() {
    const projectsOffsetY = document.querySelector(".projects-section-container").offsetTop - document.querySelector("header.primary").clientHeight;
    window.scroll({
      top: projectsOffsetY,
      behavior: "smooth",
    })
  }

  return (
    <article className="cover-section-container">
      <div id="cover-title">
        <span className="heading">Exceptionally Mediocre</span>
        <span className="subheading">Michael Lu - EECS & MechE @ MIT</span>
        <button onClick={scrollToProjects}>My Projects <div className="animated-chevron">›</div></button>
      </div>
      <div id="cover-portrait">
        {/* <img src={coverPortrait} /> */}
      </div>
    </article>
  );
}

export default Cover;