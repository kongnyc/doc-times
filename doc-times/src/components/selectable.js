import React from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css'
const Selectable = (props) => {
  const localizer = momentLocalizer(moment); //Data persistence 

  return (
    <div>
      <Calendar
        selectable
        events={props.events}
        defaultView={Views.WEEK}
        localizer={localizer}
        min={new Date(2017, 10, 0, 10, 0, 3)}
        max={new Date(2017, 10, 0, 18, 0, 0)}
        step={30}
        timeslots={1}
        custom
        defaultDate={new Date(2022, 1, 6)}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectSlot={props.handler}
      />
    </div>
  );
  
};

export default Selectable;
