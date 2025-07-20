"use client";
import { useState } from "react";
import defaultClass from "./test.module.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  // const [startDate, setStartDate] = useState(new Date());
  // const localizer = momentLocalizer(moment);
  // const events = [
  //   {
  //     title: "My Event",
  //     start: new Date(2025, 6, 20, 10, 0),
  //     end: new Date(2025, 6, 20, 12, 0),
  //   },
  // ];
  return (
    <div className={"px-12"}>
      <div className="py-5">
        <h1>{t("welcome")}</h1>
        <p>{t("description")}</p>
      </div>
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
        onSelectEvent={(event) => {
          console.log("Selected event", event);
        }}
      /> */}
    </div>
  );
}
