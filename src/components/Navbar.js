function Navbar(props) {
  return (
    <header className="primary">
      <nav>
        <span className="heading">ML</span>

        <ul className="nav-buttons">
          <li onClick={() => props.scrollTo("cover")}>Home</li>
          <li onClick={() => props.scrollTo("projects")}>Projects</li>
          <li onClick={() => props.scrollTo("work")}>Work</li>
          <li onClick={() => props.scrollTo("about")}>About</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
