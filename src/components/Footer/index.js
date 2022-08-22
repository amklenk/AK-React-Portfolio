import React from 'react';
// would eventually like to map over to render
import emailIcon from '../../assets/icons/email-icon.png';
import gitHub from '../../assets/icons/github-logo.png';
import linkedIn from '../../assets/icons/linkedin-logo.png';
import freeCode from '../../assets/icons/fCC-icon.png';


function Footer(){
    return(
        <footer className='contact-links' id='footer'>
            <a id="Gmail-link" href="mailto: amandamklenk3@gmail.com" target="_blank" rel="noopener noreferrer" className="btn contact-details">
                <img id="Gmail-icon" src={emailIcon} alt="Gmail icon"/>
            </a>
            <a id="LinkedIn-link" href="https://www.linkedin.com/in/amanda-klenk/" target="_blank" rel="noopener noreferrer" className="btn contact-details">
                <img id="LinkedIn-icon" src={linkedIn} alt="LinkedIn icon"/>
            </a>
            <a id="GitHub-link" href="https://github.com/amklenk" target="_blank" rel="noopener noreferrer" className="btn contact-details">
                <img id="GitHub-icon" src={gitHub} alt="GitHub logo"/>
            </a>
            <a id="FCC-link" href="https://www.freecodecamp.org/mklenk3" target="_blank" rel="noopener noreferrer" className="btn contact-details">
                <img id="FCC-icon" src={freeCode} alt="freeCodeCamp icon"/>
            </a>
           <h4 className="footer-name">AMANDA KLENK</h4>
                &copy; 2022
        </footer>
    )
}

export default Footer;