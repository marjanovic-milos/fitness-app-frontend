import { useState, useMemo } from "react";
import CoreInput from "../CoreInput/CoreInput";
import { useDebounce } from "src/app/hooks/useDebounced";
import { useForm } from "react-hook-form";

const CoreSearch = ({
  delay,
  searchFn,
  classes,
  data,
  loading,
  multi,
  handleMultiSelection,
}) => {
  const [text, setText] = useState("");

  const { register } = useForm();

  useDebounce(text, delay, async (val) => {
    await searchFn(val);
  });

  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
  ];
  const handleSelection = (data) => {
    multi ? handleMultiSelection(data) : setText(data);
  };
  const showList = useMemo(
    () => multi || (!text && !!options?.length),
    [multi, text, data]
  );

  return (
    <div className="p-4 w-full relative">
      <CoreInput
        label="Search"
        value={text}
        register={register}
        classes={classes}
        onChange={(e) => setText(e.target.value)}
        name="search"
        loading={loading}
        search
      />
      {showList && (
        <div className="core-search-list">
          {options?.map((option) => (
            <p onClick={() => handleSelection(option?.label)}>{option.label}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoreSearch;
