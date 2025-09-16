"use client";
import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { momentLocalizer } from "react-big-calendar";
import moment from "moment";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const CoreCalendar = ({ events, setSelectedDate }) => {
  return (
    <div className={"core-table"}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "",
        }}
        selectable
        events={events}
        dayMaxEvents={1}
        select={(info) => {
          setSelectedDate(info.start);
        }}
      />
    </div>
  );
};

export default CoreCalendar;
