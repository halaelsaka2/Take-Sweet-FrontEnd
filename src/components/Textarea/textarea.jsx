import React from "react";

{
  /* <Textarea
          classname="inputReview reviewCard__reviews"
          columsNo="100"
          placeholder="your message"
        ></Textarea> */
}

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
