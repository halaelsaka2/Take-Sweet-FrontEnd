import React from "react";

{
  /* 
        <DescriptionSection
          titleClassName="about-us__about-us-container__right-contant-container__right-header"
          title="our companies"
          textClassName="about-us__about-us-container__right-contant-container__right-body"
          text=" It is easy to find it on the street."
        /> */
}
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
