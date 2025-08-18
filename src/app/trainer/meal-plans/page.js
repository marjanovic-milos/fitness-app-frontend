"use client";
import React from "react";
import PageGuard from "src/page-guards/pageGuard";
import { Salad } from "lucide-react";
import { getSavedMeals, deleteMeal, updateMeal } from "src/http/api/meals";
import CoreTableComponent from "src/components/CoreTableComponent/CoreTableComponent";
import { createMeal } from "src/modules/meals/createMeal";
const MealPlansPage = () => {
  const columns = ["", "Title", "Protein", "Calories", "Fats", "Carbs", "Links", "Actions"];

  return (
    <PageGuard roles={["trainer"]}>
      <CoreTableComponent
        columns={columns}
        queryFn={getSavedMeals}
        deleteFn={deleteMeal}
        updateFn={updateMeal}
        createFn={() => {}}
        createForm={createMeal}
        queryKey={"meals"}
        buttonText='Add New'
        heading='Your Meal Plans'
        icon={Salad}
      />
    </PageGuard>
  );
};

export default MealPlansPage;
