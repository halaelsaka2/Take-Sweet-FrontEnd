import React from "react";
import { Link } from "react-router-dom";

const HistoryIcon = () => {
  return (
    <Link to="/track-order" className="history-tab">
      <span>Track Order</span>
      <i className="fa-2x fas fa-history"></i>
    </Link>
  );
};

export default HistoryIcon;
