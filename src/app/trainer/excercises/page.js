"use client";
import React from "react";
import PageGuard from "src/page-guards/pageGuard";

import { getExcercises } from "src/http/api/excercises";
import CoreTableComponent from "src/components/CoreTableComponent/CoreTableComponent";
import { useTranslation } from "react-i18next";
import { Dumbbell } from "lucide-react";
const ExcercisesPage = () => {
  const { t } = useTranslation();

  const columns = [
    "",
    t("excercises.name"),
    t("excercises.video"),
    t("excercises.notes"),
    t("excercises.actions"),
  ];

  return (
    <PageGuard roles={["trainer"]}>
      <CoreTableComponent
        columns={columns}
        queryFn={getExcercises}
        deleteFn={() => {}}
        updateFn={() => {}}
        createFn={() => {}}
        createForm={null}
        queryKey={"excercises"}
        buttonText={null}
        heading={t("excercises.tableHeading")}
        icon={Dumbbell}
      />
    </PageGuard>
  );
};

export default ExcercisesPage;
