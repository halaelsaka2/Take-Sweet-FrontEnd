import React from "react";
{
  /* <Footer /> */
}
const Footer = () => {
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

          <ul className="footerContainer__col__menu">
            <li className="footerContainer__col__menu__item">
              <i className="fas fa-map-marker-alt pad"></i>
              <span className="pad">Locations</span>
            </li>
            <li className="footerContainer__col__menu__item">
              <i className="fas fa-phone-alt pad"></i>
              <span className="pad">Call us 0999 5000</span>
            </li>
            <li className="footerContainer__col__menu__item">
              <i className="far fa-envelope pad"></i>
              <span className="pad">GoBetween@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="footerContainer__col">
          <h4 className="container__col__title">NEWS</h4>
          <ul className="container__col__menu grid">
            <li className="container__col__menu item">
              <img src="assets/images/1.jpeg" alt="img1" className="imgs" />
              <span>
                Breads <br />
                July 18,2020
              </span>
            </li>
            <li className="container__col__menu item">
              <img src="assets/images/2.jpeg" alt="img2" className="imgs" />
              <span>
                Bluerry pie <br />
                July 18,2020
              </span>
            </li>
            <li className="container__col__menu item">
              <img src="assets/images/3.jpeg" alt="img3" className="imgs" />
              <span>
                Apple pie <br />
                July 18,2020
              </span>
            </li>
            <li className="container__col__menu item">
              <img src="assets/images/4.jpeg" alt="img4" className="imgs" />
              <span>
                Pancake <br />
                July 18,2020
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__icons">
          <i className="fab fa-facebook-f footer__bottom__icons"></i>
          <i className="fab fa-twitter-square footer__bottom__icons"></i>
          <i className="fab fa-linkedin footer__bottom__icons"></i>
          <i className="fab fa-youtube"></i>
        </div>
        <div className="footer__bottom__text">
          All copyrights resreved Copyright&COPY; 2020
        </div>
      </div>
    </footer>
  );
};

export default Footer;
