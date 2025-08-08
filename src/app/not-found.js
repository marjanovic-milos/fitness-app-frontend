"use client";

import React from "react";
import PageGuard from "src/page-guards/pageGuard";
import CoreText from "src/components/CoreText/CoreText";

const NotFoundPage = () => {
  return (
    <PageGuard roles={["trainer", "client"]}>
      {" "}
      <CoreText className="text-center">404 - Page Not Found </CoreText>
    </PageGuard>
  );
};

export default NotFoundPage;
