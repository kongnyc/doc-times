import React, { Component } from "react";
import {
  Route,
  Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import HomePage from "./components/homePage";
import Register from "./components/register";
import Login from "./components/login";
import NavBar from './components/navBar'
import Appointment from './components/appointment'
import Docstimes from './components/docstimes'

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Southhwell Health Appointment</h1>
          <ul className="header">
            <NavBar />
          </ul>
          <div className="content">
      <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/register" element={<Register/>} ></Route>
            <Route path="/appointment" element={<Appointment/>} ></Route>
            <Route path="/docstimes" element={<Docstimes/>} ></Route>
        </Routes>
          </div>
        </div>
      
      </HashRouter>
    );
  }
  
}
