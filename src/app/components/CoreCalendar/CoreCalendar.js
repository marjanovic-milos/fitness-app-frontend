import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import "react-big-calendar/lib/sass/styles";
// import "react-big-calendar/lib/addons/dragAndDrop/styles";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const CoreCalendar = () => {
  const localizer = momentLocalizer(moment);
  const events = [
    {
      title: "My Event",
      start: new Date(2025, 6, 20, 10, 0),
      end: new Date(2025, 6, 20, 12, 0),
    },
  ];

  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500, width: "100%" }}
      selectable={true}
      onSelectSlot={(slotInfo) => {
        console.log("Selected slot", slotInfo);
      }}
      //   onSelectEvent={(event) => {
      //     console.log("Selected event", event);
      //   }}
    />
  );
};

export default CoreCalendar;
