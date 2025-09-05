import React, { useState } from "react";
import CalendarWeekly from "../CoreCalendar/CalendarWeekly";
import CoreCard from "../CoreCard/CoreCard";
import CoreDropdown from "../CoreDropdown/CoreDropdown";
import { Calendar, LayoutDashboard } from "lucide-react";
import CoreHeading from "../CoreHeading/CoreHeading";
import CoreCalendar from "../CoreCalendar/CoreCalendar";

import CoreModal from "../CoreModal/CoreModal";
import CoreButton from "../CoreButton/CoreButton";
import { Plus } from "lucide-react";

import CreateEvent from "src/modules/events/CreateEvent";
import CoreMultiSelect from "../CoreMultiselect/CoreMultiSelect";
const CoreDashboard = () => {
  const [selected, setSelected] = useState("calendar");
  const [isOpen, setOpen] = useState(false);

  const options = [
    { value: "calendar", label: "Calendar" },
    { value: "weekly", label: "Weekly" },
  ];

  return (
    <>
      <div className="flex gap-6 ">
        <CoreCard>
          <div className="p-6">
            <div className="flex justify-between">
              {selected === "weekly" ? (
                <CoreHeading
                  type="h2"
                  className="font-semibold"
                  icon={LayoutDashboard}
                >
                  Weekly
                </CoreHeading>
              ) : (
                <CoreHeading
                  type="h2"
                  className="font-semibold"
                  icon={Calendar}
                >
                  Calendar
                </CoreHeading>
              )}
              <div className="flex gap-4">
                <CoreDropdown
                  options={options}
                  value={selected}
                  onChange={(val) => setSelected(val)}
                />
              </div>
            </div>
            <div className="flex flex-col mt-10">
              <div className=" my-10">
                <CoreButton
                  classes="w-fit"
                  onClick={() => setOpen(true)}
                  icon={Plus}
                >
                  Add New
                </CoreButton>
                {/* <CoreMultiSelect /> */}
              </div>
              <CoreCalendar />
              <CoreModal
                heading="Create New Event"
                isOpen={isOpen}
                onClose={() => setOpen(false)}
              >
                <CreateEvent />
              </CoreModal>
            </div>
          </div>
        </CoreCard>
        {/* <div className="w-[50vw] h-auto bg-red-200">
          <CoreAccordion title="Something new">
            <p>aaaaa</p>
          </CoreAccordion>
        </div> */}
      </div>
    </>
  );
};

export default CoreDashboard;
