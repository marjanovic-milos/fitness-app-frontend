import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useModals } from "src/context/modal";
import { Zap } from "lucide-react";
import CoreDropdown from "src/components/CoreDropdown/CoreDropdown";
import CoreHeading from "src/components/CoreHeading/CoreHeading";
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
    <div className="w-full lg:max-h-full max-h-[80vh] mt-22 lg:overflow-hidden overflow-y-scroll lg:px-10 px-5">
      {!event && (
        <div className="w-full flex justify-between mb-10 gap-2">
          <CoreHeading type="h2" className="font-semibold" icon={Zap}>
            Select training type
          </CoreHeading>
          <CoreDropdown
            options={trainingOptions}
            value={type}
            onChange={(val) => setType(val)}
          />
        </div>
      )}
      <form
        onSubmit={handleSubmit(submit)}
        className="lg:max-h-full max-h-[70vh] lg:overflow-hidden overflow-y-scroll"
      >
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
