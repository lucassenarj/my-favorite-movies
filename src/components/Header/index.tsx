import React from "react";
import Logo from "./../../assets/img/logo.png";
import { Link, useLocation } from "react-router-dom";
import genresList from "../../helpers/genresList";
import "./style.scss";
import generateUrlFriendly from "../../helpers/generateUrlFriendly";

function Header() {
  const location = useLocation();

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
                  <li className={`${location.pathname === '/' ? 'active' : ''}`}>
                    <Link to="/">Home</Link>
                  </li>
                  <li className={`${location.pathname.includes('/category/') ? 'active' : ''}`}>
                    <Link to="/category/action">Categories <span className="arrow_carrot-down"></span></Link>
                    <ul className="dropdown">
                      {
                        genresList.map((genre) => (
                          <li key={genre.id}>
                            <Link to={`/category/${generateUrlFriendly(genre.name)}`}>{genre.name}</Link>
                          </li>
                        ))
                      }
                    </ul>
                  </li>
                  <li className={`${location.pathname === '/tredings' ? 'active' : ''}`}>
                    <Link to="/tredings">Tredings</Link>
                  </li>
                  <li className={`${location.pathname === '/toprated' ? 'active' : ''}`}>
                    <Link to="/toprated">Top Rated</Link>
                  </li>
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