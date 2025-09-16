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
import { User, Users } from "lucide-react";

const DayView = ({ events, dayCalendarRef, initialDate, handleEventClick }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
      toast.success("Successfully updated!");
    },
    onError: (err) => {
      console.error("❌ Error:", err);
      toast.error("Something went wrong!");
    },
  });

  return (
    <CoreCard>
      <div className="day-view-calendar p-5">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridDay"
          slotDuration="00:30:00"
          snapDuration="00:30:00"
          headerToolbar={{
            left: "",
            center: ``,
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
          eventContent={(arg) => {
            return (
              <div className="flex gap-20 w-xs py-2">
                <div>
                  {arg.event.extendedProps.clients.length > 1 ? (
                    <div className="relative">
                      <div className="absolute left-4 z-2 border w-10 h-10 rounded-full flex items-center justify-center bg-gray-300 text-gray-900">
                        <User className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                      <div className="absolute z-1 left-6 w-10 h-10 border rounded-full flex items-center justify-center bg-gray-300 text-gray-900">
                        <User className="w-2 h-2" strokeWidth={1.5} />
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <div className="absolute left-4 z-2 border w-10 h-10 rounded-full flex items-center justify-center bg-gray-300 text-gray-900">
                        <User className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                    </div>
                  )}
                </div>
                <div className="">
                  <div>
                    {arg.event.extendedProps.clients.length > 1
                      ? "Group"
                      : "Individualni"}
                  </div>
                  <div>{arg.timeText}</div>
                </div>
              </div>
            );
          }}
        />
      </div>
    </CoreCard>
  );
};

export default DayView;
