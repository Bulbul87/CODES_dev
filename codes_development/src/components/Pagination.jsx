import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="mx-2 px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Previous
      </button>
       {pages.map((page) => ( 
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`mx-2 px-4 py-2 ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded`}
        >
          {page}
        </button>
      ))} 
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="mx-2 px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
