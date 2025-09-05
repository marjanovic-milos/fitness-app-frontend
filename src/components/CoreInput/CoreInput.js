"use client";

import React, { useContext } from "react";
import { ThemeContext } from "src/context/theme";
import { X as Close, Search } from "lucide-react"; // import search icon
import CoreLoader from "../CoreLoader/CoreLoader";

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
    search,
    loading,
    action,
    close,
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

        {search ? (
          loading ? (
            <div className="absolute right-5 top-1/2 -translate-y-1/2">
              <CoreLoader btnLoader />
            </div>
          ) : action && close ? (
            <Close
              onClick={() => action()}
              className="cursor-pointer absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
              strokeWidth={1.5}
            />
          ) : (
            <Search
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
          )
        ) : null}
      </div>

      {errors?.[name] ? (
        <p className="error-input-message">{errors[name].message}</p>
      ) : null}
    </div>
  );
};

export default CoreInput;
