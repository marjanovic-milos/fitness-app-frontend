import { useState, useMemo } from "react";
import CoreInput from "../CoreInput/CoreInput";
import { useDebounce } from "src/app/hooks/useDebounced";
import { useForm } from "react-hook-form";

const CoreSearch = ({
  delay,
  classes,
  searchFn,
  data,
  loading,
  multi,
  handleMultiSelection,
}) => {
  const [text, setText] = useState("");
  const [close, setClose] = useState(false);

  const { register } = useForm();

  useDebounce(text, delay, async (val) => {
    await searchFn(val);
  });

  const handleSelection = (data) => {
    multi ? handleMultiSelection(data) : setText(data?.label);
  };
  const showList = useMemo(
    () => !text && !!data?.length && !close,
    [text, data, close]
  );

  const handleClose = () => {
    setClose(true);
  };
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
        action={handleClose}
      />
      {showList && (
        <div className="core-search-list">
          {data?.map((option) => (
            <p onClick={() => handleSelection(option)}>{option.label}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoreSearch;
