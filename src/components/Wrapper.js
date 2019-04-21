import React from "react";
import DroidCard from "./DroidCard";
import droids from "../droids.json"
import JumbotronSW from "./Jumbotron.js";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper">{props.children}
  <JumbotronSW />
      <h1>Droids</h1>

      {droids.map((droid) =>{
          return <DroidCard
          key={droid.id}
          name={droid.name}
          image={droid.image}
          />
        })}
  </div>;
  
}

export default Wrapper;

// Randomize the placement