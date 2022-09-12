import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import { navItems } from "./config/config.js";
import About from "./components/About.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-slate-900">
        <Nav navItems={navItems} />
        <Home />
      </div>
      <div id="projects" className="w-screen h-fit bg-slate-900">
        <Projects />
      </div>
      <div id="about" className="w-screen h-fit bg-slate-900">
        <About />
      </div>
    </>
  );
}

export default App;
