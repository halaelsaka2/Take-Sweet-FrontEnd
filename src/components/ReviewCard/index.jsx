import React from "react";
import DescriptionSection from "./../DescriptionSection";
import Input from "../Input";
import Textarea from "./../Textarea";
import Button from "../Button";

{
  /* <ReviewCard /> */
}

const ReviewCard = () => {
  return (
    <div class="reviewCard">
      <DescriptionSection
        titleClassName="reviewCard__title"
        title="Reviews"
        textClassName="reviewCard__text"
        text=" It is easy to find it on the street. It is the most crowded place on the
        street, with long lines of people waiting to buy because their desserts
        deserve all waiting time.It is the most crowded place on the street,I
        totally recommend this bakery, their desserts are delicious."
      />
      <div className="reviewCard__inputContainer">
        <Input
          className="inputReview reviewCard__inputs"
          type="name"
          placeholder="Name"
        />
        <Input
          className="inputReview reviewCard__inputs"
          type="email "
          placeholder="Email"
        />
      </div>
      <Textarea
        classname="textarea textarea--reviewCard"
        placeholder="your message"
      />
      <Button
        name="submit"
        className="button--rounded button--rounded--s button--rounded--shadow inputReview"
      />
    </div>
  );
};

export default ReviewCard;
