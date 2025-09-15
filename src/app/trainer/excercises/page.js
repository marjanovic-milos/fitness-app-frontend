"use client";
import React from "react";
import PageGuard from "src/page-guards/pageGuard";
import CreateExcercise from "src/modules/excercise/createExcercise";
import {
  getExcercises,
  saveExcercise,
  deleteExcercise,
  updateExcercise,
} from "src/http/api/excercises";
import CoreTableComponent from "src/components/CoreTableComponent/CoreTableComponent";
import { useTranslation } from "react-i18next";
import { Dumbbell } from "lucide-react";
const ExcercisesPage = () => {
  const { t } = useTranslation();

  const columns = [
    "",
    t("excercises.name"),
    t("excercises.notes"),
    // t("excercises.video"),
    t("excercises.actions"),
  ];

  return (
    <PageGuard roles={["trainer"]}>
      <CoreTableComponent
        columns={columns}
        queryFn={getExcercises}
        deleteFn={deleteExcercise}
        updateFn={updateExcercise}
        createFn={saveExcercise}
        createForm={CreateExcercise}
        queryKey={"excercises"}
        buttonText={t("excercises.addNewExcercise")}
        heading={t("excercises.tableHeading")}
        icon={Dumbbell}
      />
    </PageGuard>
  );
};

export default ExcercisesPage;
