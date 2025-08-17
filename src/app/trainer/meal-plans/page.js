"use client";
import React, { useState } from "react";
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

  // const [open, setOpen] = useState(false);
  return (
    <PageGuard roles={["trainer"]}>
      <CoreTableComponent
        columns={columns}
        queryFn={getSavedMeals}
        deleteFn={deleteMeal}
        updateFn={updateMeal}
        createFn={() => {}}
        queryKey={"meals"}
        buttonText="Add New"
        heading="Your Meal Plans"
      />
    </PageGuard>
  );
};

export default MealPlansPage;
