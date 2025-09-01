import React, { useState } from "react";
import CalendarWeekly from "../CoreCalendar/CalendarWeekly";
import CoreCard from "../CoreCard/CoreCard";
import CoreDropdown from "../CoreDropdown/CoreDropdown";
import { Calendar, LayoutDashboard } from "lucide-react";
import CoreHeading from "../CoreHeading/CoreHeading";
import CoreCalendar from "../CoreCalendar/CoreCalendar";
import CoreAccordion from "../CoreAccordion/CoreAccordion";
const CoreDashboard = () => {
  const [selected, setSelected] = useState("weekly");

  const options = [
    { value: "calendar", label: "Calendar" },
    { value: "weekly", label: "Weekly" },
  ];

  return (
    <>
      <div className='flex gap-6 '>
        <CoreCard>
          <div className='p-6'>
            <div className='flex justify-between'>
              {selected === "weekly" ? (
                <CoreHeading type='h2' className='font-semibold' icon={LayoutDashboard}>
                  Weekly
                </CoreHeading>
              ) : (
                <CoreHeading type='h2' className='font-semibold' icon={Calendar}>
                  Calendar
                </CoreHeading>
              )}
              <CoreDropdown options={options} value={selected} onChange={(val) => setSelected(val)} />
            </div>

            {selected === "weekly" ? <CalendarWeekly /> : <CoreCalendar />}
          </div>
        </CoreCard>
        <div className='w-[50vw] h-auto bg-red-200'>
          <CoreAccordion title='Something new '>
            <p>aaaaa</p>
          </CoreAccordion>
        </div>
        {/* <div className="w-2xl">
          <CoreCard></CoreCard>
        </div> */}
      </div>
    </>
  );
};

export default CoreDashboard;
