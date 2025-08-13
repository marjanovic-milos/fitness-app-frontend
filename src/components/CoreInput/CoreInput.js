"use client";

import React, { useContext } from "react";

import { ThemeContext } from "src/context/theme";

const CoreInput = (props) => {
  const { dark } = useContext(ThemeContext);

  const { id, classes, name, type, label, value, fieldType, register } = props;

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
        {...register(name)}
      />
    </div>
  );
};

export default CoreInput;
