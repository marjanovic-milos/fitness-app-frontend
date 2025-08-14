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
import CoreDropdown from "src/components/CoreDropdown/CoreDropdown";

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
      <div className="xl:w-2xl w-full">
        <CoreCard>
          <div className="p-10">
            <div className="flex xl:flex-row flex-col justify-between xl:items-center items-start gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User Profile"
                  className="w-10 h-10 rounded-full  object-cover"
                />
                <CoreText className="text-lg font-semibold">
                  Welcome, {userData?.data?.name}
                </CoreText>
              </div>

              <div className="h-10 px-6 rounded-full text-white font-semibold bg-linear-to-r from-cyan-500 to-blue-500 flex items-center gap-2">
                <Crown className="w-5 h-5" strokeWidth={1.5} /> You are premium
              </div>
            </div>

            <div>
              <CoreDropdown
                options={[
                  { value: "en", label: "English" },
                  { value: "sr", label: "Serbian" },
                ]}
                value={i18n.language}
                onChange={(lang) => i18n.changeLanguage(lang)}
                className="my-4"
              />
            </div>
            <div className="flex justify-between items-center gap-4">
              <ThemeSelector />
              <CoreButton onClick={() => signOut()}>Logout</CoreButton>
            </div>
          </div>
        </CoreCard>
      </div>
    </PageGuard>
  );
};

export default ProfilePage;
