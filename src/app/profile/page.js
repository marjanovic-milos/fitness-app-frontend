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

import CoreHeading from "src/components/CoreHeading/CoreHeading";
import { LogOut } from "lucide-react";
const ProfilePage = () => {
  const { i18n, t } = useTranslation();
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
      <CoreCard>
        <div className="flex lg:flex-row flex-col items-start justify-between py-10 lg:px-0 px-10">
          <div className="flex flex-col justify-start text-start w-full lg:px-10 px-0 lg:pb-0 pb-10 lg:border-r lg:border-b-0 border-b border-gray-400">
            <div className="flex items-center justify-between">
              <CoreHeading type="h2">{t("profile.userDetails")}</CoreHeading>
            </div>
            <div className="flex items-center gap-4 my-5">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User Profile"
                className="w-10 h-10 rounded-full  object-cover"
              />
              <CoreText className="text-baseline">
                {userData?.data?.name} - {userData?.data?.role}{" "}
              </CoreText>
            </div>
            <div className="flex items-center gap-4" onClick={() => signOut()}>
              {t("profile.logout")}
              <LogOut className="w-4 h-4 my-2" strokeWidth={1.5} />
            </div>
          </div>

          <div className="flex flex-col justify-start items-start w-full lg:px-10 px-0 lg:pt-0 pt-10">
            <CoreHeading type="h2">{t("profile.userSettings")}</CoreHeading>
            <div className="flex flex-col items-center gap-4 my-5 w-full">
              <ThemeSelector />
              <div className="flex justify-start items-center w-2xs mr-auto">
                <CoreText className="flex justify-start w-full">
                  {t("core.translationsSelect")}
                </CoreText>
                <CoreDropdown
                  options={[
                    { value: "en", label: "English" },
                    { value: "sr", label: "Serbian" },
                  ]}
                  value={i18n.language}
                  onChange={(lang) => i18n.changeLanguage(lang)}
                />
              </div>
            </div>
          </div>
        </div>
      </CoreCard>
    </PageGuard>
  );
};

export default ProfilePage;
