import React from "react";
import Dropdown from "../Dropdown";
import Input from "../Input";
import Button from "../Button";
const EditBranchModal = ({
  cityValue,
  dropdownIsOpen,
  dropdownIsOpenHandle,
  selectCityHandle,
  addressType,
  addressPlaceholder,
  addressValue,
  phoneType,
  phonePlaceholder,
  phoneValue,
  onChange,
  saveHandle,
  cancelhandle
}) => (
  <div className="branches-div branches-div--no-border">
    <div className="reg-dropdown-container reg-dropdown-container--edit-branch">
      <Dropdown
        additionalStyle={"dropdown--br1"}
        // Header={cityValue}
        ListItems={["Cairo", "Alexandria", "Ismailia", "Portsaid", "Suez"]}
        // isOpened={dropdownIsOpen}
        // IsOpenHandle={dropdownIsOpenHandle}
        // selectionHandle={selectCityHandle}
      />
    </div>
    <div id="location">
      <Input
        className="input input--s"
        // type={addressType}
        // placeholder={addressPlaceholder}
        name="address"
        id="address"
        // value={addressValue}
        // onChange={onChange}
      />

      <Input
        className="input input--s "
        // type={phoneType}
        // placeholder={phonePlaceholder}
        name="phone"
        id="phone"
        // value={phoneValue}
        // onChange={onChange}
      />
      <div className="add-branch">
        <div className="lastContent__buttons">
          <Button
            className="button--rounded button--rounded--s button--rounded--sm "
            name="Save"
            id="save"
            // onClick={saveHandle}
          />
          <Button
            className="button--rounded button--rounded--s button--rounded--sm button--rounded--danger"
            name="Cancel"
            id="cancel"
            // onClick={cancelhandle}
          />
        </div>
      </div>
    </div>
  </div>
);

export default EditBranchModal;
