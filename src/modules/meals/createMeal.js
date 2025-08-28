"use client";
import React, { useState } from "react";
import { ChefHat, Beef } from "lucide-react";
import Spoonacular from "./spoonacular";
import CoreCard from "src/components/CoreCard/CoreCard";
import CoreDropdown from "src/components/CoreDropdown/CoreDropdown";
import CoreHeading from "src/components/CoreHeading/CoreHeading";
import { CreateYourForm } from "./mealForms";
// import { useMutation } from "@tanstack/react-query";

// import { saveMeal } from "src/http/api/meals";
// import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import CoreText from "src/components/CoreText/CoreText";
import { Info } from "lucide-react";
import { useTranslation } from "react-i18next";
// import toast from "react-hot-toast";

export const CreateMeal = ({ handleCreateForm, createFn }) => {
  const [selected, setSelected] = useState("spoonacular");
  // const queryClient = useQueryClient();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const options = [
    { value: "spoonacular", label: t("meals.spoonacularBtn") },
    { value: "custom", label: t("meals.customBtn") },
  ];

  return (
    <CoreCard>
      <div className="p-6 overflow-hidden">
        <div className="flex justify-between items-center w-full">
          {selected === "spoonacular" ? (
            <CoreHeading type="h2" className="font-semibold" icon={ChefHat}>
              {t("meals.spoonacularTitle")}
            </CoreHeading>
          ) : (
            <CoreHeading type="h2" className="font-semibold" icon={Beef}>
              {t("meals.customTitle")}
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
              {t("meals.spoonacularDescrition")}
            </CoreText>
          </div>
        ) : (
          <div className="flex gap-2 mt-8 w-full ml-1">
            <Info className="w-5 h-5" strokeWidth={1.5} />
            <CoreText className="!text-gray-500 !text-sm">
              {t("meals.customDescrition")}
            </CoreText>
          </div>
        )}

        <div className="xl:w-md w-full">
          {selected === "spoonacular" ? (
            <Spoonacular cancelForm={handleCreateForm} createFn={createFn} />
          ) : (
            <CreateYourForm
              handleSubmit={handleSubmit}
              register={register}
              errors={errors}
              createFn={createFn}
              cancelForm={handleCreateForm}
            />
          )}
        </div>
      </div>
    </CoreCard>
  );
};
