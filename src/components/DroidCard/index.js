import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Class:</strong> {props.class}
          </li>
          <li>
            <strong>Origin:</strong> {props.origin}
          </li>
        </ul>
      </div>
      <span className="remove">𝘅</span>
    </div>
  );
}

export default FriendCard;
