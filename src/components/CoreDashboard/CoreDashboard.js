import React, { useState, useEffect, useRef } from "react";
// import CalendarWeekly from "../CoreCalendar/CalendarWeekly";
import CoreCard from "../CoreCard/CoreCard";
import DayView from "../CoreCalendar/DayView";
import CoreCalendar from "../CoreCalendar/CoreCalendar";
import DashboardHeading from "./DashboardHeading";
import CoreModal from "../CoreModal/CoreModal";
import SelectEvent from "src/modules/events/SelectEvent";
import { useQuery } from "@tanstack/react-query";
import { getEvents } from "src/http/api/events";
import { useModals } from "src/context/modal";
const CoreDashboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: () => getEvents("month"),
  });

  const { toggleModal } = useModals();
  const dayCalendarRef = useRef();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [eventId, setEventId] = useState("");

  useEffect(() => {
    if (!selectedDate) return;
    const api = dayCalendarRef.current?.getApi();
    if (api) api.gotoDate(selectedDate);
  }, [selectedDate]);

  const handleEventClick = (eventInfo) => {
    setEventId(eventInfo?.id);
    toggleModal("edit-event");
  };

  return (
    <div className="">
      <CoreCard>
        <div className="xl:p-6 p-2">
          <DashboardHeading />
          <div className="grid lg:grid-cols-[2fr_3fr] gtid-cols-auto gap-6">
            <CoreCalendar
              events={data}
              dayCalendarRef={dayCalendarRef}
              setSelectedDate={setSelectedDate}
            />
            <DayView
              events={data}
              initialDate={selectedDate}
              dayCalendarRef={dayCalendarRef}
              handleEventClick={handleEventClick}
            />

            <CoreModal
              heading=""
              modalName={"edit-event"}
              toggleModal={() => toggleModal("edit-event")}
            >
              <SelectEvent
                events={data}
                eventId={eventId}
                modalName="edit-event"
              />
            </CoreModal>
          </div>
        </div>
      </CoreCard>
    </div>
  );
};

export default CoreDashboard;
