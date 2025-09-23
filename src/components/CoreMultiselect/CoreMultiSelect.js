import React, { useEffect, useContext, useState } from "react";
import CoreSearch from "../CoreSearch/CoreSearch";
import { X as Close } from "lucide-react";
import { ThemeContext } from "src/context/theme";
const CoreMultiSelect = (props) => {
  const {
    searchFn,
    name,
    data,
    loading,
    placeholder,
    setValue,
    register,
    defaultOptions = [],
    ...rest
  } = props;

  const [selectedOptions, setSelectedOptions] = useState(defaultOptions);
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    if (defaultOptions?.length) {
      setSelectedOptions((prev) => {
        const ids = new Set(prev.map((o) => o.id));
        const merged = [...prev];
        defaultOptions.forEach((opt) => {
          if (!ids.has(opt.id)) merged.push(opt);
        });
        return merged;
      });
    }
  }, [defaultOptions]);

  useEffect(() => {
    setValue(
      name,
      selectedOptions.map((o) => o.id)
    );
  }, [selectedOptions, name, setValue]);
  const handleMultiSelection = (option) => {
    let updated;

    if (selectedOptions.some((item) => item.id === option.id)) {
      updated = selectedOptions.filter((item) => item.id !== option.id);
    } else {
      updated = [...selectedOptions, option];
    }

    setSelectedOptions(updated);
    setValue(
      name,
      updated.map((o) => o.id),
      { shouldValidate: true, shouldDirty: true }
    );
  };

  return (
    <div>
      <input type="hidden" {...register(name)} />

      <CoreSearch
        multi={true}
        delay={1000}
        handleMultiSelection={handleMultiSelection}
        searchFn={searchFn}
        data={data}
        loading={loading}
        placeholder={placeholder}
        register={() => {}}
        {...rest}
      />
      <div className="w-full flex flex-wrap gap-4 mt-5">
        {selectedOptions?.map((option) => (
          <span
            key={option?.id}
            className={`${
              dark ? "border border-white" : "border border-gray-400"
            } flex items-center gap-4 px-2 py-1 text-sm  rounded-xl`}
          >
            {option?.label}
            <Close
              onClick={() => handleMultiSelection(option)}
              className="cursor-pointer h-4 w-4"
              strokeWidth={1.5}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default CoreMultiSelect;
