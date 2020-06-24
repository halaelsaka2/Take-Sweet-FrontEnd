import React from "react";
const ImageSection = ({ imgSrc, imagehandling }) => {
  return (
    <div className="productImageContainer">
      <img
        src={imgSrc}
        className="productImageContainer__image"
        alt=""
      />
      <input type="file" onChange={imagehandling}></input>
      <div className="productImageContainer__label">Product Image</div>
    </div>
  );
};

export default ImageSection;
