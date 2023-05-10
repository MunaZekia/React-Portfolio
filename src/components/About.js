import React from "react";

function About() {
  return (
    <div className="content pb-5">
      <h2>About Me</h2>

      <div className="aboutMain">
        <div className="aboutBox bg-light bg-opacity-50 rounded-4 shadow pt-3 pb-3">
          <div className="about">
            <div className="hiBox">
              <p>Hi, I'm Muna Zeki👋 </p>
              <p>My name is Muna Zeki. I am a school interventionist </p>
            </div>

            <img
              className="photo "
              src={require("../../assets/ ")} // insert photo here
              alt="Pic of "
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
