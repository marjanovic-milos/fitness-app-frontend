import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CorePagination = (props) => {
  const { page, handleChange, totalCount, totalPages } = props;

  const firstPage = page === 1;
  const lastPage = page === totalPages;

  return (
    <div className="core-pagination my-5">
      <button
        disabled={firstPage}
        className={`core-pagination-buttons ${firstPage ? "opacity-25 " : ""}`}
        onClick={() => handleChange(page - 1)}
      >
        <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
      </button>
      <ul className="core-pagination">
        {page !== 1 && (
          <li
            className="core-pagination-buttons"
            onClick={() => handleChange(page - 1)}
          >
            {page - 1}
          </li>
        )}
        <li
          className={`${
            page === page ? "core-pagination-active" : "core-pagination-buttons"
          }`}
        >
          {page}
        </li>
        {page !== totalPages && (
          <li
            className="core-pagination-buttons"
            onClick={() => handleChange(page + 1)}
          >
            {page + 1}
          </li>
        )}
      </ul>
      <button
        disabled={lastPage}
        className={`core-pagination-buttons ${lastPage ? "opacity-25 " : ""}`}
        onClick={() => handleChange(page + 1)}
      >
        <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
      </button>
    </div>
  );
};

export default CorePagination;
