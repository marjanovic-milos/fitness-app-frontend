"use client";
import React from "react";
import PageGuard from "src/page-guards/pageGuard";
import Link from "next/link";
import MembershipList from "src/modules/membership/membershipList";
import CoreButton from "src/components/CoreButton/CoreButton";
import { ArrowBigLeft } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "src/http/api/users";

const UserPage = ({ params }) => {
  const userId = params?.userId;

  const { data } = useQuery({
    queryKey: ["client", userId],
    queryFn: () => getUser(userId),
    enabled: !!userId,
  });

  const { data: userData } = useQuery({
    queryKey: ["user"],
    enabled: false,
    queryFn: () => null,
  });

  return (
    <PageGuard roles={["trainer"]}>
      <div className="w-full flex items-center gap-4 mb-2">
        <CoreButton
          classes="w-fit !text-sm"
          icon={ArrowBigLeft}
          // variant="outline"
          position="left"
        >
          <Link href={`/trainer/users/`}>Back to Users</Link>
        </CoreButton>
        {/* 
        <span className="bg-gray-700 text-white px-2 py-1 m-2 text-md rounded-2xl cursor-pointer">
          Memberships
        </span> */}
      </div>

      {data?.ownerId !== userData?._id ? (
        <div>Hmmm, something wrong, you don't manage this person. Go back</div>
      ) : (
        <MembershipList params={params} />
      )}
    </PageGuard>
  );
};

export default UserPage;
