import React from "react";

{
  /* <Textarea
          classname="textarea (textarea--reviewCard or textarea--orderdetails)"
          placeholder="your message"
        ></Textarea> */
}

const Textarea = ({ classname, placeholder }) => {
  return (
    <textarea
      name="textarea"
      className={classname}
      placeholder={placeholder}
    ></textarea>
  );
};

export default Textarea;
