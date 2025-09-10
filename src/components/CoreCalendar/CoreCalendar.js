"use client";
import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { momentLocalizer } from "react-big-calendar";
import moment from "moment";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const CoreCalendar = ({ dates }) => {
  return (
    <div className={"core-table h-auto"}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "",
        }}
        selectable
        // editable
        events={dates}
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
          console.log(
            "Dropped:",
            info.event.title,
            info.event.start,
            info.event.end
          );
        }}
        // eventResize={(info) => {
        //   console.log("Resized:", info.event.title, info.event.start, info.event.end);
        // }}
      />
    </div>
  );
};

export default CoreCalendar;
