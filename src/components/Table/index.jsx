import React from "react";
import { Rows } from "./Partials";

const Table = ({ rows }) => {
  console.log(rows + "table");
  return (
    <table className="details-table__tableDetails">
      <tbody className="details-table__tableDetails__body">
        <Rows rows={rows} />
      </tbody>
    </table>
  );
};

export default Table;
