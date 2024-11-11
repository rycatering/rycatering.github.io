import React from "react";
import cm from "classnames";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a className="main-avalon-logo" href="index.html"> </a>
        </h1>
        <a href="index.html" className="logo me-auto" />
        {/* <img src="assets/img/logo.png" alt="" className="img-fluid" /> */}

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a
                className={cm("nav-link scrollto", {})}
                href="#hero"
              >
                {t('navLink.home')}
              </a>
            </li>
            <li>
              <a
                className={cm("nav-link scrollto", {})}
                href="#gallery"
              >
               {t('navLink.gallery')}
              </a>
            </li>
            <li>
              <a
                className={cm("nav-link scrollto", {})}
                href="#services"
              >
                 {t('navLink.products')}
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                {t('navLink.contact')}
              </a>
            </li>
            {/* <li>
              <a className="nav-link scrollto" href="#doctors">
                Doctors
              </a>
            </li> */}
            {/* <li className="dropdown">
              <a href="#">
                <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{" "}
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li> */}
            {/* <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li> */}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        {/* <a href="#appointment" className="appointment-btn scrollto">
          <span className="d-none d-md-inline">Make an</span>
          Appointment
        </a> */}
      </div>
    </header>
  );
};

export default Header;
