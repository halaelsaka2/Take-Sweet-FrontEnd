import React from "react";

const Cells = ({ data }) => {
  console.log(data);
  return data.map((item) => (
    <td className="details-table__tableDetails__body__row__cell ">{item}</td>
  ));
};

export default Cells;
