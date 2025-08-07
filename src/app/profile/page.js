"use client";
import React from "react";

import ThemeSelector from "src/components/ThemeSelector/ThemeSelector";
import { useTranslation } from "react-i18next";
import PageGuard from "src/page-guards/pageGuard";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import CoreCard from "src/components/CoreCard/CoreCard";
import { Crown } from "lucide-react";

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
      <>
        <CoreCard>
          <ThemeSelector />
          <p>{userData?.data?.name}</p>

          <div className="flex justify-between items-center w-md">
            <h3 className="my-8 text-lg font-semibold">
              {" "}
              Welcome, {userData?.data?.name}
            </h3>

            <div class="h-10 px-6 rounded-full text-white font-semibold bg-linear-to-r from-cyan-500 to-blue-500 flex items-center gap-2">
              <Crown className="w-5 h-5" strokeWidth={1.5} /> You are premium
            </div>
          </div>

          <div>
            <button className="mx-2" onClick={() => i18n.changeLanguage("sr")}>
              Serbian
            </button>
            <button onClick={() => i18n.changeLanguage("en")}>English</button>
          </div>

          <button onClick={() => signOut()}>Logout</button>
        </CoreCard>
      </>
    </PageGuard>
  );
};

export default ProfilePage;
