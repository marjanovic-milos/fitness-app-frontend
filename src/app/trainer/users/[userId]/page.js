"use client";
import React from "react";
import PageGuard from "src/page-guards/pageGuard";
import Link from "next/link";
import MembershipList from "src/modules/membership/membershipList";

const UserPage = ({ params }) => {
  return (
    <PageGuard roles={["trainer"]}>
      <div className="w-full flex items-center gap-4 bg-blue-500">
        <Link className="underline" href={`/trainer/users/`}>
          Back to Users
        </Link>
        <span className="bg-gray-900 text-white p-2 rounded-2xl">
          Membership
        </span>
      </div>
      <MembershipList params={params} />
    </PageGuard>
  );
};

export default UserPage;
