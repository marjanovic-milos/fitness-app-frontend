import React, { useState } from "react";
import CalendarWeekly from "../CoreCalendar/CalendarWeekly";
import CoreCard from "../CoreCard/CoreCard";
import { Calendar, ChevronDown, LayoutDashboard } from "lucide-react";
const CoreDashboard = () => {
  const [view, setView] = useState(true);
  return (
    <>
      <div className="flex xl:flex-row flex-col gap-6 size-full">
        <CoreCard>
          <div className="flex justify-between w-full pt-5 px-5">
            {/* {view ? (
              <div className="flex w-full items-center gap-2">
                <Calendar className="w-5 h-5" strokeWidth={1.5} />
                <p className="text-lg font-semibold">{"Month View"}</p>
              </div>
            ) : (
              <div className="flex w-full items-center gap-2">
                <LayoutDashboard className="w-5 h-5" strokeWidth={1.5} />
                <p className="text-lg font-semibold">{"Week View"}</p>
              </div>
            )} */}

            {/* <div
              className="flex items-center justify-between bg-slate-50 font-semibold rounded-full px-3 py-1 cursor-pointer"
              onClick={() => setView(!view)}
            >
              {view ? "Week" : "Month"}
              <ChevronDown className="w-5 h-5" strokeWidth={1.5} />
            </div> */}
          </div>
          <CalendarWeekly />
        </CoreCard>
        <div className="w-2xl">
          <CoreCard></CoreCard>
        </div>
      </div>
    </>
  );
};

export default CoreDashboard;
