import React, { Component } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

class TextSlider extends Component {
  state = {
    content: [
      {
        title: "Our Services Starts Here",
        description:
          "GoBetween an intermediator connects between food brands and small cafes that want to buy big quantities of sweets and baked goods everyday and delivering  those orders to the cafes by the delivery service from the brands shops both cafes and brands shops can track the order also the cafe can cancel an order and reorder the an order that is stored in his history.",
      },
      {
        title: "Your Time Mean Alot",
        description:
          "Having unorganized systems can waste a lot of your time, especially in the field of buying and selling, so our services allow you to know your needs and reach them in the easiest possible way.",
      },
      {
        title: "Your Privacy Is Our Priority",
        description: "We update you with our privacy terms all the time.",
      },
    ],
  };
  render() {
    const { content } = this.state;
    return (
      <div
        className="text-slider-container"
        style={{
          backgroundImage: "url('assets/images/header.jpg')",
        }}
      >
        <Slider autoplay={3000}>
          {content.map((item, index) => (
            <div key={index}>
              <div className="center text-slider-content">
                <p className="slider-text">{item.title}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default TextSlider;
