import React, { useState } from "react";

import { searchSpoonacular } from "src/http/api/meals";
import { useMutation } from "@tanstack/react-query";
import { CoreSlider } from "../../components/CoreSlider/CoreSlider";

import { Maximize2 } from "lucide-react";
import CoreText from "src/components/CoreText/CoreText";
import { SpoonacularForm } from "./mealForms";
import { useForm } from "react-hook-form";
import CoreModal from "src/components/CoreModal/CoreModal";
import MealView from "./mealView";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
const Spoonacular = ({ cancelForm, createFn }) => {
  const [recepies, setRecepies] = useState();
  const [selectedRecepie, setRecepie] = useState();

  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const spoonacularMutation = useMutation({
    mutationKey: ["recepie"],
    mutationFn: searchSpoonacular,
    onSuccess: (data) => {
      setRecepies(data.data.data);
      toast.success("Success!");

      reset();
    },
    onError: (err) => {
      console.error("❌ Error:", err);
      toast.error("Something went wrong!");
    },
  });

  const onSubmit = (formData) => {
    spoonacularMutation.mutate(formData);
  };
  const handleClose = () => {
    setRecepie(false);
  };

  const dummyData = [
    {
      id: 634927,
      title: "Best Potato Cheese Soup in a bread bowl",
      image: "https://img.spoonacular.com/recipes/634927-312x231.jpg",
      imageType: "jpg",
      calories: 750,
      protein: "26g",
      fat: "45g",
      carbs: "58g",
    },
    {
      id: 640509,
      title: "Cream Cheese Stuffed Chicken Breasts",
      image: "https://img.spoonacular.com/recipes/640509-312x231.jpg",
      imageType: "jpg",
      calories: 434,
      protein: "30g",
      fat: "32g",
      carbs: "6g",
    },
    {
      id: 643514,
      title: "Fresh Herb Omelette",
      image: "https://img.spoonacular.com/recipes/643514-312x231.jpg",
      imageType: "jpg",
      calories: 317,
      protein: "17g",
      fat: "26g",
      carbs: "4g",
    },
    {
      id: 651994,
      title: "Miniature Fruit Tarts",
      image: "https://img.spoonacular.com/recipes/651994-312x231.jpg",
      imageType: "jpg",
      calories: 482,
      protein: "15g",
      fat: "7g",
      carbs: "89g",
    },
    {
      id: 654571,
      title: "Panna Cotta with Raspberry and Orange Sauce",
      image: "https://img.spoonacular.com/recipes/654571-312x231.jpg",
      imageType: "jpg",
      calories: 396,
      protein: "8g",
      fat: "27g",
      carbs: "28g",
    },
    {
      id: 657972,
      title: "Raw Chocolate Energy Bars",
      image: "https://img.spoonacular.com/recipes/657972-312x231.jpg",
      imageType: "jpg",
      calories: 190,
      protein: "6g",
      fat: "10g",
      carbs: "20g",
    },
    {
      id: 658004,
      title: 'Raw Vegan Blueberry Chocolate Crust "Cheesecake',
      image: "https://img.spoonacular.com/recipes/658004-312x231.jpg",
      imageType: "jpg",
      calories: 557,
      protein: "9g",
      fat: "36g",
      carbs: "59g",
    },
    {
      id: 715397,
      title: "Cheesy Chicken and Rice Casserole",
      image: "https://img.spoonacular.com/recipes/715397-312x231.jpg",
      imageType: "jpg",
      calories: 464,
      protein: "31g",
      fat: "28g",
      carbs: "21g",
    },
    {
      id: 1459207,
      title: "Easy Sheet Pan Pancakes",
      image: "https://img.spoonacular.com/recipes/1459207-312x231.jpg",
      imageType: "jpg",
      calories: 218,
      protein: "6g",
      fat: "8g",
      carbs: "28g",
    },
    {
      id: 1697687,
      title: "Spinach Mushroom Omelette with Parmesan",
      image: "https://img.spoonacular.com/recipes/1697687-312x231.jpg",
      imageType: "jpg",
      calories: 237,
      protein: "17g",
      fat: "17g",
      carbs: "4g",
    },
  ];
  console.log(selectedRecepie);
  return (
    <div className="w-auto">
      <SpoonacularForm
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        onSubmit={onSubmit}
        cancelForm={cancelForm}
      />

      <CoreModal isOpen={selectedRecepie} onClose={handleClose}>
        <MealView
          recepie={selectedRecepie}
          createFn={createFn}
          onClose={handleClose}
        />
      </CoreModal>
      <div className="overflow-hidden mt-10 w-full h-fit py-10">
        <CoreSlider>
          {dummyData?.map((recepie) => (
            <div key={recepie.id}>
              <div className="relative w-full h-full" key={recepie?.id}>
                <span className="absolute inset-0 bg-black/60" />

                <img
                  src={recepie?.image}
                  alt={recepie?.title}
                  className="object-cover w-full h-auto max-h-[250px]"
                />
                <div className="absolute top-5 left-5 flex gap-2">
                  <span className="text-xs rounded-sm bg-teal-800 text-white  font-semibold px-2 py-1">
                    {t("meals.protein")}: {recepie?.protein}
                  </span>
                  <span className="text-xs rounded-sm bg-green-700 text-white  font-semibold px-2 py-1">
                    {t("meals.carbs")}: {recepie?.carbs}{" "}
                  </span>
                </div>
                <span
                  onClick={() => setRecepie(recepie)}
                  className="absolute top-5 right-5 bg-gray-200 p-2 text-gray-800 rounded-full cursor-pointer"
                >
                  <Maximize2 className="h-4 w-4" strokeWidth={1.5} />
                </span>

                <p className="absolute h-auto bottom-5 left-5 flex justify-start font-semibold text-white text-sm">
                  {recepie?.title}
                </p>
              </div>
            </div>
          ))}
        </CoreSlider>
      </div>
    </div>
  );
};

export default Spoonacular;
