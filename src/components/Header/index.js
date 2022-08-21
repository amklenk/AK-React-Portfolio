import React from 'react';

function Header (){
return(
<header id="header">
    <h2 class="nav-name">AMANDA KLENK</h2>
    <nav class="nav-links">
        <ul id="nav-ul">
            <li class="nav-sections">
                <a href="#about-section">About</a>
            </li>
            <li class="nav-sections">
                <span>Skills</span>
            </li>
            <li class="nav-sections">
                <span>Portfolio</span>
            </li>
            <li class="nav-sections">
                <span>Contact</span>
            </li>
            <li class="nav-sections">
                <span>Resume</span>
            </li>
        </ul>
    </nav>
</header>
)
}

export default Header;