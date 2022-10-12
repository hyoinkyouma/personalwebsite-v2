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
      <div id="about" className="w-screen h-fit max-h-screen bg-slate-900">
        <About />
      </div>

      <div
        id="contacts"
        className="w-screen h-fit flex flex-col items-center justify-center bg-slate-900"
      >
        <Contact />
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
