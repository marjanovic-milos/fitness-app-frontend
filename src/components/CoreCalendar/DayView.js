import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import CoreCard from "../CoreCard/CoreCard";
const DayView = ({ events, dayCalendarRef, initialDate }) => {
  return (
    <CoreCard>
      <div className="day-view-calendar p-5">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridDay"
          headerToolbar={{
            left: "",
            center: "",
            right: "",
          }}
          editable={true}
          selectable
          ref={dayCalendarRef}
          events={events}
          initialDate={initialDate}
          select={(info) => {
            console.log(info);
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
          allDaySlot={false}
          // eventResize={(info) => {
          //   console.log("Resized:", info.event.title, info.event.start, info.event.end);
          // }}
        />
      </div>
    </CoreCard>
  );
};

export default DayView;
