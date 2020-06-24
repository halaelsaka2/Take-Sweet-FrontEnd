import React from "react";

const Cells = ({ data }) => (
  <React.Fragment>
    <td className="details-table__tableDetails__body__row__cell ">
      {data.name}
    </td>
    <td className="details-table__tableDetails__body__row__cell ">
      {data.amount}
    </td>
    <td className="details-table__tableDetails__body__row__cell ">
      {data.price}
    </td>
    <td className="details-table__tableDetails__body__row__cell ">
      {data.totalPrice}
    </td>
  </React.Fragment>
);

export default Cells;
