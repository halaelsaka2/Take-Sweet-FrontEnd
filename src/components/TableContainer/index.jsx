import React from "react";
import Table from "./../Table";

const TableContainer = ({ className, rows }) => (
  <div className={className}>
    <Table rows={rows} />
  </div>
);

export default TableContainer;
