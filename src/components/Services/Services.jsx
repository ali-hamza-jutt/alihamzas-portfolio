import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faArrowRight, faCheckCircle, faTimes,faLayerGroup,faServer } from "@fortawesome/free-solid-svg-icons";
import "./Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        {/* first service content */}
        <div className="services__content">
          <div>
            <FontAwesomeIcon icon={faCode} className="services__icon" />
            <h3 className="services__title">
              FrontEnd <br /> Development
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <FontAwesomeIcon icon={faArrowRight} className="services__button-icon" />
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <FontAwesomeIcon icon={faTimes} className="services__modal-close" onClick={() => toggleTab(0)} />
              <h3 className="services__modal-title">FrontEnd Developer</h3>
              <p className="services__modal-description">
              Frontend development creates visually engaging, responsive user interfaces with HTML, CSS, and JavaScript, ensuring seamless interaction and aesthetic appeal across all devices while aligning with the brand's identity.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCheckCircle} className="services__modal-icon" />
                  <p className="services__modal-info">Creating visually appealing and user-friendly interfaces.</p>
                </li>
                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCheckCircle} className="services__modal-icon" />
                  <p className="services__modal-info">Ensuring websites work well on various devices like desktops, tablets, and mobiles.</p>
                </li>
                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCheckCircle} className="services__modal-icon" />
                  <p className="services__modal-info">SPAs Developing dynamic web applications using frameworks like React, Angular, or Vue.js.</p>
                </li>
                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCheckCircle} className="services__modal-icon" />
                  <p className="services__modal-info">Ensuring websites function correctly across different web browsers.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* second service content */}
        <div className="services__content">
          <div>
            <FontAwesomeIcon icon={faServer} className="services__icon" />
            <h3 className="services__title">
              Backend <br /> Development
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <FontAwesomeIcon icon={faArrowRight} className="services__button-icon" />
          </span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <FontAwesomeIcon icon={faTimes} className="services__modal-close" onClick={() => toggleTab(0)} />
              <h3 className="services__modal-title">BackEnd Developer</h3>
              <p className="services__modal-description">
              Backend development involves creating server-side logic, APIs, and databases with Python, Java, and Node.js, ensuring performance, security, and scalability for efficient data handling and frontend integration.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCheckCircle} className="services__modal-icon" />
                  <p className="services__modal-info">Creating and managing RESTful or GraphQL APIs for communication between frontend and backend.</p>
                </li>
                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCheckCircle} className="services__modal-icon" />
                  <p className="services__modal-info">Designing database schemas, optimizing queries, and managing databases (SQL and NoSQL).</p>
                </li>
                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCheckCircle} className="services__modal-icon" />
                  <p className="services__modal-info">Writing server-side code to handle business logic and interactions with the database.</p>
                </li>
                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCheckCircle} className="services__modal-icon" />
                  <p className="services__modal-info">Implementing secure user authentication and role-based access control.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* third service content */}
        <div className="services__content">
          <div>
            <FontAwesomeIcon icon={faLayerGroup} className="services__icon" />
            <h3 className="services__title">
              Full Stack <br /> Development
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <FontAwesomeIcon icon={faArrowRight} className="services__button-icon" />
          </span>

          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <FontAwesomeIcon icon={faTimes} className="services__modal-close" onClick={() => toggleTab(0)} />
              <h3 className="services__modal-title">Full Stack Developer</h3>
              <p className="services__modal-description">
              Full stack development merges frontend and backend skills to build complete web solutions, designing user interfaces and server-side logic for seamless interaction and meeting user and business needs.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCheckCircle} className="services__modal-icon" />
                  <p className="services__modal-info">Building full web applications from the ground up, including both frontend and backend.</p>
                </li>
                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCheckCircle} className="services__modal-icon" />
                  <p className="services__modal-info">Managing deployment pipelines, continuous integration/continuous deployment (CI/CD), and cloud infrastructure.</p>
                </li>
                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCheckCircle} className="services__modal-icon" />
                  <p className="services__modal-info">Using Git for source code management and collaboration.</p>
                </li>
                <li className="services__modal-service">
                  <FontAwesomeIcon icon={faCheckCircle} className="services__modal-icon" />
                  <p className="services__modal-info">Writing unit tests, integration tests, and performing thorough debugging to ensure code quality.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
