import React, { Component } from "react";
class HistoryStates extends Component {
  state = { isActive: Boolean, isPickDate: Boolean, tabs: [], index: 0 };
  componentDidMount() {
    let { isActive, index, isPickDate } = this.state;
    let tabs = [...this.state.tabs];

    isActive = this.props.isActive;
    tabs = this.props.tabs;
    index = this.props.index;
    isPickDate = this.props.isPickDate;

    this.setState({ isActive, tabs, index, isPickDate });
  }
  render() {
    let { tabs, isActive, index, isPickDate } = this.state;
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
  }
}

export default HistoryStates;
