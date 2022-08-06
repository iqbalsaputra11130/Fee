import React, { Container } from "react";
// import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import tbls from "./tbls";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";
import { BiEdit } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";

function getNumberOfPages(rowCount, rowsPerPage) {
  return Math.ceil(rowCount / rowsPerPage);
}

function toPages(pages) {
  const results = [];

  for (let i = 1; i < pages; i++) {
    results.push(i);
  }

  return results;
}

const columns = [
  {
    name: "Fee Type Code",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Fee Type Name",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row) => row.description,
    sortable: true,
    right: true,
  },
  {
    name: "Status",
    selector: (row) => row.active,
    sortable: true,
    right: true,
  },
  {
    name: "Action",
    button: true,
    cell: () => (
      <div className="App">
        <div class="openbtn text-center">
          <BiEdit />
          <GrView />
          <RiDeleteBinLine />
        </div>
      </div>
    ),
  },
];

// RDT exposes the following internal pagination properties
const BootyPagination = ({
  rowsPerPage,
  rowCount,
  onChangePage,
  onChangeRowsPerPage, // available but not used here
  currentPage,
}) => {
  const handleBackButtonClick = () => {
    onChangePage(currentPage - 1);
  };

  const handleNextButtonClick = () => {
    onChangePage(currentPage + 1);
  };

  const handlePageNumber = (e) => {
    onChangePage(Number(e.target.value));
  };

  const pages = getNumberOfPages(rowCount, rowsPerPage);
  const pageItems = toPages(pages);
  const nextDisabled = currentPage === pageItems.length;
  const previosDisabled = currentPage === 1;

  return (
    <nav className="mt-2">
      <ul className="pagination justify-content-end">
        <li className="page-item">
          <button
            className="page-link"
            onClick={handleBackButtonClick}
            disabled={previosDisabled}
            aria-disabled={previosDisabled}
            aria-label="previous page"
          >
            Previous
          </button>
        </li>
        {pageItems.map((page) => {
          const className =
            page === currentPage ? "page-item active" : "page-item";

          return (
            <li key={page} className={className}>
              <button
                className="page-link"
                onClick={handlePageNumber}
                value={page}
              >
                {page}
              </button>
            </li>
          );
        })}
        <li className="page-item">
          <button
            className="page-link"
            onClick={handleNextButtonClick}
            disabled={nextDisabled}
            aria-disabled={nextDisabled}
            aria-label="next page"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
  <div className="form-check">
    <input
      htmlFor="booty-check"
      type="checkbox"
      className="form-check-input"
      ref={ref}
      onClick={onClick}
      {...rest}
    />
    <label className="form-check-label" id="booty-check" />
  </div>
));


const Tbl = () => {
  return (
    <div className="container">
      <div className="Tbl">
        <div className="card">
          <DataTable
            columns={columns}
            data={tbls}
            defaultSortFieldID={1}
            pagination
            paginationComponent={BootyPagination}
            selectableRows
            selectableRowsComponent={BootyCheckbox}
          />
        </div>
      </div>
    </div>
  );
};

export default Tbl;
