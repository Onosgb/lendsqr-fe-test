import React, { useEffect, useState } from "react";
import { User } from "../model";
interface Pagination {
  items: User[];
  paginatData: Function;
}

const PaginationComponent: React.FC<Pagination> = ({ items, paginatData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const pages = [10, 25, 50, 100];
  // Compute total number of pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Compute start and end index of items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, items.length);

  // Handle page change
  function handlePageChange(pageNumber: number) {
    setCurrentPage(pageNumber);

    paginatData(items.slice(startIndex, endIndex));
  }

  useEffect(() => {
    handlePageChange(1);
    // eslint-disable-next-line
  }, [itemsPerPage]);

  return (
    <>
      <div className="pagination_section">
        <div className="showing">
          Showing{" "}
          <select
            name=""
            id=""
            onChange={(item) => setItemsPerPage(+item.target.value)}
          >
            {pages.map((num, idx) => (
              <option value={num} key={idx}>
                {num}
              </option>
            ))}
          </select>
          {endIndex} of {items.length} items
        </div>
        <ul id="pagination">
          <li
            onClick={() => {
              if (currentPage > 1) {
                handlePageChange(currentPage - 1);
              }
            }}
          >
            <span className="">«</span>
          </li>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <li key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
                <span className={currentPage === pageNumber ? "active" : ""}>
                  {pageNumber}
                </span>
              </li>
            )
          )}

          <li
            onClick={() => {
              if (currentPage < totalPages) {
                handlePageChange(currentPage + 1);
              }
            }}
          >
            <span>»</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PaginationComponent;
