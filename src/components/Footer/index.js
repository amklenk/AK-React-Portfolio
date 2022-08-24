import React from 'react';

function Footer(){
    const icons = [
        {
            name: 'Gmail-icon',
            src: require('../../assets/icons/email-icon.png'),
            href: 'mailto: amandamklenk3@gmail.com',
            alt: 'Gmail icon'
        },
        {
            name: 'LinkedIn-icon',
            src: require('../../assets/icons/linkedin-icon.png'),
            href: 'https://www.linkedin.com/in/amanda-klenk/',
            alt: 'LinkedIn icon'
        },
        {
            name: 'GitHub-icon',
            src: require('../../assets/icons/github-icon.png'),
            href: 'https://github.com/amklenk',
            alt: 'GitHub icon'
        },
        {
            name: 'FCC-icon',
            src: require('../../assets/icons/fCC-icon.png'),
            href: 'https://www.freecodecamp.org/amklenk3',
            alt: 'freeCodeCamp icon'
        }
    ]
    return(
        <footer className='contact-links d-flex flex-column align-items-center' id='footer'>
            <div>
            {icons.map((icon) => (
               <a href={icon.href} target="_blank" rel="noopener noreferrer" className="btn contact-details">
                <img id={icon.name} src={icon.src} alt={icon.alt}/>
            </a> 
            ))}
            </div>
            <div className='mb-3 text-center'>
                <h5 className="footer-name row">AMANDA KLENK</h5>
                &copy; 2022
            </div>
        </footer>
    )
}

export default Footer;