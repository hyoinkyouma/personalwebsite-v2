import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import { navItems } from "./config/config.js";
import About from "./components/About.jsx";
import { useEffect, useState } from "react";
import Contact from "./components/Contact.jsx";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <>
      <div
        id="home"
        className="flex flex-col justify-center items-center h-screen w-screen bg-slate-900"
      >
        <Nav navItems={navItems} />
        <Home />
      </div>
      <div id="projects" className="w-screen h-fit bg-slate-900">
        <Projects isMobile={isMobile} />
      </div>
      <div id="about" className="w-screen h-fit bg-slate-900">
        <About />
      </div>

      <div
        id="contacts"
        className="w-screen h-screen gap-10 flex flex-col items-center justify-center bg-slate-900"
      >
        <Contact />
        <a href="https://github.com/hyoinkyouma">
          <div className="flex flex-col items-center mb-5 gap-3 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <p className="text-white text-center">Visit My Github</p>
          </div>
        </a>
      </div>

      {/* footer */}
      <div className="bg-slate-900">
        <footer class="p-4  bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Roman Augusto
            </a>
            . All Rights Reserved. Made with ReactJs, Kotlin, Postgresql, and
            MongoDb.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#about" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#home" className="mr-4 hover:underline md:mr-6">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="mr-4 hover:underline md:mr-6">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contacts" clasName="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default App;
