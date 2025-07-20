import React from "react";
import CoreFooter from "../CoreFooter/CoreFooter";
import CoreHeader from "../CoreHeader/CoreHeader";
import CoreNavigation from "../CoreNavigation/CoreNavigation";
const CoreLayout = ({ children }) => {
  return (
    <div className="core-layout">
      <CoreHeader />
      <main className="relative flex">
        <CoreNavigation />
        {children}
      </main>
      <CoreFooter />
    </div>
  );
};

export default CoreLayout;
