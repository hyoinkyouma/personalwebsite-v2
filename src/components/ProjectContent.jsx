import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";

const ProjectContent = (props) => {
  const portfolio = props.portfolio;
  const [arr, setArr] = useState([]);
  useEffect(() => {
    const array = [];
    Object.keys(portfolio).map((ctx, key) => {
      array.push(
        <React.Fragment key={key}>
          <div className="p-2 sm:p-0 flex flex-col gap-2 items-center justify-center">
            <a key={key} href={portfolio[ctx].link} title={portfolio[ctx].desc}>
              <img
                className="w-100 h-100 hover:scale-125"
                src={portfolio[ctx].img}
              />
            </a>
            <p className="text-center sm:text-xl text-2xl">{ctx}</p>
            <p className="sm:hidden text-sm">{portfolio[ctx].desc}</p>
          </div>
        </React.Fragment>
      );
    });
    setArr(array);
  }, [portfolio]);

  return arr;
};
export default ProjectContent;
