import React from "react";

const CoreSwitch = ({
  id,
  checked,
  onChange,
  name,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
}) => {
  return (
    <label htmlFor={id} className="inline-flex items-center cursor-pointer">
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer"
      />

      <div className="relative w-20 h-10 bg-white rounded-full shadow-inner transition-colors duration-300">
        <div
          className={`absolute top-1 left-1 h-8 w-8 rounded-full flex items-center justify-center shadow-md transition-all duration-300
            ${checked ? "translate-x-10 bg-black" : "translate-x-0 bg-white"}`}
        >
          {!checked && LeftIcon && (
            <LeftIcon size={20} className="text-yellow-400" />
          )}
          {checked && RightIcon && (
            <RightIcon size={20} className="text-white" />
          )}
        </div>
      </div>
    </label>
  );
};

export default CoreSwitch;
