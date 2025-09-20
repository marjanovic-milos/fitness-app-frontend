"use client";
import React from "react";
import PageGuard from "src/page-guards/pageGuard";
import Link from "next/link";
import MembershipList from "src/modules/membership/membershipList";
import CoreButton from "src/components/CoreButton/CoreButton";
import { ArrowBigLeft } from "lucide-react";
const UserPage = ({ params }) => {
  return (
    <PageGuard roles={["trainer"]}>
      <div className="w-full flex items-center gap-4 mb-2">
        <CoreButton
          classes="w-fit !text-sm"
          icon={ArrowBigLeft}
          variant="outline"
          position="left"
        >
          <Link href={`/trainer/users/`}>Back to Users</Link>
        </CoreButton>

        <span className="bg-gray-700 text-white px-2 py-1 m-2 text-md rounded-2xl cursor-pointer">
          Memberships
        </span>
      </div>
      <MembershipList params={params} />
    </PageGuard>
  );
};

export default UserPage;
