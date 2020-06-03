import React, { Component } from "react";
class HistoryStates extends Component {
  state = { isActive: Boolean, tabs: [], index: 0 };
  componentDidMount() {
    let { isActive, index } = this.state;
    let tabs = [...this.state.tabs];

    isActive = this.props.isActive;
    tabs = this.props.tabs;
    index = this.props.index;
    this.setState({ isActive, tabs, index });
  }
  render() {
    let { tabs, isActive, index } = this.state;
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

          <span className="pick-date">
            <i className="far fa-2x fa-calendar-alt"></i>
          </span>
        </div>
        <div className="tabs-line"></div>
      </React.Fragment>
    );
  }
}

export default HistoryStates;
