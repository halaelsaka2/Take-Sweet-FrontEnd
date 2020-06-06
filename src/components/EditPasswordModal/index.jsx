import React from "react";
import Input from "../Input";
import Button from "../Button";
const EditPasswordModal = ({ onChange }) => {
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
        />
      </div>
      <div class="lastContent__buttons">
        <Button
          className="button--rounded button--rounded--s"
          name="Save"
          id="savePassword"
        />
        <Button
          className="button--rounded button--rounded--s button--rounded--danger"
          name="Cancel"
          id="closepassword"
        />
      </div>
    </div>
  );
};

export default EditPasswordModal;
