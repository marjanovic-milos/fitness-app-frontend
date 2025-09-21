"use client";
import React from "react";
import PageGuard from "src/page-guards/pageGuard";
import { Users } from "lucide-react";
import { getUsers, saveUser } from "src/http/api/users";
import CoreTableComponent from "src/components/CoreTableComponent/CoreTableComponent";
import { useTranslation } from "react-i18next";
import CreateUser from "src/modules/users/CreateUser";

const UsersPage = () => {
  const { t } = useTranslation();

  const columns = [
    "",
    t("users.name"),
    t("users.email"),
    "Platform Access",
    t("users.actions"),
  ];

  return (
    <PageGuard roles={["trainer"]}>
      <CoreTableComponent
        columns={columns}
        queryFn={getUsers}
        deleteFn={() => {}}
        updateFn={() => {}}
        createFn={saveUser}
        createForm={CreateUser}
        queryKey={["users"]}
        buttonText={"Create User"}
        heading={t("users.tableHeading")}
        icon={Users}
      />
    </PageGuard>
  );
};

export default UsersPage;
