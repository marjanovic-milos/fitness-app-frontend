import React, { useContext } from "react";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import CoreMenu from "../CoreMenu/CoreMenu";
import { ThemeContext } from "@/app/context/theme";
import { useTranslation } from "react-i18next";

const CoreHeader = () => {
  const { dark } = useContext(ThemeContext);
  const styles = dark ? "core-header-dark" : "core-header";
  const { i18n } = useTranslation();

  return (
    <nav className={styles}>
      <CoreMenu />
      <div>
        <ThemeSelector />

        <button onClick={() => i18n.changeLanguage("sr")}>Serbian</button>
        <button onClick={() => i18n.changeLanguage("en")}>English</button>
      </div>
    </nav>
  );
};

export default CoreHeader;
