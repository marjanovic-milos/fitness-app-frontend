import React from "react";
import CoreAccordion from "src/components/CoreAccordion/CoreAccordion";
import CoreMultiSelect from "src/components/CoreMultiselect/CoreMultiSelect";
import CoreInput from "src/components/CoreInput/CoreInput";
import { findExcercise } from "src/http/api/excercises";
import { useMutation } from "@tanstack/react-query";
import { findMeal } from "src/http/api/meals";

import { useForm } from "react-hook-form";
const CreateEvent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
    <div className='mx-10  h-full'>
      <div className=''>
        <CoreMultiSelect loading={pendingExcercise} data={excercises} searchFn={searchExcercises} />
      </div>

      <div className=''>
        <CoreMultiSelect loading={pendingMeal} data={meals} searchFn={searchMeals} />
      </div>
    </div>
  );
};

export default CreateEvent;
