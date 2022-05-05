import './styles/styles.scss';

import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Cover from './pages/Cover.js';
import Projects from './pages/Projects.js';

function App() {
  return (
    <div className="wrapper">
      <main className="primary">
        <Cover />
        <Projects />
      </main>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;