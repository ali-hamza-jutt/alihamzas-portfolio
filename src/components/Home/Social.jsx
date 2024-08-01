import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/master_7811"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>

      <a
        href="https://www.linkedin.com/in/alihamza7811/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <a
        href="https://github.com/ali-hamza-jutt"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default Social;
