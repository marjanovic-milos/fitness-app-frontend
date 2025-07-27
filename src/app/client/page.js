"use client";
import { useState } from "react";
import CoreCalendar from "../components/CoreCalendar/CoreCalendar";
import CalendarWeekly from "../components/CoreCalendar/CalendarWeekly";
import { useTranslation } from "react-i18next";
import PageGuard from "../page-guards/pageGuard";
import CoreCard from "../components/CoreCard/CoreCard";
import CoreLoader from "../components/CoreLoader/CoreLoader";
import CoreBreadcrumbs from "../components/CoreBreadcrumbs/CoreBreadcrumbs";
export default function Home() {
  const { t } = useTranslation();

  return (
    <PageGuard>
      <div className={"size-full xl:px-12 px-6 overflow-auto"}>
        <div>
          <h3> Welcome, client name</h3>
        </div>
        <div className='flex xl:flex-row flex-col gap-10 size-full'>
          <CalendarWeekly />
          <div className='w-2xl size-full'>
            <CoreCard>
              <div className='flex items-center justify-center size-full'>
                <h2 className='text-2xl text-gray-600 '>Test text</h2>
              </div>
            </CoreCard>
          </div>
        </div>
      </div>

      {/* <div className={"size-full xl:px-12 px-6 overflow-auto"}>
        <CoreBreadcrumbs />
        <div className='flex xl:flex-row flex-col gap-10 size-full'>
          <CoreCalendar />
          <div className='xl:w-2xl w-full size-full'>
            <CoreCard>
              <h2 className='text-2xl text-gray-600 text-center'>Test text</h2>
            </CoreCard>
          </div>
        </div>
      </div> */}
    </PageGuard>
  );
}
