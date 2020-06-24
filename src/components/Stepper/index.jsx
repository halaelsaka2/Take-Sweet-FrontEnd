import React from "react";

const Stepper = ({ steps, stepClassNames, pipeClassNames }) => {
  return (
    <div className="states-container">
      {steps.map((step, currentIndex) => (
        <React.Fragment key={step}>
          <div className={` circle circle--s ${stepClassNames[currentIndex]}`}>
            <span>{step}</span>
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
};

export default Stepper;
