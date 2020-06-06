import React from "react";
const ModalInfoContainer = ({ isClicked, classModifier, children }) => {
  return (
    <div className={`myModal${isClicked && "active-modal"}`} id="editInfo">
      <div className={`myModal__modalContent ${classModifier}`}>{children}</div>
    </div>
  );
};

export default ModalInfoContainer;
