import React from "react";
import "./ScrollUp.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';   


const ScrollUp = () => {
  // show scroll
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    // when the scroll is higher then 560 view port high
    // it will add this class
    if (this.scrollY >= 560) {
      scrollUp.classList.add("show-scroll");
    }
    // else it will remove the class
    else {
      scrollUp.classList.remove("show-scroll");
    }
  });
  return (
    <a href="#home" className="scrollup">
      <FontAwesomeIcon icon={faArrowUp} color="white"  style={{ padding: '5px',fontSize:'22px' }}/>
    </a>
  );
};

export default ScrollUp;
