import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
      <li>
        <NavLink exact to="/">
          <button className="addBizBtn">Home</button>
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
