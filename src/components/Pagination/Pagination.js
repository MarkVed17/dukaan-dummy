import "./Pagination.css";

const Pagination = ({
  currentPage,
  slogansPerPage,
  totalSlogans,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalSlogans / slogansPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-container">
      <div></div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              number === currentPage ? "active-page-item" : "page-item"
            }
          >
            <button
              onClick={() => paginate(number)}
              className={
                number === currentPage ? "active-page-link" : "page-link"
              }
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
      <div className="pagination-next">
        <button className="pagination-next-btn">Next</button>
        <img
          src="/assets/images/icons/next.svg"
          alt=">"
          className="pagination-next-icon"
        />
      </div>
    </nav>
  );
};

export { Pagination };
