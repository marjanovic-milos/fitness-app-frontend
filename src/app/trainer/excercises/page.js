import React from "react";
import PageGuard from "src/page-guards/pageGuard";

const ExcercisePage = () => {
  return (
    <PageGuard roles={["trainer"]}>
      <div>excercises page</div>
    </PageGuard>
  );
};

export default ExcercisePage;
