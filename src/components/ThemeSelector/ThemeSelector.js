import React, { useContext } from "react";

import { ThemeContext } from "src/context/theme";
import CoreSwitch from "../CoreSwitch/CoreSwitch";
import { useTranslation } from "react-i18next";
import { Moon, Sun } from "lucide-react";
import CoreText from "../CoreText/CoreText";
const ThemeSelector = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-4">
      <CoreText className="text-base">{t("core.themeSwitch")}</CoreText>
      <CoreSwitch
        id="darkModeToggle"
        name="darkMode"
        label={t("core.themeSwitch")}
        checked={dark}
        onChange={toggleTheme}
        leftIcon={Sun}
        rightIcon={Moon}
      />
    </div>
  );
};

export default ThemeSelector;
