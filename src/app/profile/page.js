"use client";
import React from "react";

import ThemeSelector from "src/components/ThemeSelector/ThemeSelector";
import { useTranslation } from "react-i18next";
import PageGuard from "src/page-guards/pageGuard";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import CoreCard from "src/components/CoreCard/CoreCard";
import { Crown } from "lucide-react";
import CoreText from "src/components/CoreText/CoreText";
import CoreButton from "src/components/CoreButton/CoreButton";
import CoreHeading from "src/components/CoreHeading/CoreHeading";
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
      <div className="w-2xl">
        <CoreCard>
          <div className="p-10">
            <ThemeSelector />

            <div className="flex justify-between items-center w-md">
              <CoreHeading type="h6" className="text-lg font-semibold">
                Welcome, {userData?.data?.name}
              </CoreHeading>

              <div class="h-10 px-6 rounded-full text-white font-semibold bg-linear-to-r from-cyan-500 to-blue-500 flex items-center gap-2">
                <Crown className="w-5 h-5" strokeWidth={1.5} /> You are premium
              </div>
            </div>

            <div>
              <button
                className="mx-2"
                onClick={() => i18n.changeLanguage("sr")}
              >
                Serbian
              </button>
              <button onClick={() => i18n.changeLanguage("en")}>English</button>
            </div>

            <CoreButton onClick={() => signOut()}>Logout</CoreButton>
          </div>
        </CoreCard>
      </div>
    </PageGuard>
  );
};

export default ProfilePage;
