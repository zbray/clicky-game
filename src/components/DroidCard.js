import React from "react";
import Image from 'react-bootstrap/Image'
import "./style.css";

function DroidCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <Image alt={props.name} src={props.image} thumbnail/>
      </div>
    </div>
  );
}

export default DroidCard;

// Randomize the placement