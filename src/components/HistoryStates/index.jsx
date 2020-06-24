import React from "react";

const HistoryStates = ({ tabs, isPickDate, currentTabe, handleTabChange }) => (
  <React.Fragment>
    <div className="history-tabs">
      {tabs.map((tab, currentIndex) => (
        <span
          Key={currentIndex}
          onClick={() => handleTabChange(currentIndex)}
          className={
            currentIndex === currentTabe ? "tab-label active-tab" : "tab-label"
          }
        >
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

HistoryStates.defaultProps = {
  index: 0,
  isActive: true,
};
export default HistoryStates;
