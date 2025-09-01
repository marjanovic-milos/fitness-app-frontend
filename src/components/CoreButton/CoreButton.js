import React, { useContext } from "react";
import { ThemeContext } from "src/context/theme";
import CoreLoader from "../CoreLoader/CoreLoader";

const CoreButton = (props) => {
  const { classes, variant, icon, isLoading, children } = props;
  const { dark } = useContext(ThemeContext);

  const rootInput = `${classes} ${dark ? "core-button-dark" : "core-button"} ${
    variant === "outline" ? (dark ? "core-button-outline-dark" : "core-button-outline") : "core-button"
  } `;

  const Icon = icon;

  return (
    <button className={rootInput} {...props}>
      {children}
      {icon && (
        <div className='flex items-center justify-center bg-gray-700 rounded-full w-7 h-7 '>
          <Icon className='w-4 h-4' strokeWidth={1.5} />
        </div>
      )}

      {isLoading && <CoreLoader btnLoader />}
    </button>
  );
};

export default CoreButton;
