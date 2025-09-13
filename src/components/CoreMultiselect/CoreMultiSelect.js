import React, { useEffect, useMemo, useState } from "react";
import CoreSearch from "../CoreSearch/CoreSearch";
import { X as Close } from "lucide-react";
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

  const handleMultiSelection = (option) => {
    if (selectedOptions.some((item) => item.id === option.id)) {
      setSelectedOptions(
        selectedOptions.filter((item) => item.id !== option.id)
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const options = useMemo(
    () => (
      <div className="w-full flex flex-wrap gap-4 mt-5">
        {selectedOptions?.map((option) => (
          <span
            key={option?.id}
            className="flex items-center gap-4 px-2 py-1 text-sm border border-white rounded-xl"
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
    ),
    [handleMultiSelection, selectedOptions]
  );
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
      {options}
    </div>
  );
};

export default CoreMultiSelect;
