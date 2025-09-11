import React, { useState, useRef } from "react";
import CalendarWeekly from "../CoreCalendar/CalendarWeekly";
import CoreCard from "../CoreCard/CoreCard";
import DayView from "../CoreCalendar/DayView";
import CoreCalendar from "../CoreCalendar/CoreCalendar";
import DashboardHeading from "./DashboardHeading";

import { useQuery } from "@tanstack/react-query";
import { getEvents } from "src/http/api/events";
const CoreDashboard = () => {
  // const [date, setDate] = useState();

  const { data, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: () => getEvents("month"),
  });

  const dayCalendarRef = useRef();
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <>
      <div className="flex gap-6 ">
        <CoreCard>
          <div className="p-6">
            <DashboardHeading />
            <div className="flex">
              <CoreCalendar
                events={data}
                dayCalendarRef={dayCalendarRef}
                setSelectedDate={setSelectedDate}
              />
            </div>
          </div>
        </CoreCard>
        <div className="w-2xl">
          <CoreCard>
            <DayView
              events={data}
              initialDate={selectedDate}
              dayCalendarRef={dayCalendarRef}
            />
          </CoreCard>
        </div>
      </div>
    </>
  );
};

export default CoreDashboard;
