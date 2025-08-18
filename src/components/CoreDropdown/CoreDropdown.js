import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Select = ({ options = [], value, onChange, disabled = false, className = "" }) => {
  const [open, setOpen] = useState(false);

  const styles = `core-select-wrapper relative ${className}`;

  return (
    <div className={styles}>
      <select
        className='core-select-element appearance-none pr-10'
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setOpen(false);
        }}
        disabled={disabled}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className='core-select-option'>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Chevron Icon */}
      <ChevronDown
        className={`absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 transition-transform duration-200 pointer-events-none ${
          open ? "rotate-180" : ""
        }`}
      />
    </div>
  );
};

export default Select;
