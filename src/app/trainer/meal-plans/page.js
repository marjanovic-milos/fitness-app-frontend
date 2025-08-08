import React from "react";
import PageGuard from "src/page-guards/pageGuard";
const MealPlansPage = () => {
  return (
    <PageGuard roles={["trainer"]}>
      <div>Mealplans page</div>
    </PageGuard>
  );
};

export default MealPlansPage;
