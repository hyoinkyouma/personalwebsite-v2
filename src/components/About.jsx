import React from "react";
import Wave from "react-wavify";
import Button from "./Button";

const About = () => {
  return (
    <>
      <div className="h-fit flex flex-col">
        <div className="rotate-180">
          <Wave
            fill="#1E3A8A"
            paused={false}
            options={{
              height: 20,
              amplitude: 40,
              speed: 0.25,
              points: 3,
            }}
          />
        </div>
        <div className="w-100 relative text-white h-fit gap-5 flex flex-col items-center justify-center">
          <h1 className=" text-4xl">About</h1>
          <img
            className="w-72 drop-shadow-2xl rounded-lg border-orange-400"
            src="https://romanaugusto.tk/img/163293109_1356644491362846_1748712258447566176_n.jpg"
          />
          <div className="flex flex-col justify-center my-5 w-[280px]">
            <p className="text-xl w-100 z-10">
              I'm Roman, I spend 4 years in University studying Psychology and
              came out a programmer.
            </p>
            <br />
            <p className="text-xl w-100 z-10">Whoops.</p>
          </div>
          <a href="#contacts" className="z-10">
            <Button title={"Contact Me"} />
          </a>
          <div className="-bottom-3 absolute z-0">
            <Wave
              fill="#1E3A8A"
              paused={false}
              options={{
                height: 20,
                amplitude: 40,
                speed: 0.25,
                points: 3,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
