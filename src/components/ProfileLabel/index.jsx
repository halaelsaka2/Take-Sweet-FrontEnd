import React from "react";
const ProfileLabel = (props) => {
  const { className, content } = props;
  return <div className={className}>{content}</div>;
};

export default ProfileLabel;
