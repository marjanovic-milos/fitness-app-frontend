import React from "react";

const CoreLoader = (props) => {
  const { className, btnLoader } = props;
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={` ${
          btnLoader ? "w-4 h-4 border-1" : "w-12 h-12 border-4"
        } border-blue-500 border-t-transparent rounded-full animate-spin ${className}`}
      ></div>
    </div>
  );
};

export default CoreLoader;
