import React from "./node_modules/react";
const ImageSection = ({ imgSrc }) => {
  return (
    <div class="productImageContainer">
      <img
        src="assets/images/productImg.jpeg"
        // src={imgSrc}
        class="productImageContainer__image"
      />
      <div class="productImageContainer__label">Product Image</div>
    </div>
  );
};

export default ImageSection;
