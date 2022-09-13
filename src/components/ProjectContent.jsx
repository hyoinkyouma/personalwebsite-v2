import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";

const ProjectContent = (props) => {
  const portfolio = props.portfolio;
  const page = props.page;
  const [arr, setArr] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const array = [];
    portfolio.map((ctx, key) => {
      array.push(
        <React.Fragment key={key}>
          <div
            className={`p-2 sm:p-0 flex flex-col gap-2 items-center justify-center
           transition-all ${
             isLoaded ? "opacity-100" : "opacity-0 translate-x-12"
           }
          `}
          >
            <a key={key} href={ctx.link} title={ctx.desc}>
              <img className="w-100 h-100 hover:scale-125" src={ctx.img} />
            </a>
            <p className="text-center sm:text-xl text-2xl">{ctx.title}</p>
            <p className="sm:hidden text-sm">{ctx.desc}</p>
          </div>
        </React.Fragment>
      );
    });

    setArr([...array]);
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, [portfolio, isLoaded]);

  return arr;
};
export default ProjectContent;
