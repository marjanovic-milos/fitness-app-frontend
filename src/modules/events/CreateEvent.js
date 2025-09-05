import React from "react";
import CoreAccordion from "src/components/CoreAccordion/CoreAccordion";
import CoreMultiSelect from "src/components/CoreMultiselect/CoreMultiSelect";
import CoreInput from "src/components/CoreInput/CoreInput";
import { findExcercise } from "src/http/api/excercises";
import { useQuery, useMutation } from "@tanstack/react-query";

import { useForm } from "react-hook-form";
const CreateEvent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, data, isPending, error } = useMutation({
    mutationFn: ({ name }) => findExcercise({ name }),
  });

  return (
    <div className="mx-10 bg-gray-600 h-full">
      <div className="py-10 h-80">
        <CoreMultiSelect loading={isPending} data={data} searchFn={mutate} />
      </div>
    </div>
  );
};

export default CreateEvent;
