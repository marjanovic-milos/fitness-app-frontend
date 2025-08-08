import React from "react";
import PageGuard from "src/page-guards/pageGuard";
const UsersPage = () => {
  return (
    <PageGuard roles={["trainer"]}>
      <div>Users page</div>
    </PageGuard>
  );
};

export default UsersPage;
