import React from "react";

const Badge = ({children, handleCloseClick}) => {
  return (
    <span
      className="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium border border-neutral-500 bg-neutral-600 rounded text-text-100"
    >
      {children}
      <button
        type="button"
        className="inline-flex items-center p-1 ml-2 text-sm text-neutral-400 bg-transparent rounded-sm hover:text-neutral-200"
        data-dismiss-target="#badge-dismiss-dark"
        aria-label="Remove"
        onClick={handleCloseClick}
      >
        <svg
          className="w-2 h-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Remove filter</span>
      </button>
    </span>
  );
};

export default Badge;
