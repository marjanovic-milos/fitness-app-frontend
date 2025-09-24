import React, { useState } from "react";
import CoreHeading from "../CoreHeading/CoreHeading";
import CoreDropdown from "../CoreDropdown/CoreDropdown";
import CoreButton from "../CoreButton/CoreButton";
import CoreModal from "../CoreModal/CoreModal";
import EventComponent from "src/modules/events/EventComponent";
import { Calendar, LayoutDashboard, Plus } from "lucide-react";
import { useModals } from "src/context/modal";
const DashboardHeading = () => {
  const [selected, setSelected] = useState("calendar");

  const options = [
    { value: "calendar", label: "Calendar" },
    { value: "weekly", label: "Weekly" },
  ];
  const { openModal, toggleModal, modals } = useModals();

  return (
    <>
      <div className="flex xl:flex-row flex-col items-start gap-4 justify-between">
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
            onClick={() => openModal("add-new")}
            icon={Plus}
          >
            Add New
          </CoreButton>
          {/* <CoreDropdown
            options={options}
            value={selected}
            onChange={(val) => setSelected(val)}
          /> */}
        </div>
      </div>

      <CoreModal
        // heading="Create New Event"
        modalName={"add-new"}
        toggleModal={() => toggleModal("add-new")}
      >
        <EventComponent modalName="add-new" />
      </CoreModal>
    </>
  );
};

export default DashboardHeading;
