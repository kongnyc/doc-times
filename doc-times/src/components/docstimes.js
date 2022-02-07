import React from 'react'
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import events from '../examples/events'
const localizer = momentLocalizer(moment); //Data persistence 


function Event({ event }) {
  return (
    <span>
      <strong>{event.title}</strong>
      {event.desc && ':  ' + event.desc}
    </span>
  )
}

function EventAgenda({ event }) {
  return (
    <span>
      <em style={{ color: 'magenta' }}>{event.title}</em>
      <p>{event.desc}</p>
    </span>
  )
}

const customDayPropGetter = date => {
  if (date.getDate() === 7 || date.getDate() === 15)
    return {
      className: 'special-day',
      style: {
        border: 'solid 3px ' + (date.getDate() === 7 ? '#faa' : '#afa'),
      },
    }
  else return {}
}

const customSlotPropGetter = date => {
  if (date.getDate() === 7 || date.getDate() === 15)
    return {
      className: 'special-day',
    }
  else return {}
}

let Rendering = () => (
  <Calendar
    events={events}
    localizer={localizer}
    defaultDate={new Date()}
    defaultView={Views.AGENDA}
    dayPropGetter={customDayPropGetter}
    slotPropGetter={customSlotPropGetter}
    components={{
      event: Event,
      agenda: {
        event: EventAgenda,
      },
    }}
  />
)

export default Rendering