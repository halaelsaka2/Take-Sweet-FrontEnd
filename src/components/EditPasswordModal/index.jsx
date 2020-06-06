import React from "react";
import Input from "../Input";
import Button from "../Button";
const EditPasswordModal = ({ onChange ,value,onSave,onCancel}) => {
  return (
    <div class="myModal__modalContent__body">
      <div>
        <Input
          onChange={onChange}
          id="oldPassword"
          name="oldPassword"
          type="password"
          className="input input--s"
          placeholder=" Old password"
          value={value}
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
          value={value}
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
          value={value}
        />
      </div>
      <div class="lastContent__buttons">
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
};
export default EditPasswordModal;
