"use client";

import React, { useContext } from "react";
import { ThemeContext } from "src/context/theme";
import { Search } from "lucide-react"; // import search icon

const CoreInput = (props) => {
  const { dark } = useContext(ThemeContext);

  const {
    id,
    classes,
    name,
    type,
    label,
    value,
    fieldType,
    register,
    required,
    errors,
    search, // <-- boolean flag to toggle search icon
  } = props;

  const rootStyles = `${dark ? "core-root-input-dark" : "core-root-input"} ${
    classes?.root
  }`;

  const rootInput = `${
    fieldType === "flat"
      ? "core-input-flat"
      : dark
      ? "core-input-dark"
      : "core-input"
  } ${type === "number" ? "no-spinner" : ""} ${classes?.input}`;

  const labelStyle = `${dark ? "core-input-label-dark" : "core-input-label"}`;

  return (
    <div className={rootStyles}>
      <label className={labelStyle} htmlFor={id}>
        {label}
      </label>

      <div className="relative w-full">
        <input
          id={id}
          type={type}
          min={0}
          label={label}
          className={`${rootInput} ${search ? "pl-10" : ""} w-full`}
          defaultValue={value}
          {...register(name, required)}
          {...props}
        />
        {search && (
          <Search
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
        )}
      </div>

      {errors?.[name] ? (
        <p className="error-input-message">{errors[name].message}</p>
      ) : null}
    </div>
  );
};

export default CoreInput;
