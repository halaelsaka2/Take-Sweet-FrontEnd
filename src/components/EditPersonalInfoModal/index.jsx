import React from "react";
import PropTypes from "prop-types";
import ImageCard from "../ImageCard";
import Input from "../Input";
import Button from "../Button";
import Textarea from "../Textarea";
const EditPersonalInfoModal = ({
  isClicked,
  userName,
  email,
  discription,
  onSave,
  onCancel,
  onChange,
  imageUrl,
}) => (
  <div className="infoContainer infoContainer--modal">
    <div className="infoContainer__content">
      <div className="infoContainer__content__left">
        <ImageCard
          className="infoContainer__content__left__image"
          imageUrl={imageUrl}
          isClicked={isClicked}
        >
          <i className="fas fa-pencil-alt Pencil"></i>
        </ImageCard>

        <div className="infoContainer__content__left__data">
          <div>
            <Input
              className="input input--s"
              id="email"
              name="email"
              placeholder="Write Your Email"
              type="text"
              onChange={onChange}
              value={email}
            />
          </div>
        </div>
      </div>
      <div className="infoContainer__content__right">
        <div className="infoContainer__content__right__header">
          <div className="infoContainer__content__right__header__name">
            <Input
              className="input input--s"
              id="userName"
              name="userName"
              placeholder="Write Your Name"
              type="text"
              onChange={onChange}
              value={userName}
            />
          </div>
        </div>
        <div className="infoContainer__content__right__discribtion">
          <Textarea
            className="textarea"
            name="discription"
            onChange={onChange}
            value={discription}
          />
        </div>
      </div>
    </div>
    <div className="lastContent">
      <div className="lastContent__changepassword" id="changePassword">
        <a>Change Password</a>
      </div>
      <div className="lastContent__buttons">
        <Button
          className="button--rounded button--rounded--s"
          name="Save"
          onClick={onSave}
        />
        <Button
          className="button--rounded button--rounded--s button--rounded--danger"
          name="Cancel"
          onClick={onCancel}
        />
      </div>
    </div>
  </div>
);
EditPersonalInfoModal.defaultProps = {
  isClicked: false,
};

EditPersonalInfoModal.propTypes = {
  userName: PropTypes.string,
  email: PropTypes.string,
  discription: PropTypes.string,
  onChange: PropTypes.func,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
  isClicked: PropTypes.bool,
  imageUrl: PropTypes.string,
};
export default EditPersonalInfoModal;
