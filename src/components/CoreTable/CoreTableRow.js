import React from "react";

const CoreTableRow = ({ children, className, handleSubmit, onSubmit }) => {
  const styles = `core-table-row ${className}`;
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles}>
        {children}
      </form>
    </div>
  );
};

export default CoreTableRow;
