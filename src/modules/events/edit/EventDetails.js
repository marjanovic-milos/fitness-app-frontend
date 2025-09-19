import React, { useMemo } from "react";
import { useMutation } from "@tanstack/react-query";
import { findExcercise } from "src/http/api/excercises";
import { findMeal } from "src/http/api/meals";
import CoreCard from "src/components/CoreCard/CoreCard";
import CoreText from "src/components/CoreText/CoreText";
import CoreHeading from "src/components/CoreHeading/CoreHeading";
import CoreButton from "src/components/CoreButton/CoreButton";
import CoreMultiSelect from "src/components/CoreMultiselect/CoreMultiSelect";

import AdditionalSettings from "./AdditionalSettings";
import Clients from "./Clients";
import EventDate from "./EventDate";
import { Zap } from "lucide-react";

const EventDetails = ({
  trainingOptions,
  setValue,
  register,
  event,
  control,
  type,
  errors,
}) => {
  const trainingOption = trainingOptions.filter(
    (option) => option.value === type
  )?.[0];

  const trainingOptionDefault = useMemo(() => {
    if (event?.clients) {
      return event.clients.length > 1 ? "group" : "individual";
    } else {
      return trainingOption?.value;
    }
  }, [event, trainingOption]);

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

  return (
    <div className="flex flex-col gap-5 px-10">
      <div className="grid xl:grid-cols-2 grid-cols-auto gap-5 ">
        <CoreCard>
          <div className="flex flex-col items-start gap-2 p-6">
            <CoreText>Select users:</CoreText>
            <Clients
              trainingOption={trainingOptionDefault}
              setValue={setValue}
              register={register}
              defaultOptions={event?.clients}
            />
          </div>
        </CoreCard>
        <EventDate
          register={register}
          control={control}
          errors={errors}
          setValue={setValue}
          defaultValue={event}
        />
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
                defaultOptions={event?.excercisePlans}
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
                  defaultOptions={event?.mealPlans}
                />
              </div>
            )}
          </div>
        </div>
      </CoreCard>

      {!event && (
        <AdditionalSettings clients={event?.clients} control={control} />
      )}
      <div className="w-full flex justify-end my-10">
        <CoreButton classes="w-xs" type="submit">
          Save Event
        </CoreButton>
      </div>
    </div>
  );
};

export default EventDetails;
