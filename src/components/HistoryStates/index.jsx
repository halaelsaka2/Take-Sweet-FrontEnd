import React from "react";

/**SCHEMA
 *
  <HistoryStates
          tabs={["all", "waiting", "and so on"]}
          isActive={true} //optional theres is a default value
          index={1} //optional theres is a default value
          isPickDate={true}
        />

 */

const HistoryStates = props => {
  let { tabs, isActive, index, isPickDate } = props;
  return (
    <React.Fragment>
      <div className="history-tabs">
        {tabs.map((tab, currentIndex) => (
          <span
            key={currentIndex}
            className={`tab-label ${index === currentIndex &&
              isActive &&
              "active-tab"}`}
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
};

HistoryStates.defaultProps = {
  index: 0,
  isActive: true
};
export default HistoryStates;
