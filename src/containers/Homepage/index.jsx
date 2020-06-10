import React from "react";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import HomePageSection from "../../components/HomePageSection/HomePageSection";
import constents from "./constents";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <HomePageSection
        AboutUsContext={constents.AboutUsContext}
        companies={constents.companies}
      />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
