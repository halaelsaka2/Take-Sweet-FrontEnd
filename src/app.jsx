import React, { Component } from "react";

import Login from "./container/LoginPage/login";

import ProductCardModal from "./container/ProductCardModalPage/ProductCardModal";
import RegisterGeneralInfo from "./container/RegisterPage/registerGeneralInfo";
import Footer from "./components/layouts/footer";
import Header from "./components/layouts/header";
import Textarea from "./components/Textarea/textarea";
import RegisterAcceptanceInfo from "./container/RegisterPage/registerAcceptanceInfo";
import DescriptionSection from "./components/DescriptionScetion/descriptionSection";
import ReviewCard from "./components/ReviewCard/reviewCard";
import ProductItem from "../src/components/ProductItem";
import Slideshow from "../src/components/SlideShow";

import HistoryStates from "./components/HistoryStates";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Login /> */}
        {/* <ProductCardModal /> */}
        {/* <RegisterAcceptanceInfo /> */}
        {/* <RegisterGeneralInfo /> */}
        {/* <Header check="t" /> */}
        {/* <br /> <br /> <br /> */}
        {/* <Textarea
          classname="inputReview reviewCard__reviews"
          columsNo="100"
          placeholder="your message"
        ></Textarea> */}
        {/* <Footer /> */}

        {/* 
        <DescriptionSection
          titleClassName="about-us__about-us-container__right-contant-container__right-header"
          title="our companies"
          textClassName="about-us__about-us-container__right-contant-container__right-body"
          text=" It is easy to find it on the street. It is the most crowded place on the
        street, with long lines of people waiting to buy because their desserts
        deserve all waiting time.It is the most crowded place on the street,I
        totally recommend this bakery, their desserts are delicious."
        /> */}
        <ReviewCard />
        {/* history tab component */}
        {/* <HistoryStates tabs={["all", "waiting"]} isActive={true} index={1} /> */}
        <Slideshow></Slideshow>
      </React.Fragment>
    );
  }
}

export default App;
