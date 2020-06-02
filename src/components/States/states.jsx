import React from "react";

const States = props => {
  const {
    classNameC1,
    classNameC2,
    classNameC3,
    classNameP1,
    classNameP2
  } = props;
  return (
    <div className="states-container">
      <div className={classNameC1}>
        <span>1</span>
      </div>
      <div className={classNameP1}></div>
      <div className={classNameC2}>
        <span>2</span>
      </div>
      <div className={classNameP2}></div>
      <div className={classNameC3}>
        <span>3</span>
      </div>
    </div>
  );
};

export default States;
