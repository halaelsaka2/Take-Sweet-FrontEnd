import React from "react";
const ImageCard = ({ className, imageUrl, children }) => {
  return (
    <div className={className} style={{ backgroundColor: `url(${imageUrl})` }}>
      {children}
    </div>
  );
};

export default ImageCard;
