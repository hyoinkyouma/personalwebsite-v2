import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Requests from "../utils/requests";
import Button from "./Button";
import LoadingSpinner from "./LoadingSpinner";
import ProjectContent from "./ProjectContent";

const Projects = (props) => {
  const [portfolioJSON, setPortfolioJSON] = useState(null);
  const [slice, setSlice] = useState(null);
  const [page, setPage] = useState(0);
  const [rerender, setRerender] = useState(false);
  const isMobile = props.isMobile;
  const [isLoaded, setIsLoaded] = useState(false);

  const nextBtnHandler = async (e) => {
    if (isMobile == false && page < portfolioJSON.length - 4)
      return setPage(page + 4);
    if (isMobile && page < portfolioJSON.length - 1) return setPage(page + 1);
    else setPage(0);
  };

  useEffect(() => {
    const api = new Requests();
    api.get("/getPortfolio").then((data) => {
      const items = Object.keys(data.data).map((it) => {
        var item = data.data[it];
        item["title"] = it;
        return item;
      });

      setPortfolioJSON(items);
      if (portfolioJSON) {
        setSlice(portfolioJSON.slice(page, isMobile ? page + 1 : page + 4));
      }
    });
  }, []);

  useEffect(() => {
    if (portfolioJSON) {
      setSlice(portfolioJSON.slice(page, isMobile ? page + 1 : page + 4));
    }
  }, [page, portfolioJSON]);

  return (
    <div className="w-full h-fit text-white flex sm:gap-10 flex-col align-center">
      <h1 className="p-4 text-4xl text-center">Projects</h1>

      {slice || rerender ? (
        <div
          className="grid p-5 items-center gap-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center h-fit w-fit
         grid-flow-row"
        >
          <ProjectContent
            isLoaded={isLoaded}
            setIsLoaded={setIsLoaded}
            portfolio={slice}
            page={page}
          />
        </div>
      ) : (
        <div className="w-100 flex items-center justify-center h-[10vh]">
          <LoadingSpinner />
        </div>
      )}
      <div className="w-100 mb-5 flex justify-center">
        <Button
          title="Next"
          onClick={() => {
            nextBtnHandler();
          }}
          disabled={
            portfolioJSON ? 4 >= portfolioJSON.length && !isMobile : false
          }
        />
      </div>
    </div>
  );
};

export default Projects;
