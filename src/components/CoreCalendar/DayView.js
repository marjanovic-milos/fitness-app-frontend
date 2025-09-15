import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import CoreCard from "../CoreCard/CoreCard";
import { updateEvent } from "src/http/api/events";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import styles from "./DayView.module.css";
import { Pencil } from "lucide-react";

const DayView = ({ events, dayCalendarRef, initialDate, handleEventClick }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
      toast.success("Successfully updated!");
      console.log("radi");
    },
    onError: (err) => {
      console.error("❌ Error:", err);
      toast.error("Something went wrong!");
    },
  });
  console.log(events);

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
            handleEventClick(info.event);
          }}
          eventDrop={(info) => {
            const selectedEvent = events.filter(
              (event) => event.id === info.event.id
            )[0]?._id;

            mutate({
              data: { start: info.event.start, end: info.event.end },
              id: selectedEvent,
            });
          }}
          eventResize={(info) => {
            const selectedEvent = events.filter(
              (event) => event.id === info.event.id
            )[0]?._id;

            mutate({
              data: { start: info.event.start, end: info.event.end },
              id: selectedEvent,
            });
          }}
          eventContent={(eventInfo) => {
            console.log(eventInfo, "info");
            return (
              <div className={styles.customEvent}>
                <span className={styles.iconWrapper}>
                  <Pencil className={styles.icon} strokeWidth={1.5} />
                </span>

                <b>{eventInfo.timeText}</b>
                <b>{eventInfo.event.extendedProps.trainingType}</b>
              </div>
            );
          }}
        />
      </div>
    </CoreCard>
  );
};

export default DayView;
