import React from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../../helpers/scrollToTop";
import Logo from "./../../assets/img/logo.png";
import "./style.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="page-up">
        <button onClick={() => scrollToTop()} id="scrollToTopButton">
          <span className="arrow_carrot-up"></span>
        </button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer__logo">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer__nav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/category/action">Categories</Link>
                </li>
                <li>
                  <Link to="/tredings">Tredings</Link>
                </li>
                <li>
                  <Link to="/toprated">Top Rated</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 footer__copyright__text">
            <p>
              &copy; Develop by: <a href="https://lucassenarj.github.io/" title="Lucas Sena" target="_blank" rel="noreferrer">Lucas Sena</a>
            </p>
            <p>Template by <a href="https://colorlib.com/" rel="noreferrer" title="Colorlib" target="_blank">Colorlib</a></p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
