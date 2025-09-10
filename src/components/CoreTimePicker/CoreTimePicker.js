import React from "react";
import CoreInput from "../CoreInput/CoreInput";

const CoreTimePicker = ({
  name,
  defaultValue = [],
  register,
  errors,
  label,
  value,
}) => {
  const handleChange = (e) => {
    let val = e.target.value.replace(/[^\d:]/g, "");

    if (/^\d{2}$/.test(val)) {
      val = val.slice(0, 2) + ":" + val.slice(2);
    }

    setValue(name, val, { shouldValidate: true });
  };

  return (
    <CoreInput
      type="text"
      label={label}
      defaultValue={defaultValue}
      maxLength={5}
      placeholder="HH:MM"
      name={name}
      register={register}
      value={value}
      required={{
        required: "Time is required",
        pattern: {
          value: /^([01]\d|2[0-3]):([0-5]\d)$/,
          message: "Invalid time format (HH:MM)",
        },
      }}
      onChange={handleChange}
      errors={errors}
    />
  );
};

export default CoreTimePicker;
