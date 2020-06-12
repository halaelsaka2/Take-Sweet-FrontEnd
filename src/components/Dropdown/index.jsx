import React from "react";

const Dropdown = ({
  Header,
  listItems,
  isOpened,
  IsOpenHandle,
  selectionHandle,
  additionalStyle
}) => (
  <div className="drop-container">
    <div
      onClick={IsOpenHandle}
      className="input input--m dropdown-head"
      type="text"
    >
      <span className="dropdown-head__text">{Header}</span>
      <i className="fas fa-chevron-circle-down dropdown-head__arrow"></i>
    </div>
    <div
      className={`dropdown ${isOpened && `dropdown-open`} ${additionalStyle}`}
    >
      <ul className="dropdown__list">
        {listItems.map((item, index) => (
          <li
            onClick={selectionHandle}
            key={index}
            className="dropdown__list__item"
          >
            <a className="dropdown__list__item__link">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Dropdown;

Dropdown.defaultProps = {
  additionalStyle: ""
};
