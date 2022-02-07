import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Clock from "./clock";
import { useInput } from "../util/useInput";
import Selectable from "./selectable";

const Appointment = () => {
  const patientName = useInput("");
  const [reason, setReason] = useState("");
  const [events, setEventsList] = useState([]);

  const handleSelect = ({ start, end }) => {
    if (reason) {
      let newEvent = {
        patientName: patientName.value,
        start: start,
        end: end,
        title: reason,
      };
      setEventsList([...events, newEvent]);
    }else{
        window.alert('please selected a reason for your appointment')
    }
  };
  const handlePatient = async (e) => {
    e.preventDefault();
    try {
    if(events.length>0){
        console.log(patientName.value, reason, events);
        // debugger
        
        <NavLink to="/confirmation">
      </NavLink>
    }else{
        window.alert("please pick a time for your appointment")
    }
    } catch (error) {
      console.log(error);
    }
  };
  const handleReason = (e) => {
    setReason(e.target.value);
  };

  return (
    <div>
      <Clock />
      <div className="Question-start">
        <form className="patientInfo" onSubmit={handlePatient}>
          <label>who are are booking?</label>
          <label>
            Patient Name:
            <input
              type="text"
              placeholder="First + Last Name"
              {...patientName}
              required
            />
          </label>
          <br></br>
          <label>what's your reason for appointment?</label>
          <select onChange={handleReason} value={null} required>
            <option selected disabled>
              select one reason
            </option>

            <option value="Covid vaccine" name="Covid vaccine">
              Covid Vaccine
            </option>
            <option value="Flu vaccine" name="Flu vaccine">
              Flu Vaccine
            </option>
            <option value="Annual Physical Exam" name="Annual Physical Exam">
              Annual Physical Exam
            </option>
            <option value="Consultations" name="Consultations">
              Consultations
            </option>
          </select>
          <br></br>
          <div>
            <Selectable
              patientName={patientName.value}
              reason={reason}
              events={events}
              handler={handleSelect}
            />
          </div>
          <NavLink to={{pathname:"/confirmation", userProps:{name:patientName.value, reason:reason, time:events}}}>
          <button type="submit" value="Submit" >Submit</button>
      </NavLink>
        </form>
      </div>
    </div>


  );
};

export default Appointment;
