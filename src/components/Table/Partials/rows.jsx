import React from "react";
import Row from "./row";
const Rows = ({ rows }) => {
  console.log(rows);
  return rows.map((item) => <Row row={item} />);
};

export default Rows;
