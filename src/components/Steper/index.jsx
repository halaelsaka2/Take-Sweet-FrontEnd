import React from "react";

// SCHEMA
/**
 * 
     <Steper
          steps={[1, 2, 3]}
          stepClassNames={[
            "circle--finished",
            "circle--finished",
            "circle--finished"
          ]}
          pipeClassNames={["pipe--finished", "pipe--finished"]}

        />
 */

const Steper = props => {
  let { steps, stepClassNames, pipeClassNames } = props;
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

export default Steper;
