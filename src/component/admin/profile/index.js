import React, { useState, useEffect } from 'react';
import './index.css'
import Cookies from 'js-cookie';
import ContactDetails from './contactDetails';
import BusinessDetail from './businessDetails';


const Profile = (className) => {
    const [jwt, setJwt] = useState(null)
    const [showContactDetails, setContectDetails] = useState(true)
    const [showBusinessDetail, setBusinessDetails] = useState(false)

    const showContactDetail = () => {
        setContectDetails(true)
        setBusinessDetails(false)
    }

    const showBusinessDetails = () => {
        setBusinessDetails(true)
        setContectDetails(false)
    }

    const contactDetailsClass = showContactDetails ? '' : 'display-none'
    const businessDetailClass = showBusinessDetail ? '' : 'display-none'
    

    // Fetch the JWT token when the component mounts
    useEffect(() => {
        const token = Cookies.get('jwt');  // Fetch JWT from cookies
        if (token) {
            setJwt(token);  // Update the state with the fetched token
        } else {
            window.location.href = '/login';
        }

    }, []);  // Empty dependency array ensures this runs once after initial render

    return(
        <div className={`profile-bg-container ${className.className}`}>
            <h1 className='profile-main-heading'>Profile</h1>
            <div>
                <div className='profile-content-container'>
                    <p className='profile-menu' onClick={showContactDetail}>Contact Details</p>
                    <p className='profile-menu' onClick={showBusinessDetails}>Business Details</p>
                    <p className='profile-menu'>Statutory Details</p>
                    <p className='profile-menu'>Other Details</p>
                    <p className='profile-menu'>Ratings & Review</p>
                </div>
                <div>
                    <ContactDetails className = {contactDetailsClass}/>
                    <BusinessDetail className= {businessDetailClass}/>
                </div>
            </div>
        </div>
    )

}

export default Profile