import React, { useContext } from "react";
import { ThemeContext } from "src/context/theme";

const CoreButton = (props) => {
  const { className, type, icon } = props;
  const { dark } = useContext(ThemeContext);

  const rootInput = `${dark ? "core-button-dark" : "core-button"} ${
    type === "outline" ? (dark ? "core-button-outline-dark" : "core-button-outline") : ""
  } ${className?.root}`;

  const Icon = icon;

  return (
    <button className={rootInput} {...props}>
      {icon && (
        <div className='flex items-center justify-center bg-gray-700 rounded-full w-7 h-7 '>
          <Icon className='w-4 h-4' strokeWidth={1.5} />
        </div>
      )}
      {props.children}
    </button>
  );
};

export default CoreButton;
