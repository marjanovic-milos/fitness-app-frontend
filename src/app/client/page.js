"use client";
import { useState } from "react";
import CoreCalendar from "../components/CoreCalendar/CoreCalendar";
import CalendarWeekly from "../components/CoreCalendar/CalendarWeekly";
import { useTranslation } from "react-i18next";
import PageGuard from "../page-guards/pageGuard";
import CoreCard from "../components/CoreCard/CoreCard";
import CoreLoader from "../components/CoreLoader/CoreLoader";
import CoreDashboard from "../components/CoreDashboard/CoreDashboard";
import { Crown } from "lucide-react";

import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { t } = useTranslation();

  const userData = useQuery({
    queryKey: ["user"],
    enabled: false,
    queryFn: () => null,
  });

  return (
    <PageGuard roles={["trainer"]}>
      <div className='flex justify-between items-center w-md'>
        <h3 className='my-8 text-lg font-semibold'> Welcome, {userData?.data?.name}</h3>
        <div class='h-10 px-6 rounded-full text-white font-semibold bg-linear-to-r from-cyan-500 to-blue-500 flex items-center gap-2'>
          <Crown className='w-5 h-5' strokeWidth={1.5} /> You are premium
        </div>
      </div>
      <CoreDashboard />
    </PageGuard>
  );
}
