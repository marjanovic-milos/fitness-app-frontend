"use client";
import React from "react";
import PageGuard from "src/page-guards/pageGuard";
import { Users } from "lucide-react";
import { getUsers } from "src/http/api/users";
import CoreTableComponent from "src/components/CoreTableComponent/CoreTableComponent";
import { useTranslation } from "react-i18next";
const UsersPage = () => {
  const { t } = useTranslation();

  const columns = ["", t("users.name"), t("users.email"), t("users.actions")];

  return (
    <PageGuard roles={["trainer"]}>
      <CoreTableComponent
        columns={columns}
        queryFn={getUsers}
        deleteFn={() => {}}
        updateFn={() => {}}
        createFn={() => {}}
        createForm={null}
        queryKey={"users"}
        buttonText={null}
        heading={t("users.tableHeading")}
        icon={Users}
      />
    </PageGuard>
  );
};

export default UsersPage;
