import React from "react";
const Dropdown = (props) => {
  const { dropdownHeader, dropdownListItems, isOpened } = props;
  return (
    <React.Fragment>
      <div class="reg-dropdown-container--reg4">
        <div class="drop-container">
          <div class="input input--m dropdown-head" type="text">
            <span class="dropdown-head__text">{dropdownHeader}</span>
            <i class="fas fa-chevron-circle-down dropdown-head__arrow"></i>
          </div>
          <div class={`dropdown ${isOpened && `dropdown-open`}`}>
            <ul class="dropdown__list">
              {dropdownListItems.map((item, index) => (
                <li class="dropdown__list__item">
                  <a class="dropdown__list__item__link">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dropdown;
