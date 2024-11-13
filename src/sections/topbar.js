import React from "react";

const TopBar = () => {
  return (
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-between">
        <div className="contact-info d-flex align-items-center">
          <a href="mailto:info@rozeyammycatering.com">
            <i className="bi bi-envelope" />
            <span>info@rozeyammycatering.com</span>
          </a>

          <a href="tel: +1747 3062744" style={{ marginLeft: "20px" }}>
            <i className="bi bi-phone" />
            <span>+1 (747) 306-2744</span>
          </a>
        </div>
        <div className="d-none d-lg-flex social-links align-items-center">
          <a href="https://www.facebook.com/rozeyammycatering" className="twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://www.facebook.com/rozeyammycatering" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.facebook.com/rozeyammycatering" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.facebook.com/rozeyammycatering" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
