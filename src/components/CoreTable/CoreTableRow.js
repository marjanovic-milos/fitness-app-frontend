import React from "react";

const CoreTableRow = ({ children, className, handleSubmit }) => {
  const styles = `core-table-row ${className}`;
  return (
    <form onSubmit={handleSubmit} className={styles}>
      {children}
    </form>
  );
};

export default CoreTableRow;
