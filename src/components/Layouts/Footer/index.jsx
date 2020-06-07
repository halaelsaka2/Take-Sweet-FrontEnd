import React from "react";
import {
  NewsItemList,
  UsefulLinks,
  Icons,
  Copyright,
  BriefSummary,
  newsList,
  icons,
  usefulLinks,
} from "./Partials";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerContainer__col">
          <BriefSummary />
        </div>
        <div className="footerContainer__col">
          <UsefulLinks usefulLinks={usefulLinks} />
        </div>
        <div className="footerContainer__col">
          <NewsItemList newsList={newsList} />
        </div>
      </div>
      <div className="footer__bottom">
        <Icons icons={icons} />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
