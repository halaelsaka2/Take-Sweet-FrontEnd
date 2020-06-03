import React, { Component } from "react";
class States extends Component {
  state = { circles: [], cirleClassNames: [], pipeClassNames: [] };
  componentDidMount() {
    let circles = [...this.state.circles];
    let cirleClassNames = [...this.state.cirleClassNames];
    let pipeClassNames = [...this.state.pipeClassNames];

    circles = this.props.circles;
    cirleClassNames = this.props.cirleClassNames;
    pipeClassNames = this.props.pipeClassNames;
    this.setState({ circles, cirleClassNames, pipeClassNames });
  }
  render() {
    let { circles, cirleClassNames, pipeClassNames } = this.state;
    return (
      <div className="states-container">
        {circles.map((circle, currentIndex) => (
          <React.Fragment>
            <div
              className={` circle circle--s ${cirleClassNames[currentIndex]}`}
            >
              <span>{circle}</span>
            </div>
            {currentIndex < pipeClassNames.length && (
              <div
                className={`pipe pipe--s ${pipeClassNames[currentIndex]}`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default States;

// const States = props => {
//   const {
//     classNameC1,
//     classNameC2,
//     classNameC3,
//     classNameP1,
//     classNameP2
//   } = props;
//   return (
//     <div className="states-container">
//       <div className={classNameC1}>
//         <span>1</span>
//       </div>
//       <div className={classNameP1}></div>
//       <div className={classNameC2}>
//         <span>2</span>
//       </div>
//       <div className={classNameP2}></div>
//       <div className={classNameC3}>
//         <span>3</span>
//       </div>
//     </div>
//   );
// };

// export default States;
