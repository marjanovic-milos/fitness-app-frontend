"use client";

import React from "react";
import PageGuard from "src/page-guards/pageGuard";

import Link from "next/link";
import CoreHeading from "src/components/CoreHeading/CoreHeading";
const NotFoundPage = () => {
  return (
    <PageGuard roles={["trainer", "client"]}>
      <div className="flex flex-col items-center justify-center w-full ">
        <CoreHeading type="h2" className="text-center h-full">
          Page not found, go back to profile page
        </CoreHeading>
        <Link href="/profile" className="h-auto underline text-lg">
          Profile
        </Link>
      </div>
    </PageGuard>
  );
};

export default NotFoundPage;
