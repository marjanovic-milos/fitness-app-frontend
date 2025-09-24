import React, { useState, useContext } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ThemeContext } from "src/context/theme";

const TableHeaders = ({ columns, sortingHandler, className }) => {
  const { dark } = useContext(ThemeContext);

  const [sortStates, setSortStates] = useState(
    columns?.map((_, index) => index === 0)
  );

  const header = `${dark ? "core-table-header-dark" : "core-table-header"} ${
    className?.header || ""
  }`;

  const headerItem = `${
    dark ? "core-table-header-item-dark" : "core-table-header-item"
  } ${className?.headerItem || ""}`;

  const skipFields = ["Actions", "Links", ""];

  const handleSorting = (column, index) => {
    const newSortStates = [...sortStates];
    newSortStates[index] = !newSortStates[index];
    setSortStates(newSortStates);

    sortingHandler({ column, sort: newSortStates[index] });
  };

  return (
    <div className={header}>
      {columns?.map((column, index) => (
        <div key={index}>
          {!skipFields.includes(column) ? (
            <div
              onClick={() => handleSorting(column, index)}
              className={headerItem}
            >
              {column}
              {sortStates[index] ? (
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
      ))}
    </div>
  );
};

export default TableHeaders;
