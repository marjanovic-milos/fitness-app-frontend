"use client";
import React from "react";
import PageGuard from "src/page-guards/pageGuard";
import { getUsers } from "src/http/api/users";
import { useQuery } from "@tanstack/react-query";
import CoreCard from "src/components/CoreCard/CoreCard";
import CoreHeading from "src/components/CoreHeading/CoreHeading";
import CoreText from "src/components/CoreText/CoreText";

const UsersPage = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return (
    <PageGuard roles={["trainer"]}>
      <CoreCard>
        <div className="p-5">
          <CoreHeading type="h1" className="font-semibold">
            Users
          </CoreHeading>
          <div className="flex flex-col gap-4">
            {data?.map((user) => (
              <div
                key={user._id}
                className="flex items-center rounded-full overflow-hidden shadow-md xl:w-md w-full"
              >
                <div className="flex flex-col p-5">
                  <CoreText className="">{user.name}</CoreText>
                  <CoreText className="">{user.email}</CoreText>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CoreCard>
    </PageGuard>
  );
};

export default UsersPage;
