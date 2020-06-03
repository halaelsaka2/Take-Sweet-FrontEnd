import React, { Component } from "react";

import Login from "./container/LoginPage/login";

import ProductCardModal from "./container/ProductCardModalPage/ProductCardModal";
import RegisterGeneralInfo from "./container/RegisterPage/registerGeneralInfo";
import Footer from "./components/layouts/footer";
import Header from "./components/layouts/header";
import Textarea from "./components/Textarea/textarea";
import RegisterAcceptanceInfo from "./container/RegisterPage/registerAcceptanceInfo";
import ProductCard from "./components/productCard/productCard";

import ReviewCard from "./components/ReviewCard/reviewCard";
import ProductItem from "../src/components/ProductItem";
import Slideshow from "../src/components/SlideShow";

import HistoryStates from "./components/HistoryStates";
import Search from "./components/Search";

import States from "./components/States";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Search />
        {/* <Login /> */}
        {/* <ProductCardModal /> */}
        {/* <ProductCard cardType="historyCard" className="product-card--large" /> */}
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
        {/* <ReviewCard /> */}
        {/* history tab component */}
        {/* <HistoryStates tabs={["all", "waiting"]} isActive={true} index={1} /> */}
        {/* <Slideshow></Slideshow> */}

        <States
          circles={[1, 2, 3]}
          cirleClassNames={[
            "circle--finished",
            "circle--finished",
            "circle--finished"
          ]}
          pipeClassNames={["pipe--finished", "pipe--finished"]}
        />
      </React.Fragment>
    );
  }
}

export default App;
