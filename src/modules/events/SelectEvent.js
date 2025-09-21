import React from "react";
import EventComponent from "./EventComponent";

import CoreCheckbox from "src/components/CoreCheckbox/CoreCheckbox";

import CoreButton from "src/components/CoreButton/CoreButton";

import { Trash, Check } from "lucide-react";
import CoreText from "src/components/CoreText/CoreText";

import CoreCard from "src/components/CoreCard/CoreCard";
import { useForm } from "react-hook-form";
import { useSelectEvent } from "src/talons/useSelectEvent";

const SelectEvent = ({ events, eventId }) => {
  const { handleSubmit, control, setValue, reset } = useForm({
    defaultValues: {
      ids: [],
    },
  });
  const {
    informationDetails,
    updateAttendance,
    selectedEvent,
    deleteMutation,
  } = useSelectEvent({ events, eventId, reset });

  console.log(informationDetails, "informationDetails");
  return (
    <div className="min-h-screen w-full p-5">
      <div className="flex justify-end gap-4 w-full px-10">
        <CoreButton
          classes="w-fit !text-sm"
          onClick={() => deleteMutation(selectedEvent?.id)}
          icon={Trash}
        >
          Delete
        </CoreButton>
      </div>
      <div className="px-10 my-5">
        {selectedEvent && (
          <CoreCard>
            <div className="flex gap-5 justify-between items-start px-5">
              <div className="flex flex-col items-start gap-5">
                <CoreText>Attendance</CoreText>
                <form onSubmit={handleSubmit(updateAttendance)}>
                  <div className="flex gap-5">
                    {selectedEvent?.clients?.map((client) => (
                      <CoreCheckbox
                        name="ids"
                        key={client.id}
                        control={control}
                        label={client.label}
                        value={client.id}
                        setValue={setValue}
                      />
                    ))}
                  </div>

                  <CoreButton type="submit" classes="my-5" icon={Check}>
                    Save
                  </CoreButton>
                </form>
              </div>

              {informationDetails?.length ? (
                <div className="flex flex-col">
                  <CoreText className="mb-4">
                    These users don't have memberships active.
                  </CoreText>
                  {informationDetails?.map((info) => (
                    <div className="flex flex-col items-start w-fit p-2 gap-1 bg-blue-600 rounded-lg text-sm ">
                      <p>{info?.name}</p>
                      <p> {info?.email}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </CoreCard>
        )}
      </div>

      <EventComponent event={selectedEvent} modalName={"edit-event"} />
    </div>
  );
};

export default SelectEvent;
