"use client";
import React from "react";
import PageGuard from "src/page-guards/pageGuard";
import { getSavedMeals, deleteMeal, updateMeal } from "src/http/api/meals";
import CoreTableComponent from "src/components/CoreTableComponent/CoreTableComponent";

const MealPlansPage = () => {
  const columns = [
    "",
    "Title",
    "Protein",
    "Calories",
    "Fats",
    "Carbs",
    "Links",
    "Actions",
  ];
  return (
    <PageGuard roles={["trainer"]}>
      <CoreTableComponent
        columns={columns}
        queryFn={getSavedMeals}
        deleteFn={deleteMeal}
        updateFn={updateMeal}
        queryKey={"meals"}
      />
    </PageGuard>
  );
};

export default MealPlansPage;
