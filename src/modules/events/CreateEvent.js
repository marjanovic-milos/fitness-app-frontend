import React, { useState } from "react";
import CoreAccordion from "src/components/CoreAccordion/CoreAccordion";
import CoreMultiSelect from "src/components/CoreMultiselect/CoreMultiSelect";
import CoreInput from "src/components/CoreInput/CoreInput";

import { findExcercise } from "src/http/api/excercises";
import { useMutation } from "@tanstack/react-query";
import { findMeal } from "src/http/api/meals";
import CoreText from "src/components/CoreText/CoreText";
import { useForm } from "react-hook-form";
import CoreButton from "src/components/CoreButton/CoreButton";
import CoreDropdown from "src/components/CoreDropdown/CoreDropdown";

import CoreCheckbox from "src/components/CoreCheckbox/CoreCheckbox";
import Users from "./Users";
const CreateEvent = () => {
  const [type, setType] = useState("group");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    watch,
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

  const trainingOptions = [
    { value: "group", label: "Group" },
    { value: "individual", label: "Individual" },
  ];
  const trainingOption = trainingOptions.filter(
    (option) => option.value === type
  )?.[0];

  const selected = watch("preferences");

  const submit = (data) => {
    console.log(data, selected);
  };

  return (
    <div className="mx-10  h-full">
      <div className="flex items-center justify-between w-full">
        <CoreText>Training type {trainingOption?.label}</CoreText>
        <CoreDropdown
          options={trainingOptions}
          value={type}
          onChange={(val) => setType(val)}
        />
      </div>

      <form onSubmit={handleSubmit(submit)}>
        <Users
          trainingOption={trainingOption}
          setValue={setValue}
          register={register}
        />
        <div className="flex flex-col items-start gap-2 my-10">
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
        <div className="flex flex-col  items-start gap-2 my-10">
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
        <div className="flex flex-reverse gap-4 my-10">
          <CoreCheckbox
            name="preferences"
            control={control}
            label="Sunday"
            value="0"
          />
          <CoreCheckbox
            name="preferences"
            control={control}
            label="Monday"
            value="1"
          />
          <CoreCheckbox
            name="preferences"
            control={control}
            label="Tuesday"
            value="2"
          />{" "}
          <CoreCheckbox
            name="preferences"
            control={control}
            label="Wendsday"
            value="3"
          />{" "}
          <CoreCheckbox
            name="preferences"
            control={control}
            label="Thursday"
            value="4"
          />{" "}
          <CoreCheckbox
            name="preferences"
            control={control}
            label="Friday"
            value="5"
          />{" "}
          <CoreCheckbox
            name="preferences"
            control={control}
            label="Saturday"
            value="6"
          />
        </div>

        <CoreButton type="submit">Submit</CoreButton>
      </form>
    </div>
  );
};

export default CreateEvent;
