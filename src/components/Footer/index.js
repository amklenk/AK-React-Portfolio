import React from 'react';

function Footer(){
    return(
        <footer>
            <a id="Gmail-link" href="mailto: amandamklenk3@gmail.com" target="_blank" rel="noopener noreferrer" class="btn contact-details">
                <img class="Gmail-icon" src="./assets/images/icons/email-icon.png" alt="Gmail icon"/>
            </a>
            <a id="LinkedIn-link" href="https://www.linkedin.com/in/amanda-klenk/" target="_blank" rel="noopener noreferrer" class="btn contact-details">
                <img class="LinkedIn-icon" src="./assets/images/icons/linkedin-logo.png" alt="LinkedIn icon"/>
            </a>
            <a id="GitHub-link" href="https://github.com/amklenk" target="_blank" rel="noopener noreferrer" class="btn contact-details">
                <img class="GitHub-icon" src="./assets/images/icons/github-logo.png" alt="GitHub logo"/>
            </a>
            <a id="FCC-link" href="https://www.freecodecamp.org/mklenk3" target="_blank" rel="noopener noreferrer" class="btn contact-details">
                <img class="FCC-icon" src="./assets/images/icons/fCC-icon.png" alt="freeCodeCamp icon"/>
            </a>
           <h4 class="footer-name">AMANDA KLENK</h4>
                &copy; 2022
        </footer>
    )
}

export default Footer;