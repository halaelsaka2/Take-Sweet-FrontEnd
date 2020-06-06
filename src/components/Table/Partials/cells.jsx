import React from "react";

const Cells = ({ data }) => {
  return data.map((item) => (
    <td className="details-table__tableDetails__body__row__cell " key={item}>
      {item}
    </td>
  ));
};

export default Cells;
