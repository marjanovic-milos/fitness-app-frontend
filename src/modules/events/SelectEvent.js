import React from "react";
import EventComponent from "./EventComponent";

import CoreCheckbox from "src/components/CoreCheckbox/CoreCheckbox";

import CoreButton from "src/components/CoreButton/CoreButton";

import { Trash, Check, Zap } from "lucide-react";
import CoreText from "src/components/CoreText/CoreText";
import CoreHeading from "src/components/CoreHeading/CoreHeading";
import CoreCard from "src/components/CoreCard/CoreCard";
import { useForm } from "react-hook-form";
import { useSelectEvent } from "src/talons/useSelectEvent";

const SelectEvent = ({ events, eventId }) => {
  const { handleSubmit, control, setValue, reset } = useForm({
    defaultValues: {
      ids: [],
    },
  });
  const { informationDetails, onSubmit, selectedEvent, deleteMutation } =
    useSelectEvent({ events, eventId, reset });

  return (
    <div className="w-full lg:max-h-full max-h-[80vh] mt-22 lg:overflow-hidden overflow-y-scroll">
      <div className="lg:px-10 px-5">
        <div className="flex justify-between gap-4 w-full my-5">
          <CoreHeading type="h2" className="font-semibold" icon={Zap}>
            Edit event
          </CoreHeading>
          <CoreButton
            classes="w-fit !text-sm"
            onClick={() => deleteMutation(selectedEvent?.id)}
            icon={Trash}
          >
            Delete
          </CoreButton>
        </div>
        {selectedEvent && (
          <CoreCard>
            <div className="flex lg:flex-row flex-col gap-5 justify-between items-start px-5">
              <div className="flex flex-col items-start gap-5">
                <CoreText>Training Attendance</CoreText>
                <form onSubmit={handleSubmit(onSubmit)}>
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

                  <CoreButton
                    type="submit"
                    classes="my-5 w-[100px]"
                    icon={Check}
                  >
                    Save
                  </CoreButton>
                </form>
              </div>

              {informationDetails?.length ? (
                <div className="flex flex-col gap-2 p-5">
                  <CoreText className="mb-4">
                    These users don't have memberships active.
                  </CoreText>
                  {informationDetails?.map((info, key) => (
                    <div
                      key={key}
                      className="flex items-start w-fit p-3 gap-1 bg-[var(--color-third)] rounded-full text-sm "
                    >
                      <p>{info?.name}</p>-<p> {info?.email}</p>
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
