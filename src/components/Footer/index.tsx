import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/img/logo.png";
import "./style.scss";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="page-up">
        <a href="/" id="scrollToTopButton">
          <span className="arrow_carrot-up"></span>
        </a>
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
          <div className="col-lg-3">
            <p>
              Copyright &copy;
              { year }
              All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="/" target="_blank">Colorlib</a>
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
