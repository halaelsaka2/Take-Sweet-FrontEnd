import React from "react";
import PropTypes from "prop-types";

const ImageCard = ({ className, imageUrl, children }) => (
  <div className={className} style={{ backgroundImage: `url(${imageUrl})` }}>
    {children}
  </div>
);

ImageCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  imageUrl: PropTypes.string,
};
export default ImageCard;
