import React from "react";
import JumbotronSW from "./Jumbotron.js";
import droids from "../droids.json";
import DroidCard from "./DroidCard";
import "./style.css";


//Functions Go Here
// Randomize the placement of droids

function Wrapper(props) {
  return <div className="wrapper">{props.children}
    <JumbotronSW />
      {droids.map((droid) =>
        {
          return <DroidCard
            key={droid.id}
            name={droid.name}
            image={droid.image}
          />
        })
      }
  </div>
}

export default Wrapper;

