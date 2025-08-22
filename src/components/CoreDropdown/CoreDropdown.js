import React, { useState, useContext } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { ThemeContext } from "src/context/theme";

const CoreDropdown = ({ options, value, onChange }) => {
  const [open, setOpen] = useState(false);

  const { dark } = useContext(ThemeContext);

  const baseButton = "flex items-center justify-between gap-2 rounded-full px-4 py-2 text-sm font-medium focus:outline-none transition";
  const lightButton = "bg-gray-100 text-gray-500 border-gray-300 hover:bg-gray-50";
  const darkButton = "bg-gray-900 text-white border-gray-600 hover:bg-gray-600";

  const baseList = "absolute left-0 mt-2 w-40 rounded-xl shadow-lg z-50 overflow-hidden";
  const lightList = "bg-white border-gray-200 text-gray-700";
  const darkList = "bg-gray-900 border-gray-600 text-white";

  const baseItem = "cursor-pointer px-4 py-2 text-sm transition hover:opacity-80";
  const lightItem = "hover:bg-gray-100";
  const darkItem = "hover:bg-gray-600";

  const btnValue = options.find((option) => option.value === value);

  return (
    <div className='relative inline-block'>
      <button onClick={() => setOpen(!open)} className={`${baseButton} ${dark ? darkButton : lightButton}`}>
        {btnValue?.label ?? "Select"}
        {open ? (
          <ChevronUp size={16} className={dark ? "text-white" : "text-gray-600"} />
        ) : (
          <ChevronDown size={16} className={dark ? "text-white" : "text-gray-600"} />
        )}
      </button>

      {open && (
        <div className={`${baseList} ${dark ? darkList : lightList}`}>
          {options.map((option, idx) => (
            <div
              key={idx}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`${baseItem} ${dark ? darkItem : lightItem}`}
            >
              {option?.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoreDropdown;
