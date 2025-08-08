import React from "react";

const Select = ({
  options = [],
  value,
  onChange,
  disabled = false,
  className,
}) => {
  const styles = `core-select-wrapper ${className}`;
  return (
    <div className={styles}>
      <select
        className={"core-select-element"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      >
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            className={"core-select-option"}
          >
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
