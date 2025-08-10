import React, { useContext } from "react";
import { ThemeContext } from "src/context/theme";
import { ChevronDown, ChevronUp } from "lucide-react";
const CoreTable = (props) => {
  const { children, columns, className, loading, sortingHandler } = props;

  const { dark } = useContext(ThemeContext);

  const root = `core-table ${className?.root}`;
  const header = `${dark ? "core-table-header-dark" : "core-table-header"} ${className?.header}`;
  const headerItem = `${dark ? "core-table-header-item-dark" : "core-table-header-item"} ${className?.headerItem}`;

  const loader = Array.from({ length: 6 }, (_, i) => (
    <tr className='my-5' key={i}>
      <td className='core-table-loader' />
    </tr>
  ));

  return (
    <table className={root}>
      <thead className={header}>
        {columns?.map((column, index) => (
          <tr className='' key={index}>
            <th onClick={() => sortingHandler()} className={headerItem}>
              {column}

              {/* <ChevronDown className='w-4 h-5' strokeWidth={1} /> */}
            </th>
          </tr>
        ))}
      </thead>
      <tbody className='core-table-body'>{loading ? loader : children}</tbody>
    </table>
  );
};

export default CoreTable;
