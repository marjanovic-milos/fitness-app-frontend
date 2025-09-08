import { useState, useMemo } from "react";
import CoreInput from "../CoreInput/CoreInput";
import { useDebounce } from "src/app/hooks/useDebounced";

const CoreSearch = (props) => {
  const {
    delay,
    name,
    classes,
    searchFn,
    data,
    loading,
    multi = false,
    handleMultiSelection,
    placeholder,
    register,
    setValue,
    ...rest
  } = props;

  const [text, setText] = useState("");
  const [close, setClose] = useState(false);
  const debounced = useDebounce(text, delay);

  useMemo(() => {
    if (debounced) searchFn(debounced);
  }, [debounced, searchFn]);

  const handleSelection = (data) => {
    if (multi) {
      handleMultiSelection(data);
      setClose(true);
    } else {
      setValue(name, data?.id);
      setText(data?.label);
      setClose(true);
    }
  };

  const showList = useMemo(
    () => text && data?.length && !close,
    [text, data, close]
  );

  return (
    <div className="core-search-root">
      <input type="hidden" {...register(name)} />

      <CoreInput
        name={"search"}
        value={text}
        classes={classes}
        placeholder={placeholder || "Search..."}
        onChange={(e) => setText(e.target.value)}
        action={() => setClose(true)}
        onFocus={() => setClose(false)}
        loading={loading}
        close={!close}
        search={true}
        register={() => {}}
        {...rest}
      />
      {showList && (
        <div className="core-search-list">
          {data?.map((option) => (
            <p
              key={option?._id}
              className="core-search-list-element"
              onClick={() => handleSelection(option)}
            >
              {option.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoreSearch;
