import React from "react";
const States =props=>  {
    let { circles, cirleClassNames, pipeClassNames } = props;
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


export default States;
