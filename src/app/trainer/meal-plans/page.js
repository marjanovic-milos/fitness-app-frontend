"use client";
import React from "react";
import PageGuard from "src/page-guards/pageGuard";
import { getSavedMeals, deleteMeal, updateMeal } from "src/http/api/meals";
import WildCard from "src/components/WildCard/WildCard";
import { useAlert } from "src/context/alert";

const MealPlansPage = () => {
  const { showAlert } = useAlert();

  const columns = ["", "Title", "Protein", "Calories", "Fats", "Carbs", "Links", "Actions"];
  return (
    <PageGuard roles={["trainer"]}>
      {/* <button onClick={() => showAlert("Something went wrong!", "")} className='px-4 py-2 bg-red-600 text-white rounded-lg'>
        Show Error
      </button> */}
      <WildCard columns={columns} queryFn={getSavedMeals} deleteFn={deleteMeal} updateFn={updateMeal} queryKey={"meals"} />
    </PageGuard>
  );
};

export default MealPlansPage;
