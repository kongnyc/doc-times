import React from "react";
import { NavLink } from "react-router-dom";



const HomePage = () => {
  return (
    <div className="HomeDiv">
      <div className="TitleDiv">
        <h2>Southhwell Health Physician Partners</h2>
      </div>
      <ul>
        <div className="Intro-block">
          <div className="Intro-description">
            <h3>World-class care is available in your neighborhood </h3>
            <p>
              Our offices are located throughout Queens, including right here in
              the center of Flushing. So you’ll never have to travel far to get
              the care you need.
            </p>
          </div>
          <div className="Intro-address">
            <p>Address:136-17 39th Avenue, 2th Floor, NY 11354</p>
            <div class="Intro-address_directions">
              <a
                href="https://www.google.com/maps/place/136-17+39th+Avenue+2th+Floor+Flushing+NY+11354"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fas fa-map-marker-alt "></i>Get directions{" "}
              </a>
            </div>
          </div>
          <div className="Intro-contact">
            <p>Phone 1:(234)-555-6666</p>
            <p>Phone 2:(234)-555-6667</p>
            <p>Fax:(234)-555-6669</p>
          </div>
          <div class="Intro-hours">
            <div class="card__hours_label">Hours</div>
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
                  <td>9am - 5pm</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>9am - 5pm</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>9am - 5pm</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>9am - 5pm</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>9am - 5pm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ul>
      <NavLink to="/appointment">
        <button className="HomeBtn">Schedule Appointment</button>
        
      </NavLink>
      <NavLink to="/docstimes">
        <button className="HomeBtn">View Appointment</button>
      </NavLink>

    </div>
  );
  
};

export default HomePage;
