import React, { useState } from "react";
import EventComponent from "./EventComponent";
import { useQuery } from "@tanstack/react-query";
import { getSavedMeals } from "src/http/api/meals";
import { getExcercises } from "src/http/api/excercises";
import { getUsers } from "src/http/api/users";
import { useForm } from "react-hook-form";
import { deleteEvent } from "src/http/api/events";
import CoreCheckbox from "src/components/CoreCheckbox/CoreCheckbox";

import CoreButton from "src/components/CoreButton/CoreButton";
import { useMutation } from "@tanstack/react-query";
import { Trash, Check } from "lucide-react";
import CoreText from "src/components/CoreText/CoreText";

import CoreCard from "src/components/CoreCard/CoreCard";

const SelectEvent = ({ events, eventId }) => {
  const values = events?.find((event) => event.id === eventId);

  // const [editType, setEditType] = useState("attendance");
  // const [test, setTest] = useState(false);

  // const editOptions = [
  //   { value: "attendance", label: "Attendance" },
  //   { value: "edit", label: "Event Edit" },
  // ];

  const { data: excercisePlans } = useQuery({
    queryKey: ["existed-excercises", values?.excercisePlans],
    queryFn: () =>
      getExcercises({ ids: values?.excercisePlans, skipPagination: true }),
    enabled: !!values?.excercisePlans?.length,
  });

  const { data: mealPlans } = useQuery({
    queryKey: ["existed-meals", values?.mealPlans],
    queryFn: () =>
      getSavedMeals({ ids: values?.mealPlans, skipPagination: true }),
    enabled: !!values?.mealPlans?.length,
  });

  const { data: clients } = useQuery({
    queryKey: ["existed-clients", values?.clients],
    queryFn: () => getUsers({ ids: values?.clients, skipPagination: true }),
    enabled: !!values?.clients?.length,
  });

  const { mutate: deleteMutation } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      reset();
      toggleModal(modalName);
      toast.success("Successfully deleted!");
    },
  });

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      ids: [],
    },
  });
  const event = {
    excercisePlans:
      excercisePlans?.data?.map((plans) => ({
        id: plans._id,
        label: plans.name,
      })) || [],
    mealPlans:
      mealPlans?.data?.map((plans) => ({
        id: plans._id,
        label: plans.title,
      })) || [],
    clients:
      clients?.data?.map((client) => ({
        id: client._id,
        label: client.name,
      })) || [],
    start: values?.start,
    end: values?.end,
    repeatDays: values?.repeatDays,
    id: values?._id,
  };

  const submit = (data) => {
    console.log(data);
  };

  console.log(event, "event");
  return (
    <div className="min-h-screen w-full p-5">
      <div className="flex justify-end gap-4 w-full px-10">
        <CoreButton
          classes="w-fit !text-sm"
          onClick={() => deleteMutation(event?.id)}
          icon={Trash}
        >
          Delete
        </CoreButton>
      </div>
      <div className="px-10 my-10">
        {event && (
          <CoreCard>
            <div className="flex flex-col gap-5 items-start px-10">
              <CoreText>Attendance</CoreText>
              <form onSubmit={handleSubmit(submit)}>
                <div className="flex gap-5">
                  {event?.clients?.map((client) => (
                    <CoreCheckbox
                      name="ids"
                      key={client.id}
                      control={control}
                      label={client.label}
                      value={client.id}
                    />
                  ))}
                </div>

                <CoreButton type="submit" classes="my-5" icon={Check}>
                  Save
                </CoreButton>
              </form>
            </div>
          </CoreCard>
        )}
      </div>

      <EventComponent event={event} modalName={"edit-event"} />
    </div>
  );
};

export default SelectEvent;
