import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import CoreCard from "../CoreCard/CoreCard";

const DayView = ({ events, dayCalendarRef, initialDate, handleEventClick }) => {
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
          allDaySlot={false}
          editable={true}
          selectable={true}
          ref={dayCalendarRef}
          events={events}
          initialDate={initialDate}
          eventClick={(info) => {
            // console.log(info.event);
            handleEventClick(info.event);
          }}
          eventDrop={(info) => {
            console.log(
              "Dropped:",
              info.event.title,
              info.event.start,
              info.event.end
            );
          }}
        />
      </div>
    </CoreCard>
  );
};

export default DayView;
