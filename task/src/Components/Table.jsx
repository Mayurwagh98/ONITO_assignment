import React, { useState } from "react";
import "./Table.css";

function TableWithPagination({ users }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const pageNumbers = Math.ceil(users.length / rowsPerPage);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const renderTableusers = () => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end).map((row) => (
      <tr key={row.id}>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.age}</td>
        <td>{row.gender}</td>
        <td>{row.mobile}</td>
        <td>{row.address}</td>
        <td>{row.govtId}</td>
        <td>{row.guardian_name}</td>
        <td>{row.nationality}</td>
      </tr>
    ));
  };

  const renderPageNumbers = () => {
    const pageList = [];

    for (let i = 1; i <= pageNumbers; i++) {
      pageList.push(
        <button
          key={i}
          id={i}
          onClick={handleClick}
          //   className={i === currentPage ? "active" : ""}
          className="page_button"
        >
          {i}
        </button>
      );
    }

    return pageList;
  };

  return (
    <>
      <div className="rows_per_page">
        <span>Rows per page:</span>
        <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Govt ID</th>
              <th>Guardian Details</th>
              <th>Nationality</th>
            </tr>
          </thead>
          <tbody>{renderTableusers()}</tbody>
        </table>
      </div>
      <div className="pagination">
        <ul>{renderPageNumbers()}</ul>
      </div>
    </>
  );
}

export { TableWithPagination };
