import React from "react";

{
  /* <Textarea
          classname="textarea (textarea--reviewCard or textarea--orderdetails)"
          placeholder="your message"
        ></Textarea> */
}

const Textarea = ({ classname, placeholder, onChange, name, value }) => {
  return (
    <textarea
      name={name}
      className={classname}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    ></textarea>
  );
};

export default Textarea;
