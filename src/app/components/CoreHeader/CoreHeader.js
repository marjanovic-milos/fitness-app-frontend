import React, { useContext } from "react";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import CoreMenu from "../CoreMenu/CoreMenu";
import { ThemeContext } from "@/app/context/theme";

const CoreHeader = () => {
  const { dark } = useContext(ThemeContext);
  const styles = dark ? "core-header-dark" : "core-header";
  return (
    <nav className={styles}>
      <CoreMenu />
      <div>
        <ThemeSelector />
      </div>
    </nav>
  );
};

export default CoreHeader;
