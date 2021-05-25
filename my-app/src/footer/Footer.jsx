import React from 'react';
import { faGithubSquare,faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


<i class="fab fa-facebook-square"></i>
function Footer(){
    return (
        <footer>
        <div className="footer-1440">
          <p>Hecho por Tomás Sánchez Soria</p>
          <a href="https://twitter.com/tomi_SS" target="_blank">
            <FontAwesomeIcon icon={faTwitterSquare} /> 
          </a>
          <a href="https://www.linkedin.com/in/sanchezsoria/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/tosaso/" target="_blank">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </div>
      </footer>
    )
}

export default Footer