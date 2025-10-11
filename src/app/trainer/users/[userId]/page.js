"use client";
import React from "react";
import PageGuard from "src/page-guards/pageGuard";
import Link from "next/link";
import MembershipList from "src/modules/membership/membershipList";
import CoreButton from "src/components/CoreButton/CoreButton";
import { ArrowBigLeft } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "src/http/api/users";
import { useTranslation } from "react-i18next";
const UserPage = ({ params }) => {
  const userId = params?.userId;
  const { t } = useTranslation();

  const { data: clientData } = useQuery({
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
          variant="outline"
          position="left"
        >
          <Link href={`/trainer/users/`}>{t("users.backToUsers")}</Link>
        </CoreButton>
      </div>

      {clientData?.ownerId !== userData?._id ? (
        <div>{t("users.somethingWrongGoBack")}</div>
      ) : (
        <MembershipList userId={userId} clientData={clientData} />
      )}
    </PageGuard>
  );
};

export default UserPage;
