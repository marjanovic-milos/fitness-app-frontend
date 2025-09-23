"use client";

import React, { useContext } from "react";
import { Controller } from "react-hook-form";
import { ThemeContext } from "src/context/theme";
const CoreCheckbox = ({ label, value, name, control }) => {
  const { dark } = useContext(ThemeContext);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const isChecked = field.value?.includes(value) || false;

        const handleChange = (e) => {
          if (e.target.checked) {
            field.onChange([...(field.value || []), value]);
          } else {
            field.onChange(field.value.filter((v) => v !== value));
          }
        };

        return (
          <label className="flex items-center space-x-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleChange}
              className="peer hidden"
            />

            <div
              className={`core-checkbox 
                h-6 w-6 flex items-center justify-center
                rounded-full border-2 border-gray-400
                transition-all duration-200
                peer-checked:border-[var(--color-third)]
                peer-checked:bg-[var(--color-third)]
                peer-active:scale-90
              `}
            >
              {isChecked && (
                <svg
                  className="h-3 w-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <span
              className={`text-sm font-medium ${
                dark ? "text-white" : "text-gray-800"
              } `}
            >
              {label}
            </span>
          </label>
        );
      }}
    />
  );
};

export default CoreCheckbox;
