import React, { useState } from "react";

import CoreMultiSelect from "src/components/CoreMultiselect/CoreMultiSelect";

import { findExcercise } from "src/http/api/excercises";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { findMeal } from "src/http/api/meals";
import CoreText from "src/components/CoreText/CoreText";
import { useForm } from "react-hook-form";
import CoreButton from "src/components/CoreButton/CoreButton";
import CoreDropdown from "src/components/CoreDropdown/CoreDropdown";
import CoreCard from "src/components/CoreCard/CoreCard";
import CoreHeading from "src/components/CoreHeading/CoreHeading";
import Clients from "./Clients";
import EventDate from "./EventDate";
import AdditionalSettings from "./AdditionalSettings";
import moment from "moment";
import { Calendar, Zap } from "lucide-react";
import { addEvent } from "src/http/api/events";
import toast from "react-hot-toast";
const CreateEvent = ({ handleCLose }) => {
  const [type, setType] = useState("individual");

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
  const {
    mutate: searchExcercises,
    data: excercises,
    isPending: pendingExcercise,
  } = useMutation({
    mutationFn: (search) => findExcercise({ name: search }),
  });

  const {
    mutate: searchMeals,
    data: meals,
    isPending: pendingMeal,
  } = useMutation({
    mutationFn: (search) => findMeal({ title: search }),
  });

  const { mutate: createEvent, isPending } = useMutation({
    mutationFn: addEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      toast.success("Successfully created!");
      reset();
      handleCLose();
    },
  });

  const trainingOptions = [
    { value: "group", label: "Group" },
    { value: "individual", label: "Individual" },
  ];
  const trainingOption = trainingOptions.filter(
    (option) => option.value === type
  )?.[0];

  const repeatDays = watch("repeatDays");

  const submit = (data) => {
    const start = moment(
      `${data?.date} ${data.start}`,
      "YYYY-MM-DD HH:mm"
    ).format("YYYY-MM-DDTHH:mm:ss.SSSZ");

    const end = moment(`${data?.date} ${data.end}`, "YYYY-MM-DD HH:mm").format(
      "YYYY-MM-DDTHH:mm:ss.SSSZ"
    );

    createEvent({
      start,
      end,
      clients: data?.clients,
      mealPlans: data?.mealPlans,
      excercisePlans: data?.excercisePlans,
      repeatDays,
    });
  };

  return (
    <div className="overfllow-scroll max-h-[80vh]">
      <div className="flex items-center justify-between w-full px-10 mb-10">
        <CoreHeading type="h3" className="font-semibold" icon={Calendar}>
          Event overview
        </CoreHeading>
        <CoreDropdown
          options={trainingOptions}
          value={type}
          onChange={(val) => setType(val)}
        />
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col gap-5 px-10 ">
          <div className="grid xl:grid-cols-2 grid-cols-auto gap-5 ">
            <CoreCard>
              <div className="flex flex-col items-start gap-2 p-6">
                <CoreText>Select users:</CoreText>
                <Clients
                  trainingOption={trainingOption}
                  setValue={setValue}
                  register={register}
                />
              </div>
            </CoreCard>
            <EventDate register={register} control={control} errors={errors} />
          </div>

          <CoreCard>
            <div className="flex flex-col items-start gap-5 p-6">
              <CoreHeading type="h3" className="font-semibold" icon={Zap}>
                Additional Details
              </CoreHeading>
              <div className="flex xl:flex-row flex-col justify-between w-full">
                <div className="flex flex-col items-start gap-2 w-full">
                  <CoreText> Find your excercises:</CoreText>
                  <CoreMultiSelect
                    name="excercisePlans"
                    loading={pendingExcercise}
                    data={excercises}
                    register={register}
                    searchFn={searchExcercises}
                    setValue={setValue}
                  />
                </div>

                {trainingOption?.value === "individual" && (
                  <div className="flex flex-col items-start gap-2 w-full">
                    <CoreText> Find your meals: </CoreText>
                    <CoreMultiSelect
                      name={"mealPlans"}
                      loading={pendingMeal}
                      data={meals}
                      register={register}
                      searchFn={searchMeals}
                      setValue={setValue}
                    />
                  </div>
                )}
              </div>
            </div>
          </CoreCard>

          <AdditionalSettings control={control} />
          <div className="w-full flex justify-end my-10">
            <CoreButton classes="w-xs" type="submit">
              Save Event
            </CoreButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
