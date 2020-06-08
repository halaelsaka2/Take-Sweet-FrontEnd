import React from "react";
import PropTypes from "prop-types";
import Input from "../Input";
import Button from "../Button";

const EditPasswordModal = ({
  onChange,
  oldPasswordValue,
  newPasswordValue,
  confirmPasswordValue,
  onSave,
  onCancel,
}) => (
  <div className="myModal__modalContent__body">
    <div>
      <Input
        onChange={onChange}
        id="oldPassword"
        name="oldPassword"
        type="password"
        className="input input--s"
        placeholder=" Old password"
        value={oldPasswordValue}
      />
    </div>
    <div>
      <Input
        onChange={onChange}
        id="newPassword"
        name="newPassword"
        type="password"
        className="input input--s"
        placeholder="New password"
        value={newPasswordValue}
      />
    </div>
    <div>
      <Input
        onChange={onChange}
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        className="input input--s"
        placeholder="Confirm password"
        value={confirmPasswordValue}
      />
    </div>
    <div className="lastContent__buttons">
      <Button
        className="button--rounded button--rounded--s"
        name="Save"
        id="savePassword"
        onClick={onSave}
      />
      <Button
        className="button--rounded button--rounded--s button--rounded--danger"
        name="Cancel"
        id="closepassword"
        onClick={onCancel}
      />
    </div>
  </div>
);

EditPasswordModal.propTypes = {
  oldPasswordValue: PropTypes.string,
  newPasswordValue: PropTypes.string,
  confirmPasswordValue: PropTypes.string,
  onChange: PropTypes.func,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
};
export default EditPasswordModal;
