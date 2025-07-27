"use client";
import { useState } from "react";
import CoreCalendar from "../components/CoreCalendar/CoreCalendar";
import CalendarWeekly from "../components/CoreCalendar/CalendarWeekly";
import { useTranslation } from "react-i18next";
import PageGuard from "../page-guards/pageGuard";
import CoreCard from "../components/CoreCard/CoreCard";
export default function Home() {
  const { t } = useTranslation();

  return (
    <PageGuard>
      <div className={"xl:px-12 px-6 w-full"}>
        <div className="flex gap-10">
          <CalendarWeekly />
          <div className="w-xl h-screen">
            <CoreCard>
              <h2 className="text-2xl text-bold text-gray-600 text-center mb-4">
                Test text
              </h2>
            </CoreCard>
          </div>
        </div>
      </div>
    </PageGuard>
  );
}
