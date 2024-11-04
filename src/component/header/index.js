import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './index.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='nav-bg-container'>
            <div className='header-content-container'>
                <div className='header-logo-container'>
                    <Link to={"/"} className='link'><h1 className='header-logo'>Webinfomatrix</h1></Link>
                </div>
                <button className='header-toggle-button' onClick={toggleMenu}>
                    {isMenuOpen ? '✖' : '☰'} {/* Toggle button */}
                </button>
            </div>
            <nav className={`header-search-and-link-container ${isMenuOpen ? 'open' : ''}`}>
                <div className='header-search-input-container'>
                    <input type='text' className='header-input' placeholder='Search...' />
                    <button className='header-search-button'>Search</button>
                </div>
                <div className={`header-link-container ${isMenuOpen ? 'open' : ''}`}>
                    <p className='header-link'><Link to={"/"} className='link'>Home</Link></p>
                    <p className='header-link'>Help</p>
                    <p className='header-link'>FAQ</p>
                </div>
            </nav>
        </div>
    );
}

export default Header;
