import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import '../css/navBar.css'

export default class NavBar extends Component {
  render() {
    return (
      <div className="Nav">
      <li>
        <NavLink exact to="/">
          <button className="NavBtn">Home</button>
        </NavLink>

      </li>
      <li>
        <NavLink exact to="/login">
          <button className="NavBtn">Login in</button>
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/register">
          <button className="NavBtn">Register</button>
        </NavLink>

      </li>
      
      </div>
    );
  }
  
}
