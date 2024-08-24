import { React, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './styles/styles.scss';

import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Loading from './pages/Loading.js';
import Cover from './pages/Cover.js';
import Projects from './pages/Projects.js';
import Project from './pages/Project.js';
import Work from './pages/Work.js';

function App() {
  const [ loading, setLoading ] = useState(true);
  const handleLoading = () => {
    setLoading(false);
  }

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, [])

  function scrollTo(section) {
    if (!document.querySelector(`.${section}-section-container`)) return;
    const offsetY = document.querySelector(`.${section}-section-container`).offsetTop - document.querySelector("header.primary").clientHeight;
    window.scroll({
      top: offsetY,
      behavior: "smooth",
    });
  }

  return loading ? 
  (<Loading />) :
  (
    <div className="wrapper">
      <main className="primary">
        <Routes>
          <Route path="/" Component={() => <div>
            <Cover scrollTo={scrollTo} />
            <Projects />
            <Work />
          </div>} />
          <Route path="/:id" Component={() => <div>
            <Project />
          </div>} />
        </Routes>
      </main>
      <Navbar scrollTo={scrollTo} />
      <Footer />
    </div>
  )
}

export default App;