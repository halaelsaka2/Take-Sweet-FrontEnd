import React from "react";
const HistoryStates = props => {
  let { tabs, isActive, index, isPickDate } = props;
  return (
    <React.Fragment>
      <div className="history-tabs">
        {tabs.map((tab, currentIndex) => (
          <span
            Key={currentIndex}
            className={`tab-label ${index === currentIndex &&
              isActive &&
              "active-tab"}`}
          >
            {" "}
            {tab}
          </span>
        ))}
        {isPickDate && (
          <span className="pick-date">
            <i className="far fa-2x fa-calendar-alt"></i>
          </span>
        )}
      </div>
      <div className="tabs-line"></div>
    </React.Fragment>
  );
};

export default HistoryStates;
