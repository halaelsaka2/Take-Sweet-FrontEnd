import React from "react";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";
import HomePageSection from "../../components/HomePageSection/HomePageSection";
import constents from "./constents";
import { container } from "reactstrap";

const Home = () => {
  return (
    <React.Fragment>
      {/* <Header check='t' /> */}
      <container>
        <HomePageSection
          AboutUsContext={constents.AboutUsContext}
          companies={constents.companies}
        />
      </container>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Home;
