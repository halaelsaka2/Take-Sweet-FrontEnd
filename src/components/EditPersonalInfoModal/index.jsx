import React from "react";
import ImageCard from "../ImageCard";
import Input from "../Input";
import Button from "../Button";
const EditPersonalInfoModal = (props) => {
  const { isClicked, userName, email, discription, onChange } = props;
  return (
    <div className="infoContainer infoContainer--modal">
      <div className="infoContainer__content">
        <div className="infoContainer__content__left">
          <ImageCard
            className="infoContainer__content__left__image"
            imageUrl="./assets/images/user.jpg"
            isClicked={isClicked}
          >
            <i class="fas fa-pencil-alt Pencil"></i>
          </ImageCard>

          <div className="infoContainer__content__left__data">
            <div>
              <Input
                onChange={onChange}
                id="email"
                name="email"
                placeholder="Write Your Email"
                type="text"
                className="input input--s"
                value={email}
              />
            </div>
          </div>
        </div>
        <div className="infoContainer__content__right">
          <div className="infoContainer__content__right__header">
            <div className="infoContainer__content__right__header__name">
              <Input
                onChange={onChange}
                id="userName"
                name="userName"
                placeholder="Write Your Name"
                type="text"
                className="input input--s"
                value={userName}
              />
            </div>
          </div>
          <div className="infoContainer__content__right__discribtion">
            <textarea name="" id="" cols="80" rows="10">
              {discription}
            </textarea>
          </div>
        </div>
      </div>
      <div className="lastContent">
        <div className="lastContent__changepassword" id="changePassword">
          <a>Change Password</a>
        </div>
        <div className="lastContent__buttons">
          <Button className="button--rounded button--rounded--s" name="Save" />
          <Button
            className="button--rounded button--rounded--s button--rounded--danger"
            name="Cancel"
          />
        </div>
      </div>
    </div>
  );
};

export default EditPersonalInfoModal;
