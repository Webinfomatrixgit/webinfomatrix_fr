import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'; // Import the js-cookie library
import './index.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [jwt, setJwt] = useState(null)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Fetch the JWT token when the component mounts
    useEffect(() => {
        const token = Cookies.get('jwt');  // Fetch JWT from cookies
        if(token){
            setJwt(token);  // Update the state with the fetched token
        }else{
            setJwt(null)
        }
        
    }, []);  // Empty dependency array ensures this runs once after initial render

    const logout = () => {
        Cookies.remove('jwt')
        setJwt(null)
        window.location.href = '/login';
    }
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
                    {jwt !== null && <p className='header-link'><Link to={"/dashboard"} className='link'>Dashboard</Link></p>}
                    <p className='header-link'><Link to={"/"} className='link'>Home</Link></p>
                    <p className='header-link'>Help</p>
                    <p className='header-link'>FAQ</p>
                    {jwt === null ? (
                        <p className='header-link'>
                            <Link to="/registration" className='link'>Login/Registration</Link>
                        </p>
                    ) : (
                        <p className='header-link' onClick={logout}>Logout</p>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default Header;
