import React from "react";
import CoreNavigation from "../CoreNavigation/CoreNavigation";
import RightSide from "./RightSide";

const CoreHeader = () => {
  return (
    <nav className={`core-header`}>
      <CoreNavigation />
      <RightSide />
    </nav>
  );
};

export default CoreHeader;
