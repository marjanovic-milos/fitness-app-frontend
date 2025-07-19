"use client";
import { useState } from "react";
import defaultClass from "./test.module.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

export default function Home() {
  const [startDate, setStartDate] = useState(new Date());
  const localizer = momentLocalizer(moment);
  const events = [
    {
      title: "My Event",
      start: new Date(2025, 6, 20, 10, 0), // July 20, 2025 at 10:00
      end: new Date(2025, 6, 20, 12, 0),
    },
  ];
  return (
    <div className={defaultClass.test}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable={true}
        onSelectSlot={(slotInfo) => {
          console.log("Selected slot", slotInfo);
        }}
        onSelectEvent={(event) => {
          console.log("Selected event", event);
        }}
      />
    </div>
  );
}
