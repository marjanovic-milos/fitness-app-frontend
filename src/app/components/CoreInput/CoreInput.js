"use client";

import React from "react";
import { useForm } from "react-hook-form";

const CoreInput = (props) => {
  const { register } = useForm();
  const { id, classes, name, type, label } = props;
  const rootStyles = `core-root-input ${classes?.root ? classes.root : ""}`;
  const rootInput = `core-input ${classes?.input ? classes.input : ""}`;

  return (
    <div className={rootStyles}>
      <label className="core-input-label" for={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        label={label}
        className={rootInput}
        {...register(name)}
        {...props}
      />
    </div>
  );
};

export default CoreInput;
