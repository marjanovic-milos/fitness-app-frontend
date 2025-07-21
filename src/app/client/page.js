"use client";
import { useState } from "react";
import CoreCalendar from "../components/CoreCalendar/CoreCalendar";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className={"xl:px-12 px-6"}>
      <div className="py-5">
        <h1>{t("welcome")}</h1>
        <p>{t("description")}</p>
        <CoreCalendar />
      </div>
    </div>
  );
}
