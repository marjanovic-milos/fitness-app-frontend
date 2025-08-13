"use client";
import React from "react";
import PageGuard from "src/page-guards/pageGuard";
import { getSavedMeals, deleteMeal, updateMeal } from "src/http/api/meals";
import WildCard from "src/components/WildCard/WildCard";

const MealPlansPage = () => {
  const columns = [
    "",
    "Title",
    "Protein",
    "Carbs",
    "Fats",
    "Calories",
    "Actions",
  ];
  return (
    <PageGuard roles={["trainer"]}>
      <WildCard
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
