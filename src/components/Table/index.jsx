import React from "react";
import Rows from "./Partials/rows";

{
  /* <Table rows={this.state.row5}/> */
}
const Table = ({ rows }) => {
  return (
    <table className="details-table__tableDetails">
      <tbody className="details-table__tableDetails__body">
        <Rows rows={rows} />
      </tbody>
    </table>
  );
};

export default Table;
