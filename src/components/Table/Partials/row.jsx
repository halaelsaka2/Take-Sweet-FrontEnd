import React from "react";
import Cells from "./cells";
const Row = ({ row, isDeletable }) => (
  <React.Fragment>
    <tr className="details-table__tableDetails__body__row">
      <Cells data={row} />
      {isDeletable && (
        <td class="details-table__tableDetails__body__row__cell">
          <div>
            <i class="details-table__tableDetails__body__row__cell__delete fas fa-trash-alt"></i>
          </div>
        </td>
      )}
    </tr>
  </React.Fragment>
);

export default Row;
