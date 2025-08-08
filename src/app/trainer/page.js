"use client";

import { useTranslation } from "react-i18next";
import PageGuard from "../../page-guards/pageGuard";

import CoreDashboard from "src/components/CoreDashboard/CoreDashboard";

export default function Home() {
  const { t } = useTranslation();

  return (
    <PageGuard roles={["trainer"]}>
      <CoreDashboard />
    </PageGuard>
  );
}
