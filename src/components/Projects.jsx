import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Requests from "../utils/requests";
import ProjectContent from "./ProjectContent";

const Projects = () => {
  const [portfolioJSON, setPortfolioJSON] = useState();
  useEffect(() => {
    const api = new Requests();
    api.get("/getPortfolio").then((data) => {
      setPortfolioJSON(data.data);
    });
  }, []);

  return (
    <div className="w-full h-fit text-white flex sm:gap-10 flex-col align-center">
      <h1 className="p-4 text-4xl text-center">Projects</h1>
      <div
        className="grid p-5 items-center gap-5 mb-[5rem] md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center h-fit w-fit
         grid-flow-row"
      >
        {portfolioJSON && <ProjectContent portfolio={portfolioJSON} />}
      </div>
    </div>
  );
};

export default Projects;
