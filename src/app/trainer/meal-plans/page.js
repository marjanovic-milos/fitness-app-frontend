"use client";
import React from "react";
import PageGuard from "src/page-guards/pageGuard";
import { Salad } from "lucide-react";
import { getSavedMeals, deleteMeal, updateMeal } from "src/http/api/meals";
import CoreTableComponent from "src/components/CoreTableComponent/CoreTableComponent";
import { CreateMeal } from "src/modules/meals/createMeal";
import { useTranslation } from "react-i18next";
const MealPlansPage = () => {
  const { t } = useTranslation();

  const columns = [
    "",
    t("meals.title"),

    t("meals.protein"),

    t("meals.calories"),

    t("meals.fat"),

    t("meals.carbs"),

    t("meals.links"),

    t("meals.actions"),
  ];

  return (
    <PageGuard roles={["trainer"]}>
      <CoreTableComponent
        columns={columns}
        queryFn={getSavedMeals}
        deleteFn={deleteMeal}
        updateFn={updateMeal}
        createFn={() => {}}
        createForm={CreateMeal}
        queryKey={"meals"}
        buttonText={t("meals.addNew")}
        heading={t("meals.tableHeading")}
        icon={Salad}
      />
    </PageGuard>
  );
};

export default MealPlansPage;
