import React from "react";
import Logo from "./../../assets/img/logo.png";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="header__logo">
              <a href="/">
                <img src={Logo} alt="Logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="header__nav">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li><a href="./categories.html">Categories</a></li>
                  <li><a href="./blog.html">Our Blog</a></li>
                  <li><a href="/">Contacts</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="header__right">
              <a href="/" className="search-switch">
                <span className="icon_search"></span>
              </a>
              <a href="./login.html">
                <span className="icon_profile"></span>
              </a>
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
    </header>
  );
};

export default Header;