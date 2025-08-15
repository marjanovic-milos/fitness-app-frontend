"use client";

import React, { useContext } from "react";

import { ThemeContext } from "src/context/theme";
import { ErrorMessage } from "@hookform/error-message";

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
  } = props;
  const rootStyles = `${dark ? "core-root-input-dark" : "core-root-input"} ${
    classes?.root ? classes.root : ""
  }`;
  const rootInput = `${
    dark
      ? "core-input-dark"
      : fieldType === "flat"
      ? "core-input-flat"
      : "core-input"
  }  ${classes?.input ? classes.input : ""} `;
  const labelStyle = `${dark ? "core-input-label-dark" : "core-input-label"}`;
  return (
    <div className={rootStyles}>
      <label className={labelStyle} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        label={label}
        className={rootInput}
        defaultValue={value}
        {...register(name, required)}
      />

      {errors?.[name] ? (
        <p className="error-input-message">{errors[name].message}</p>
      ) : null}
    </div>
  );
};

export default CoreInput;
