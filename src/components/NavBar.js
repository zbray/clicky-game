import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import "./style.css";

class NavBar extends React.Component{
  render(){
    return (
      <div>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    </Navbar>
      </div>
      
    );
  }
}

// Clean this up
// Add Score to Navbar

export default NavBar;
