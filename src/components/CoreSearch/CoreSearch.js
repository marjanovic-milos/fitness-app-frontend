import { useState, useMemo } from "react";
import CoreInput from "../CoreInput/CoreInput";
import { useDebounce } from "src/app/hooks/useDebounced";
import { useForm } from "react-hook-form";

const CoreSearch = (props) => {
  const { delay, classes, searchFn, data, loading, multi, handleMultiSelection } = props;

  const [text, setText] = useState("");
  const [close, setClose] = useState(false);
  const debounced = useDebounce(text, delay);

  const { register } = useForm();

  useMemo(() => {
    if (debounced) searchFn(debounced);
  }, [debounced, searchFn]);

  const handleSelection = (data) => {
    if (multi) {
      handleMultiSelection(data);
      setClose(true);
    } else {
      setText(data?.label);
    }
  };
  const showList = useMemo(() => text && data?.length && !close, [text, data, close]);

  return (
    <div className='core-search-root'>
      <CoreInput
        name='search'
        value={text}
        register={register}
        classes={classes}
        placeholder='Search...'
        onChange={(e) => setText(e.target.value)}
        action={() => setClose(true)}
        onFocus={() => setClose(false)}
        loading={loading}
        close={!close}
        search={true}
        {...props}
      />
      {showList && (
        <div className='core-search-list'>
          {data?.map((option) => (
            <p key={option?._id} className='core-search-list-element' onClick={() => handleSelection(option)}>
              {option.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoreSearch;
