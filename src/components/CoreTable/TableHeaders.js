import React, { useState, useContext } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ThemeContext } from "src/context/theme";
const TableHeaders = ({ columns, sortingHandler, className }) => {
  const { dark } = useContext(ThemeContext);

  const header = `${dark ? "core-table-header-dark" : "core-table-header"} ${
    className?.header
  }`;

  const headerItem = `${
    dark ? "core-table-header-item-dark" : "core-table-header-item"
  } ${className?.headerItem}`;

  const headers = columns?.map((column, index) => {
    const [sort, setSort] = useState(index === 0);

    const skipFields = ["Actions", "Links", ""];

    const sorting = ({ column, sort }) => {
      setSort(!sort);
      sortingHandler({ column, sort });
    };

    return (
      <div key={index}>
        {!skipFields.includes(column) ? (
          <div onClick={() => sorting({ column, sort })} className={headerItem}>
            {column}

            {sort ? (
              <ChevronDown
                className="min-w-[20px] min-h-full"
                strokeWidth={1.5}
              />
            ) : (
              <ChevronUp
                className="min-w-[20px] min-h-full"
                strokeWidth={1.5}
              />
            )}
          </div>
        ) : (
          <div className={headerItem}>{column}</div>
        )}
      </div>
    );
  });
  return <div className={header}>{headers}</div>;
};

export default TableHeaders;
