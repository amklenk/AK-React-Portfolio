import React from 'react';
import Logo from '../../assets/AKLogo.png'

const headerStyles = {
    textDecoration: "none",
    color: "white"
}

function Header ({ currentPage, handlePageChange }){
return(
<header id="header" className='d-flex align-items-center'>
    <img src={Logo} alt='AK Logo' style={{ width: '70px'}}/>
    <nav className="nav-links">
        <ul id="nav-ul" >
            <li className={currentPage==='About' ? 'pageActive' : ''}>
                <a href="#about-section" onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} style={headerStyles}>About</a>
            </li>
            <li className={currentPage==='Portfolio' ? 'pageActive' : ''}>
                <a href="#portfolio-section" onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} style={headerStyles}>Portfolio</a>
            </li>
            <li className={currentPage==='Contact' ? 'pageActive' : ''}>
                <a href="#contact-section" onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} style={headerStyles}>Contact</a>
            </li>
            <li className={currentPage==='Resume' ? 'pageActive' : ''}>
                <a href="#resume-section" onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} style={headerStyles}>Resume</a>
            </li>
        </ul>
    </nav>
</header>
)
}

export default Header;