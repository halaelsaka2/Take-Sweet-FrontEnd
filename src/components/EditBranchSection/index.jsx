import React from "react";
import ModalSection from "../ModalSection";
import EditBranchModal from "../EditBranchModal";
const EditBranchSection = props => (
  <ModalSection classModifier="myModal__modalContent--password">
    <EditBranchModal />
  </ModalSection>
);

export default EditBranchSection;
