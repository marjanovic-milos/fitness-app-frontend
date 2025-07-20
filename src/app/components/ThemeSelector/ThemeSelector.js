import React, { useContext } from "react";
import { ThemeContext } from "@/app/context/theme";
import CoreSwitch from "../CoreSwitch/CoreSwitch";
const ThemeSelector = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <CoreSwitch
      id="darkModeToggle"
      name="darkMode"
      label=""
      checked={dark}
      onChange={toggleTheme}
    />
  );
};

export default ThemeSelector;
