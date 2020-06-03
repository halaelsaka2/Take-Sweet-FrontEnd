import React from "react";
const DescriptionSection = (props) => {
  const { titleClassName, textClassName, title, text } = props;
  return (
    <React.Fragment>
      <h2 className={titleClassName}>{title}</h2>
      <p className={textClassName}>{text}</p>
    </React.Fragment>
  );
};
export default DescriptionSection;
