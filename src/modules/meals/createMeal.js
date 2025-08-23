"use client";
import React, { useState } from "react";
import { ChefHat, Beef } from "lucide-react";
import Spoonacular from "./spoonacular";
import CoreCard from "src/components/CoreCard/CoreCard";
import CoreDropdown from "src/components/CoreDropdown/CoreDropdown";
import CoreHeading from "src/components/CoreHeading/CoreHeading";
import { CreateYourForm } from "./mealForms";
import { useMutation } from "@tanstack/react-query";
import { useAlert } from "src/context/alert";
import { saveMeal } from "src/http/api/meals";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import CoreText from "src/components/CoreText/CoreText";
import { Info } from "lucide-react";
export const CreateMeal = ({ handleCreateForm }) => {
  const [selected, setSelected] = useState("spoonacular");
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const options = [
    { value: "spoonacular", label: "Spoonacular" },
    { value: "custom", label: "Custom" },
  ];

  const { showAlert } = useAlert();

  const createMealMutation = useMutation({
    mutationKey: ["meals"],
    mutationFn: saveMeal,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["meals"]);
      showAlert("Success!");
      reset();
    },
    onError: (err) => {
      console.error("❌ Error:", err);
      showAlert("Something went wrong!");
    },
  });

  const onSubmit = (formData) => {
    createMealMutation.mutate(formData);
  };

  return (
    <CoreCard>
      <div className="p-6 overflow-hidden">
        <div className="flex justify-between items-center w-full">
          {selected === "spoonacular" ? (
            <CoreHeading type="h2" className="font-semibold" icon={ChefHat}>
              Spoonacular Recepies
            </CoreHeading>
          ) : (
            <CoreHeading type="h2" className="font-semibold" icon={Beef}>
              Create Yours
            </CoreHeading>
          )}
          <CoreDropdown
            options={options}
            value={selected}
            onChange={(val) => setSelected(val)}
          />
        </div>

        {selected === "spoonacular" ? (
          <div className="flex gap-2 my-8 w-full ml-1">
            <Info className="w-5 h-5" strokeWidth={1.5} />
            <CoreText className="!text-gray-500 !text-sm">
              Search for the recepies, using Spoonacular API ( *values are
              presented in grams).
            </CoreText>
          </div>
        ) : (
          <div className="flex gap-2 my-8 w-full ml-1">
            <Info className="w-5 h-5" strokeWidth={1.5} />
            <CoreText className="!text-gray-500 !text-sm">
              Create your own, note that all fields are requried.
            </CoreText>
          </div>
        )}

        <div className="xl:w-md w-full">
          {selected === "spoonacular" ? (
            <Spoonacular cancelForm={handleCreateForm} />
          ) : (
            <CreateYourForm
              handleSubmit={handleSubmit}
              register={register}
              errors={errors}
              onSubmit={onSubmit}
              cancelForm={handleCreateForm}
            />
          )}
        </div>
      </div>
    </CoreCard>
  );
};
