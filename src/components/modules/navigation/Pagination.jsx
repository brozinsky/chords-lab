import React from "react";
import usePaginationStore from "@/stores/usePaginationStore ";

const Pagination = () => {
  const { currentPage, handleNextPage, handlePrevPage, totalPages } =
    usePaginationStore();

  return (
    <nav className="flex items-center mx-auto h-8 text-sm">
      <button
        className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-neutral-100 bg-transparent border border-neutral-300 rounded-l-lg hover:bg-neutral-300 hover:text-neutral-700 disabled:text-neutral-500 disabled:border-neutral-500 hover:disabled:bg-transparent"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        <span className="sr-only">Previous</span>
        <svg
          className="w-2.5 h-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </button>
      <div className="flex flex-row flex-nowrap px-4 space-x-2">
        <div>{currentPage}</div>
        <div>/</div>
        <div>{totalPages}</div>
      </div>
      <button
        className="flex items-center justify-center px-3 h-8 leading-tight text-neutral-100 bg-transparent border border-neutral-300 rounded-r-lg hover:bg-neutral-300 hover:text-neutral-700 disabled:text-neutral-500 disabled:border-neutral-500 hover:disabled:bg-transparent"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        <span className="sr-only">Next</span>
        <svg
          className="w-2.5 h-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Pagination;
