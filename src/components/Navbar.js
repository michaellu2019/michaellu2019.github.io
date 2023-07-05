import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <header className="primary">
      <nav>
        <span className="heading">ML</span>

        <ul className="nav-buttons">
          <li onClick={() => props.scrollTo("cover")}><Link to="/">Home</Link></li>
          <li onClick={() => props.scrollTo("projects")}><Link to="/">Projects</Link></li>
          <li onClick={() => props.scrollTo("work")}><Link to="/">Work</Link></li>
          {/* <li onClick={() => props.scrollTo("about")}><Link to="/">About</Link></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
