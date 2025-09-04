import React, { useState } from "react";
import CoreSearch from "../CoreSearch/CoreSearch";
import { X as Close } from "lucide-react";
const CoreMultiSelect = ({ searchFn, data, loading }) => {
  const options = [
    { id: "1", label: "Option 1" },
    { id: "2", label: "Option 2" },
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleMultiSelection = (option) => {
    if (selectedOptions.some((item) => item.id === option.id)) {
      setSelectedOptions(
        selectedOptions.filter((item) => item.id !== option.id)
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="">
      <CoreSearch
        multi={true}
        classes="w-full"
        delay={2000}
        handleMultiSelection={handleMultiSelection}
        searchFn={searchFn}
        data={options}
        loading={loading}
      />
      <div className="flex w-full justify-end mt-2">
        {selectedOptions?.map((option) => (
          <span
            key={option?.id}
            className="flex items-center px-2 m-1 h-10 bg-blue-200 rounded-xl"
          >
            {option?.label}
            <Close
              onClick={() => handleMultiSelection(option)}
              className="cursor-pointer"
              strokeWidth={1.5}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default CoreMultiSelect;
