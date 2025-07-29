"use client";

import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { ThemeContext } from "src/context/theme";

const CoreInput = (props) => {
  const { register } = useForm();
  const { dark } = useContext(ThemeContext);
  const { id, classes, name, type, label } = props;

  const rootStyles = `${dark ? "core-root-input-dark" : "core-root-input"} ${classes?.root ? classes.root : ""}`;
  const rootInput = `${dark ? "core-input-dark" : "core-input"} ${classes?.input ? classes.input : ""}`;
  const labelStyle = `${dark ? "core-input-label-dark" : "core-input-label"}`;
  return (
    <div className={rootStyles}>
      <label className={labelStyle} htmlFor={id}>
        {label}
      </label>
      <input id={id} type={type} label={label} className={rootInput} {...register(name)} {...props} />
    </div>
  );
};

export default CoreInput;
