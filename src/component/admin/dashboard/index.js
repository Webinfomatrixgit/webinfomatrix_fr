import React, { useState, useEffect } from 'react';
import './index.css'
import Cookies from 'js-cookie';
import Profile from '../profile';

const Dashboard = () => {
    const [jwt, setJwt] = useState(null)
    const [activeProfile, setProfile] = useState(false)
    const [activeDashboard, setDashboard] = useState(true)

    const profileSection = () => {
        setProfile(true)
        setDashboard(false)
            
        
    }

    const dashboardSection = () => {
        setDashboard(true)
        setProfile(false)
    }

    console.log(activeProfile,'activeProfile')

    // Fetch the JWT token when the component mounts
    useEffect(() => {
        const token = Cookies.get('jwt');  // Fetch JWT from cookies
        if (token) {
            setJwt(token);  // Update the state with the fetched token
        } else {
            window.location.href = '/login';
        }
    }, []);  // Empty dependency array ensures this runs once after initial render

    const profileClass = activeProfile ? '' : 'display-none';
    const dashboardClass = activeDashboard ? '' : 'display-none';

    return (
        <div className='dashboard-bg-container'>
            <div className='dashboard-side-bar-container'>
                <p className='side-menu' onClick={dashboardSection}>Dashboard</p>
                <p className='side-menu' onClick={profileSection}>Profile</p>
                <p className='side-menu'>Products / Services</p>
                <p className='side-menu'>Add New Product/Service</p>
                <p className='side-menu'>Buy Leads</p>
                <p className='side-menu'>Premium Services</p>
                <p className='side-menu'>Settings</p>
            </div>
            <div className = {dashboardClass}>
                <h1 className='dashboard-main-heading'>My Dashboard</h1>
                <div>
                    <h1 className='dashboard-content-heading'>Company Profile</h1>
                    <div className='company-profile-card-container'>
                        <div className='conpany-profile-bg-container'>
                            <div className='dashboard-persion-detail-container'>
                                <p>Personal Details</p>
                                <p>Edit</p>
                            </div>
                            <hr />
                            <div>
                                <p>Name: Mayank gautam</p>
                                <p>Mobile: +91-8357037181</p>
                                <p>Email: brijmohanwebinfomatrix@gmail.com</p>
                                <p>Country: India</p>
                            </div>
                        </div>
                        <div className='conpany-profile-bg-container'>
                            <div className='dashboard-persion-detail-container'>
                                <p>Business Details</p>
                                <p>Edit</p>
                            </div>
                            <hr />
                            <div>
                                <p>Company Name : web info matrix</p>
                                <p>GSTIN No : N/A</p>
                                <p>Pan No : N/A</p>
                                <p>Address : , New Delhi, Delhi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Profile className={profileClass} />
        </div>
    )
}

export default Dashboard