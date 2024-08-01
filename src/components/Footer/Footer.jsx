import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="footer">
    <div className="div footer__container container">
      <h1 className="footer__title">Ali</h1>

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

        <li>
          <a href="#testimonials" className="footer__link">
            Testimonials
          </a>
        </li>
      </ul>

      <div className="footer__social">
        <a
          href="https://github.com/ali-hamza-jutt/"
          className="footer__social-link"
          target={"blank"}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href="https://www.linkedin.com/in/alihamza7811/"
          className="footer__social-link"
          target={"blank"}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          href="https://www.instagram.com/master_7811"
          className="footer__social-link"
          target={"_blank"}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>

      <span className="footer__copy">
        &#169; Ali Hamza. All rigths reserved
      </span>
    </div>
  </footer>
);

export default Footer;
