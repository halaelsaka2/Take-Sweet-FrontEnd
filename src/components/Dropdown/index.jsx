import React from "react";
import { sortBy } from "lodash";

const Dropdown = ({
  Header,
  listItems,
  isOpened,
  IsOpenHandle,
  selectionHandle,
  additionalStyle,
  idList,
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
        {listItems.map((item, index) => {
          // console.log(idList[index]);
          return (
            <li
              onClick={(event) => selectionHandle(event, idList[index])}
              key={index}
              className="dropdown__list__item"
              value={`${index}`}
            >
              <a className="dropdown__list__item__link">{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);

export default Dropdown;

Dropdown.defaultProps = {
  additionalStyle: "",
};
