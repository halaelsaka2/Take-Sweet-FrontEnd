import React from "react";
import Table from "./../Table";
{
  /* <TableContainer rows={this.state.row5} className="details-table" /> */
}
const TableContainer = ({ className, rows }) => {
  return (
    <div className={className}>
      <Table rows={rows} />
    </div>
  );
};

export default TableContainer;
