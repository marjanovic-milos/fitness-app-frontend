import React from "react";

const CoreTableRow = ({ children, className }) => {
  const styles = `core-table-row ${className}`;
  return <div className={styles}>{children}</div>;
};

export default CoreTableRow;
