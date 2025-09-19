import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useModals } from "src/context/modal";

import CoreDropdown from "src/components/CoreDropdown/CoreDropdown";

import { addEvent, updateEvent } from "src/http/api/events";
import EventDetails from "./edit/EventDetails";

const EventComponent = ({ modalName, event }) => {
  const [type, setType] = useState("individual");
  const { toggleModal } = useModals();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    watch,
    reset,
  } = useForm({
    defaultValues: {
      excercisePlans: [],
      mealPlans: [],
      clients: [],
    },
  });

  const { mutate: createEvent } = useMutation({
    mutationFn: addEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      toast.success("Successfully created!");
      reset();

      toggleModal(modalName);
    },
  });

  const { mutate: updateMutation } = useMutation({
    mutationFn: updateEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
      });
      toast.success("Successfully updated!");
      reset();
      toggleModal(modalName);
    },
  });

  const trainingOptions = [
    { value: "group", label: "Group" },
    { value: "individual", label: "Individual" },
  ];

  const repeatDays = watch("repeatDays");

  const submit = (data) => {
    const start = moment(
      `${data?.date} ${data.start}`,
      "YYYY-MM-DD HH:mm"
    ).format("YYYY-MM-DDTHH:mm:ss.SSSZ");
    const end = moment(`${data?.date} ${data.end}`, "YYYY-MM-DD HH:mm").format(
      "YYYY-MM-DDTHH:mm:ss.SSSZ"
    );
    const eventDetails = {
      start,
      end,
      clients: data?.clients,
      mealPlans: data?.mealPlans,
      excercisePlans: data?.excercisePlans,
      repeatDays,
    };
    !event
      ? createEvent(eventDetails)
      : updateMutation({ data: eventDetails, id: event?.id });
  };

  return (
    <div className="overfllow-scroll max-h-[80vh]">
      <div className="w-full flex justify-end px-10 mb-10">
        {!event && (
          <CoreDropdown
            options={trainingOptions}
            value={type}
            onChange={(val) => setType(val)}
          />
        )}
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <EventDetails
          trainingOptions={trainingOptions}
          setValue={setValue}
          register={register}
          control={control}
          type={type}
          event={event}
          errors={errors}
        />
      </form>
    </div>
  );
};

export default EventComponent;
