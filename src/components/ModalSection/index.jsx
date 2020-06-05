import React  from "react";
const ModalInfoContainer = (props) => {
  const { isClicked, classModifier ,children} = props;
  return (
    <div className={`myModal${isClicked && "active-modal"}`} id="editInfo">
      <div className={`myModal__modalContent ${classModifier}`}>
      {children}
      </div>
    </div>
  );
};


export default ModalInfoContainer;
