import React from "react";
import { NavLink } from "react-router-dom";
import '../css/home.css'


const HomePage = () => {
  return (
    <div className="HomeDiv">
      <div className="TitleDiv">
        <h2>Southhwell Health Physician Partners</h2>
      </div>
      <ul>
        <div className="Intro-block">
          <span className="Intro-description">
            <h3>World-class care is available in your neighborhood </h3>
            <p>
              Our offices are located throughout Queens, including right here in
              the center of Flushing. So you’ll never have to travel far to get
              the care you need.
            </p>
          </span>
          <span className="Intro-address">
          <label className="cardlabel">Location</label>

            <p>Address:136-17 39th Avenue, 2th Floor, NY 11354</p>
            <span className="Intro-address_directions">
              <a
                href="https://www.google.com/maps/place/136-17+39th+Avenue+2th+Floor+Flushing+NY+11354"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-map-marker-alt "></i>Get directions{" "}
              </a>
            </span>
          </span>
          <div className="FlexBox">
          <span className="Intro-contact">
          <label className="cardlabel">Contact</label>
            <p>Phone 1:(234)-555-6666</p>
            <p>Phone 2:(234)-555-6667</p>
            <p>Fax:(234)-555-6669</p>
          </span>
          <span className="Intro-hours">
            <label className="cardlabel">Hours</label>
            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Saturday</td>
                  <td>Closed</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>Closed</td>
                </tr>
                <tr>
                  <td>Monday</td>
                  <td>9am - 6pm</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>9am - 6pm</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>9am - 6pm</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>9am - 6pm</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>9am - 6pm</td>
                </tr>
              </tbody>
            </table>
          </span>
          </div>

        </div>
      </ul>
      <div className="HomeBtnBox">
      <NavLink to="/appointment">
        <button className="HomeBtn">Schedule Appointment</button>
        
      </NavLink>
      <NavLink to="/docstimes">
        <button className="HomeBtn">View Appointment</button>
      </NavLink>

      </div>

    </div>
  );
  
};

export default HomePage;
