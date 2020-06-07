import React from "./node_modules/react";
const ImageSection = ({ imgSrc }) => {
  return (
    <div className="productImageContainer">
      <img
        src="assets/images/productImg.jpeg"
        // src={imgSrc}
        className="productImageContainer__image"
      />
      <div className="productImageContainer__label">Product Image</div>
    </div>
  );
};

export default ImageSection;
