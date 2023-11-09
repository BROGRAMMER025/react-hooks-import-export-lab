import React from "react";
import { username } from "../data/user";
import { city } from "../data/user";


function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}
function User(){
  return(
    <div>
      <div>
        {username}
      </div>
      <div>
        {city}
      </div>
      </div>
  )
}
export default Home