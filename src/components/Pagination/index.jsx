import React from "react";

const Pagination = ({
  productsPerPage,
  totalProducts,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="paging mr">
      <div className="paging__arrow">
        <i
          className="fas fa-angle-left"
          style={{ cursor: "pointer" }}
          onClick={() => paginate(currentPage - 1)}
        ></i>
      </div>
      {pageNumbers.map((page) => (
        <div
          key={page}
          className={
            page === currentPage ? "paging__number active" : "paging__number"
          }
          style={{ cursor: "pointer" }}
          onClick={() => paginate(page)}
        >
          {page}
        </div>
      ))}
      <div className="paging__arrow">
        <i
          className="fas fa-angle-right"
          style={{ cursor: "pointer" }}
          onClick={() => paginate(currentPage + 1)}
        ></i>
      </div>
    </div>
  );
};

export default Pagination;
