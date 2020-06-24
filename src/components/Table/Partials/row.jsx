import React from "react";
import Cells from "./cells";
const Row = ({ row, isDeletable }) => (
  <tr className="details-table__tableDetails__body__row">
    <Cells data={row} />
    {isDeletable && (
      <td className="details-table__tableDetails__body__row__cell">
        <div>
          <i className="details-table__tableDetails__body__row__cell__delete fas fa-trash-alt"></i>
        </div>
      </td>
    )}
  </tr>
);

export default Row;
