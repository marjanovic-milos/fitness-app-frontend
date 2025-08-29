"use client";
import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dynamic from "next/dynamic";
import { momentLocalizer } from "react-big-calendar";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import moment from "moment";

// const Calendar = dynamic(
//   () => import("react-big-calendar").then((mod) => mod.Calendar),
//   { ssr: false }
// );

// import classes from "./CoreCalendar.module.css";

const CoreCalendar = () => {
  // const localizer = momentLocalizer(moment);
  // const events = [
  //   {
  //     title: "Meeting",
  //     start: new Date(2025, 7, 24, 10, 0), // Aug 24, 2025, 10:00
  //     end: new Date(2025, 7, 24, 11, 0),
  //   },
  // ];

  const [events, setEvents] = useState([
    {
      id: "1",
      title: "Meeting",
      start: new Date().toISOString(),
      end: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
    },
  ]);
  return (
    <div className={"h-auto"}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView='timeGridWeek'
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridDay",
        }}
        selectable
        editable // enables drag/drop + resize
        events={events}
        select={(info) => {
          // const newEvent = {
          //   id: String(events.length + 1),
          //   title: "New Event",
          //   start: info.startStr,
          //   end: info.endStr,
          // };
          // setEvents([...events, newEvent]);
        }}
        eventDrop={(info) => {
          console.log("Dropped:", info.event.title, info.event.start, info.event.end);
        }}
        eventResize={(info) => {
          console.log("Resized:", info.event.title, info.event.start, info.event.end);
        }}
      />
      {/* <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable={true}
        onSelectSlot={(slotInfo) => {
          console.log("Selected slot", slotInfo);
        }}
        views={["month"]}
      /> */}
    </div>
  );
};

export default CoreCalendar;
