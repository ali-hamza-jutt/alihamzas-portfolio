import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          {/* <div className="qualification__button qualification__active button--flex"> */}
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/* =============== Qualification Content Number 1 ============== */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active "
                : "qualification__content"
            }
          >
            {/* =============== Qualification 1 ============== */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  COMSATS University Islamabad,Lahore Campus
                </h3>
                <span className="qualification__subtitle">
                  Bachelor's of Computer Science
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>




            {/* =============== Qualification 2 ============== */}

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Full Stack  Development 2022 Bootcamp By Dr. Angelua Yu
                  {/* B K Birla Institute of Engineering & Technology */}
                </h3>
                <span className="qualification__subtitle">
                  Udemy
                  {/* computer science and engineering - Institute */}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2022 - 2023
                </div>
              </div>
            </div>

            {/* =============== Qualification 3 ============== */}

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Fazia Schools & Colleges
                </h3>
                <span className="qualification__subtitle">
                  Primary to Higher Secondary Education
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2007 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* =============== Qualification 4 For Future ============== */}
          </div>

          {/* =============== Experience Content Number 2 ============== */}

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >

            {/* =============== Qualification For Future ============== */}

            {/* =============== Qualification 6 ============== */}


            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Full Stack Web Developer
                </h3>
                <span className="qualification__subtitle">
                  Software Synergy Solutions and Club. · Full-time , Remote
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>  June 2024 - Present
                </div>
              </div>
            </div>


            {/* =============== Qualification 5 ============== */}

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Open Source Contributions, Gig work </h3>
                <span className="qualification__subtitle">Web App JavaScript Related Mostly </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


            {/* =============== Qualification 4 ============== */}



            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Full Stack Web Developer </h3>
                <span className="qualification__subtitle">Self Employe working on personnel projects</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2023 - Present
                </div>
              </div>
            </div>

            {/* =============== Qualification 3 ============== */}
            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Open Source Contributions, Gig work</h3>
                <span className="qualification__subtitle">Web App JavaScript Related Mostly </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div> */}

















          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
