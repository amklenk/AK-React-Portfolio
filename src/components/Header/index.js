import React from 'react';
import Logo from '../../assets/AKLogo.png'

const headerStyles = {
    textDecoration: "none",
    color: "white"
}

function Header ({ currentPage, handlePageChange}){
const categories = ['About', 'Portfolio', 'Skills', 'Contact', 'Resume'];

return(
<header id="header" className='d-flex align-items-center'>
    <img src={Logo} alt='AK Logo' style={{ width: '70px'}}/>
    <nav className="nav-links">
        <ul id="nav-ul" >
            {categories.map(name => {
                return(
                <li className={currentPage === name ? 'pageActive' : ''}>
                    <a href={`#${name.toLowerCase()}-section`} onClick={() => handlePageChange(name)}
                    className={currentPage === name ? 'nav-link active' : 'nav-link'} style={headerStyles}>{name}</a>
                </li>
                )
            })}
        </ul>
    </nav>
</header>
)
}

export default Header;