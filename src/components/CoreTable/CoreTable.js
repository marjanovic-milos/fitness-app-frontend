import React, { useContext } from "react";
import { ThemeContext } from "src/context/theme";
const CoreTable = (props) => {
  const { children, columns, className, loading } = props;

  const { dark } = useContext(ThemeContext);

  const root = `core-table ${className?.root}`;
  const header = `${dark ? "core-table-header-dark" : "core-table-header"} ${
    className?.header
  }`;
  const headerItem = `${
    dark ? "core-table-header-item-dark" : "core-table-header-item"
  } ${className?.headerItem}`;

  const loader = Array.from({ length: 6 }, (_, i) => (
    <tr className="my-5">
      <td className="core-table-loader" />
    </tr>
  ));

  return (
    <table className={root}>
      <thead className={header}>
        {columns?.map((column, index) => (
          <tr className="" key={index}>
            <th className={headerItem}>{column}</th>
          </tr>
        ))}
      </thead>
      <tbody className="core-table-body">{loading ? loader : children}</tbody>
    </table>
  );
};

export default CoreTable;
