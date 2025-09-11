import React, { useState } from "react";
import CoreHeading from "../CoreHeading/CoreHeading";
import CoreDropdown from "../CoreDropdown/CoreDropdown";
import CoreButton from "../CoreButton/CoreButton";
import CoreModal from "../CoreModal/CoreModal";
import CreateEvent from "src/modules/events/CreateEvent";
import { Calendar, LayoutDashboard, Plus } from "lucide-react";

const DashboardHeading = () => {
  const [selected, setSelected] = useState("calendar");
  const [isOpen, setOpen] = useState(false);

  const options = [
    { value: "calendar", label: "Calendar" },
    { value: "weekly", label: "Weekly" },
  ];

  return (
    <>
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
          <CoreHeading type="h2" className="font-semibold" icon={Calendar}>
            Calendar
          </CoreHeading>
        )}
        <div className="flex gap-4">
          <CoreButton
            classes="w-fit !text-sm"
            onClick={() => setOpen(true)}
            icon={Plus}
          >
            Add New
          </CoreButton>
          <CoreDropdown
            options={options}
            value={selected}
            onChange={(val) => setSelected(val)}
          />
        </div>
      </div>

      <CoreModal
        heading="Create New Event"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      >
        <CreateEvent handleCLose={() => setOpen(false)} />
      </CoreModal>
    </>
  );
};

export default DashboardHeading;
