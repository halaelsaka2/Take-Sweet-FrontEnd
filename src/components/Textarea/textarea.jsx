import React from "react";
const Textarea = (props) => {
  const { classname, columsNo, placeholder } = props;
  return (
    <textarea
      name="textarea"
      className={classname}
      cols={columsNo}
      rows="10"
      placeholder={placeholder}
    ></textarea>
  );
};

export default Textarea;
