"use client";
import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import classes from "./CoreCalendar.module.css";

const CoreCalendar = () => {
  const localizer = momentLocalizer(moment);
  const events = [
    {
      title: "My Event",
      start: new Date(2025, 6, 20, 10, 0),
      end: new Date(2025, 6, 20, 12, 0),
    },
  ];

  const CustomEvent = ({ event }) => {
    return (
      <div className='bg-purple-200 p-1 rounded text-sm'>
        📝 <strong>{event.title}</strong>
      </div>
    );
  };

  // const CustomToolbar = (toolbar) => {
  //   return (
  //     <div className="flex justify-between items-center mb-4">
  //       <button onClick={() => toolbar.onNavigate("PREV")}>← Prev</button>
  //       <div>{toolbar.label}</div>
  //       <button onClick={() => toolbar.onNavigate("NEXT")}>Next →</button>
  //     </div>
  //   );
  // };
  return (
    <div className={"min-w-[50rem] h-auto"}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        // style={{ height: 500 }}
        selectable={true}
        onSelectSlot={(slotInfo) => {
          console.log("Selected slot", slotInfo);
        }}
        views={["month"]}
        components={{
          event: CustomEvent,
          // toolbar: CustomToolbar,
        }}
        //   onSelectEvent={(event) => {
        //     console.log("Selected event", event);
        //   }}
      />
    </div>
  );
};

export default CoreCalendar;
