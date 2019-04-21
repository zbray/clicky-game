import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Col from 'react-bootstrap/Col'
import "./style.css";

class NavBar extends React.Component{
  render(){
    return (
      <Navbar sticky="top" bg="dark" variant="dark">
        <Col>
          Title
        </Col>
        <Col>
          Click a Droid and Begin!
        </Col>
        <Col>
          Score:  | High Score:
        </Col>
    </Navbar>
    );
  }
}

// Add Score props to Navbar

export default NavBar;
