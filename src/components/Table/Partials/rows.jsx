import React from "react";
import Row from "./row";
const Rows = ({ rows, isDeletable }) => {
  // console.log(rows);
  return (
    <React.Fragment>
      <tr class="details-table__tableDetails__body__row">
        <th class="details-table__tableDetails__body__row__cell">Product</th>
        <th class="details-table__tableDetails__body__row__cell">Quantity</th>
        <th class="details-table__tableDetails__body__row__cell">
          Price Per Piece
        </th>
        <th class="details-table__tableDetails__body__row__cell">
          Total Price
        </th>
        {isDeletable && (
          <th class="details-table__tableDetails__body__row__cell"></th>
        )}
      </tr>

      {rows.map((item) => (
        <Row isDeletable={isDeletable} row={item} key={item} />
      ))}
    </React.Fragment>
  );
};

export default Rows;
