import React from "react";
import { image } from "../data/user";


function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}
function image(){
  return(
    <div>
      <img src={image} alt="User Avatar" />
    </div>
  )
}
export default About
