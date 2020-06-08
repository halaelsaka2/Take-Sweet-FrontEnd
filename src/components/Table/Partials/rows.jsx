import React from "react";
import Row from "./row";
const Rows = ({ rows }) => rows.map((item) => <Row row={item} key={item} />);

export default Rows;
