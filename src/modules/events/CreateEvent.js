import React, { useState } from "react";
import CoreAccordion from "src/components/CoreAccordion/CoreAccordion";
import CoreMultiSelect from "src/components/CoreMultiselect/CoreMultiSelect";
import CoreInput from "src/components/CoreInput/CoreInput";
import CoreSearch from "src/components/CoreSearch/CoreSearch";
import { findExcercise } from "src/http/api/excercises";
import { useMutation } from "@tanstack/react-query";
import { findMeal } from "src/http/api/meals";
import CoreText from "src/components/CoreText/CoreText";
import { useForm, Controller } from "react-hook-form";
import CoreButton from "src/components/CoreButton/CoreButton";
import CoreDropdown from "src/components/CoreDropdown/CoreDropdown";
import Users from "./Users";
const CreateEvent = () => {
  const [type, setType] = useState("group");

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    defaultValues,
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
  );

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-10  h-full">
      <div className="flex items-center justify-between w-full">
        <CoreText>Training type {trainingOption?.[0]?.label}</CoreText>
        <CoreDropdown
          options={trainingOptions}
          value={type}
          onChange={(val) => setType(val)}
        />
      </div>

      <form onSubmit={handleSubmit(submit)}>
        {/* <Users trainingOption={trainingOption?.[0]} register={register} /> */}

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

          {/* <Controller
            name="excercisePlans"
            control={control}
            render={({ field }) => (
          
            )}
          /> */}
        </div>

        <div className="flex flex-col  items-start gap-2 my-10">
          <CoreText> Find your meals: </CoreText>

          <CoreMultiSelect
            loading={pendingMeal}
            data={meals}
            name={"mealPlans"}
            register={register}
            searchFn={searchMeals}
            setValue={setValue}
          />
        </div>

        <CoreButton type="submit">Submit</CoreButton>
      </form>
    </div>
  );
};

export default CreateEvent;
