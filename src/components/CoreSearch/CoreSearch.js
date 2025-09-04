import { useState } from "react";
import CoreInput from "../CoreInput/CoreInput";
import { useDebounce } from "src/app/hooks/useDebounced";
import { useForm } from "react-hook-form";

const CoreSearch = ({ delay, searchFn, classes, data, loading }) => {
  const [text, setText] = useState("");

  const { register } = useForm();

  useDebounce(text, delay, (val) => {
    console.log("Callback fired:", val);
    searchFn(val);
  });

  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
  ];

  return (
    <div className="p-4 relative">
      <CoreInput
        label="Search"
        value={text}
        register={register}
        classes={classes}
        onChange={(e) => setText(e.target.value)}
        name="search"
        search
      />
      <div className="absolute bg-red-200 bottom-[-50px] left-0 rounded-xl w-fit h-[50px] overflow-y-scroll z-100 m-4">
        {options.map((option) => (
          <p className="h-10">{option.label}</p>
        ))}
      </div>
    </div>
  );
};

export default CoreSearch;
