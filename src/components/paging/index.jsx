import React from "react";

const Paging = props => {
  return (
    <div className="paging">
      <div className="paging__arrow">
        <i className="fas fa-angle-left"></i>
      </div>
      <div className="paging__number active">1</div>
      <div className="paging__number">2</div>
      <div className="paging__arrow">
        <i className="fas fa-angle-right"></i>
      </div>
    </div>
  );
};
export default Paging;
