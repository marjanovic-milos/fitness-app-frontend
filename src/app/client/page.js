"use client";

import { useTranslation } from "react-i18next";
import PageGuard from "../../page-guards/pageGuard";

// import CoreCard from "../components/CoreCard/CoreCard";
// import CoreLoader from "../components/CoreLoader/CoreLoader";

import CoreDashboard from "src/components/CoreDashboard/CoreDashboard";

export default function Home() {
  const { t } = useTranslation();

  return (
    <PageGuard roles={["trainer"]}>
      <CoreDashboard />
    </PageGuard>
  );
}
