"use client";
import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { momentLocalizer } from "react-big-calendar";
import moment from "moment";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const CoreCalendar = ({ events, setSelectedDate, dayCalendarRef }) => {
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
        events={events}
        select={(info) => {
          setSelectedDate(info.date);
          const dayApi = dayCalendarRef.current.getApi();
          dayApi.gotoDate(info.date);
        }}
        // select={(info) => {
        //   console.log(info);
        //   setDate(info);
        // }}
        eventDrop={(info) => {}}
        eventResize={(info) => {}}
      />
    </div>
  );
};

export default CoreCalendar;
