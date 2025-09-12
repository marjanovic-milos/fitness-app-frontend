import React, { useState, useEffect, useRef } from "react";
import CalendarWeekly from "../CoreCalendar/CalendarWeekly";
import CoreCard from "../CoreCard/CoreCard";
import DayView from "../CoreCalendar/DayView";
import CoreCalendar from "../CoreCalendar/CoreCalendar";
import DashboardHeading from "./DashboardHeading";

import { useQuery } from "@tanstack/react-query";
import { getEvents } from "src/http/api/events";
const CoreDashboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: () => getEvents("month"),
  });

  const dayCalendarRef = useRef();
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    if (!selectedDate) return;
    const api = dayCalendarRef.current?.getApi();
    if (api) api.gotoDate(selectedDate);
  }, [selectedDate]);

  return (
    <>
      <div className="">
        <CoreCard>
          <div className="p-6 ">
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
              />
            </div>
          </div>
        </CoreCard>
        {/* <div className="w-2xl">
          <CoreCard></CoreCard>
        </div> */}
      </div>
    </>
  );
};

export default CoreDashboard;
