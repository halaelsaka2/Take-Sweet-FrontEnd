import React from "react";
import { NewsItemList, UsefulLinks, Icons } from "./Partials";
{
  /* <Footer /> */
}
const Footer = () => {
  const newsList = [
    {
      id: "1",
      src: "assets/images/1.jpeg",
      alt: "img1",
      text: "Breads ",
      date: " June 18,2020",
    },
    {
      id: "2",
      src: "assets/images/2.jpeg",
      alt: "img2",
      text: "Bluerry pie",
      date: "July 18,2020",
    },
    {
      id: "3",
      src: "assets/images/3.jpeg",
      alt: "img3",
      text: "Apple pie",
      date: "Aug 18,2020",
    },
    {
      id: "4",
      src: "assets/images/4.jpeg",
      alt: "img4",
      text: "Pancake",
      date: "Oct 18,2020",
    },
  ];
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerContainer__col">
          <img
            className="footerContainer__col__logo"
            src="assets/images/GoBetween.png"
            alt="logo"
          />
          <p className="footerContainer__col__text">
            Here you can use rows and columns to organize your footer content
            here you can use rows and columns to organize your footer content.
          </p>
        </div>
        <div className="footerContainer__col">
          <h4 className="footerContainer__col__title">USEFUL LINKS</h4>
          <UsefulLinks />
        </div>
        <div className="footerContainer__col">
          <h4 className="container__col__title">NEWS</h4>
          <NewsItemList newsList={newsList} />
        </div>
      </div>
      <div className="footer__bottom">
        <Icons />
        <div className="footer__bottom__text">
          All copyrights resreved Copyright &copy; 2020
        </div>
      </div>
    </footer>
  );
};

export default Footer;
