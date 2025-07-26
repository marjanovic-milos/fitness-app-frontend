"use client";
import React from "react";

import ThemeSelector from "src/app/components/ThemeSelector/ThemeSelector";
import { useTranslation } from "react-i18next";
import PageGuard from "src/app/page-guards/pageGuard";

const ProfilePage = () => {
  const { i18n } = useTranslation();

  return (
    <PageGuard>
      <div className='xl:px-12 px-6 py-5'>
        <ThemeSelector />

        <div>
          <button className='mx-2' onClick={() => i18n.changeLanguage("sr")}>
            Serbian
          </button>
          <button onClick={() => i18n.changeLanguage("en")}>English</button>
        </div>
      </div>
    </PageGuard>
  );
};

export default ProfilePage;
