import React from "react";
import Wave from "react-wavify";

const About = () => {
  return (
    <>
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
      <div>About</div>
    </>
  );
};

export default About;
