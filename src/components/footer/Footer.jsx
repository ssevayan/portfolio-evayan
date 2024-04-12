import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Eva</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

        </ul>

        <div className="footer__social">
        <a
          href="https://www.linkedin.com/in/yushan-yan-93b441230/"
          className="footer__social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin"></i>
        </a>

        <a
          href="https://github.com/ssevayan"
          className="footer__social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>

        </div>

        <span className="footer__copy">
          &#169; EvaYan. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
