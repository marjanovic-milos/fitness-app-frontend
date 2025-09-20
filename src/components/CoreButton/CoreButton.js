import React, { useContext } from "react";
import { ThemeContext } from "src/context/theme";
import CoreLoader from "../CoreLoader/CoreLoader";

const CoreButton = (props) => {
  const {
    classes,
    variant,
    icon,
    isLoading,
    children,
    position = "right",
  } = props;
  const { dark } = useContext(ThemeContext);

  const rootInput = `${classes} ${dark ? "core-button-dark" : "core-button"} ${
    variant === "outline"
      ? dark
        ? "core-button-outline-dark"
        : "core-button-outline"
      : "core-button"
  } ${position === "left" ? "core-button-left-icon" : ""} `;

  const Icon = icon;

  return (
    <button className={rootInput} disabled={isLoading} {...props}>
      {icon && position === "left" && (
        <div
          className={`${
            variant === "outline" ? "text-white" : ""
          } flex items-center justify-center bg-gray-700 rounded-full w-6 h-6`}
        >
          <Icon className="w-4 h-4" strokeWidth={1.5} />
        </div>
      )}
      {children}
      {icon && position === "right" && (
        <div
          className={`${
            variant === "outline" ? "text-white" : ""
          } flex items-center justify-center bg-gray-700 rounded-full w-6 h-6`}
        >
          <Icon className="w-4 h-4" strokeWidth={1.5} />
        </div>
      )}

      {isLoading && <CoreLoader btnLoader />}
    </button>
  );
};

export default CoreButton;
