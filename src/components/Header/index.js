import React from 'react';

const headerStyles = {
    textDecoration: "none",
    color: "white"
}

function Header ({ currentPage, handlePageChange }){
return(
<header id="header">
    <h2 className="nav-name">AMANDA KLENK</h2>
    <nav className="nav-links">
        <ul id="nav-ul" >
            <li className="nav-sections">
                <a href="#about-section" onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} style={headerStyles}>About</a>
            </li>
            <li class="nav-sections">
                <a href="#portfolio-section" onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} style={headerStyles}>Portfolio</a>
            </li>
            <li class="nav-sections">
                <a href="#contact-section" onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} style={headerStyles}>Contact</a>
            </li>
            <li class="nav-sections">
                <a href="#resume-section" onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} style={headerStyles}>Resume</a>
            </li>
        </ul>
    </nav>
</header>
)
}

export default Header;