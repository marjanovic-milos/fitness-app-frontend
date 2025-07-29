import React, { useContext } from "react";

import { ThemeContext } from "src/context/theme";
import CoreSwitch from "../CoreSwitch/CoreSwitch";
import { useTranslation } from "react-i18next";

const ThemeSelector = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return <CoreSwitch id='darkModeToggle' name='darkMode' label={t("core.themeSwitch")} checked={dark} onChange={toggleTheme} />;
};

export default ThemeSelector;
