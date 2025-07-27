import React, { useMemo } from "react";
import CoreCard from "../CoreCard/CoreCard";
import moment from "moment";

import { getWeekRange } from "src/app/utils/calendar";
const CalendarWeekly = () => {
  const today = moment().format("DD-MMM");
  const weekDates = useMemo(() => getWeekRange(3, 3, "DD-MMM"), []);

  return (
    <CoreCard>
      <div className="weekly-root">
        <h2 className="text-2xl text-bold  text-gray-600 text-center">
          {today}
        </h2>
        <div className="week-root text-gray-600">
          {weekDates.map((date, index) => (
            <div className="flex flex-col items-center" key={index}>
              <span key={index} className="day-root"></span>
              <p className="my-3 font-thiin">{date}</p>
            </div>
          ))}
        </div>
      </div>
    </CoreCard>
  );
};

export default CalendarWeekly;
