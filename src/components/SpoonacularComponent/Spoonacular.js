import React, { useState } from "react";
import CoreCard from "../CoreCard/CoreCard";
import CoreInput from "../CoreInput/CoreInput";
import { useForm } from "react-hook-form";
import CoreHeading from "../CoreHeading/CoreHeading";
import { searchSpoonacular } from "src/http/api/meals";
import { useMutation } from "@tanstack/react-query";

const Spoonacular = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [recepies, setRecepies] = useState();

  const testMutation = useMutation({
    mutationKey: ["search-spoonacular"],
    mutationFn: searchSpoonacular,
    onSuccess: (data) => {
      setRecepies(data.data.data);
      //   alert("Success!");
    },
    onError: (err) => {
      console.error("❌ Error:", err);
      alert("Something went wrong!");
    },
  });

  const onSubmit = (formData) => {
    testMutation.mutate(formData);
  };

  console.log(recepies, "recepies");

  return (
    <CoreCard>
      <div className="p-6">
        <CoreHeading>Spoonacular Api</CoreHeading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-5 my-10">
            <CoreInput
              name="minProtein"
              register={register}
              fieldType="flat"
              label="Minimal Protein"
              type="number"
              required={{
                required: "Field minProtein is required.",
                pattern: {
                  value: /^\d+$/,
                  message: "This input is number only.",
                },
              }}
              errors={errors}
            />
            <CoreInput
              name="maxProtein"
              register={register}
              fieldType="flat"
              label="Maximum Protein"
              type="number"
              required={{
                required: "Field maxProtein is required.",
                pattern: {
                  value: /^\d+$/,
                  message: "This input is number only.",
                },
              }}
              errors={errors}
            />
          </div>

          <button
            type="submit"
            disabled={testMutation.isPending}
            className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
          >
            {testMutation.isPending ? "Sending..." : "Send"}
          </button>
        </form>
        {recepies?.map((recepie) => (
          <>
            <img
              src={recepie?.image}
              alt="User Profile"
              className="w-10 h-10 rounded-full  object-cover"
            />
            <p>{recepie?.title}</p>
          </>
        ))}
      </div>
    </CoreCard>
  );
};

export default Spoonacular;
