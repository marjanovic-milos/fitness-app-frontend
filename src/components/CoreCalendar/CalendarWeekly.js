import React, { useMemo } from "react";
// import StaticMeter from "../StaticMeter/StaticMeter";
import moment from "moment";

import { getWeekRange } from "src/utils/calendar";
const CalendarWeekly = () => {
  const today = moment().format("DD-MMM");
  const weekDates = useMemo(() => getWeekRange(3, 3, "DD-MMM"), []);

  return (
    <div className="weekly-root">
      <div className="flex flex-col justify-around h-full">
        <h2 className="text-2xl text-bold  text-gray-600  text-center ">
          {today}
        </h2>
        {/* <StaticMeter /> */}
      </div>
      <div className="week-root">
        {weekDates.map((date, index) => (
          <div className="flex flex-col items-center" key={index}>
            <span key={index} className="day-root"></span>
            <p className="my-3 font-thiin">{date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarWeekly;
