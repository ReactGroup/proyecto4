import React from 'react';
import { faGithub } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGlobe,faBed, faDollarSign} from '@fortawesome/free-solid-svg-icons'


function Footer(){
    return (
        <footer>
        <div className="footer-1440">
          <p>Hecho por Tomás Sánchez Soria</p>
          <a href="https://twitter.com/tomi_SS" target="_blank">
            <img src="" alt="Twitter"/>
          </a>
          <a href="https://www.linkedin.com/in/sanchezsoria/" target="_blank">
            <img src="" alt="LinkedIn"/>
          </a>
          <a href="https://github.com/tosaso/" target="_blank">
            <FontAwesomeIcon icon={faGlobe}/>
          </a>
        </div>
      </footer>
    )
}

export default Footer