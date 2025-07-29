"use client";
import React from "react";

import ThemeSelector from "src/app/components/ThemeSelector/ThemeSelector";
import { useTranslation } from "react-i18next";
import PageGuard from "src/app/page-guards/pageGuard";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import CoreCard from "src/app/components/CoreCard/CoreCard";
const ProfilePage = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const queryClient = useQueryClient();

  const userData = useQuery({
    queryKey: ["user"],
    enabled: false,
    queryFn: () => null,
  });

  const signOut = () => {
    localStorage.removeItem("token");
    queryClient.invalidateQueries({ queryKey: ["user"] });
    router.push("/login");
  };

  return (
    <PageGuard roles={["client", "trainer"]}>
      <div className=''>
        <CoreCard>
          <ThemeSelector />
          <p>{userData?.data?.name}</p>
          <div>
            <button className='mx-2' onClick={() => i18n.changeLanguage("sr")}>
              Serbian
            </button>
            <button onClick={() => i18n.changeLanguage("en")}>English</button>
          </div>

          <button onClick={() => signOut()}>Logout</button>
        </CoreCard>
      </div>
    </PageGuard>
  );
};

export default ProfilePage;
