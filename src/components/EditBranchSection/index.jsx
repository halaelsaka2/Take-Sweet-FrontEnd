import React from "react";
import ModalSection from "../ModalSection";
import EditBranchModal from "../EditBranchModal";
const EditBranchSection = ({
  isOpen,
  branchData,
  addressType,
  addressPlaceholder,
  addressId,
  addressName,
  phoneType,
  phonePlaceholder,
  phoneName,
  phoneId,
  dropdownIsOpenHandle,
  selectCityHandle,
  dropdownIsOpen,
  cancelModalButtonHandle,
  saveModalButtonHandle,
  onChange
}) => (
  <ModalSection
    classModifier="myModal__modalContent--password"
    isClicked={isOpen}
  >
    <EditBranchModal
      branchData={branchData}
      addressType={addressType}
      addressPlaceholder={addressPlaceholder}
      addressId={addressId}
      addressName={addressName}
      phoneType={phoneType}
      phonePlaceholder={phonePlaceholder}
      phoneName={phoneName}
      phoneId={phoneId}
      dropdownIsOpenHandle={dropdownIsOpenHandle}
      selectCityHandle={selectCityHandle}
      dropdownIsOpen={dropdownIsOpen}
      cancelModalButtonHandle={cancelModalButtonHandle}
      saveModalButtonHandle={saveModalButtonHandle}
      onChange={onChange}
    />
  </ModalSection>
);

export default EditBranchSection;
