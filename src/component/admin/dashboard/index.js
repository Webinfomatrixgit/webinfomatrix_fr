import React, { useState, useEffect } from 'react';
import './index.css'
import Cookies from 'js-cookie';

const Dashboard = () => {
    const [jwt, setJwt] = useState(null)

    // Fetch the JWT token when the component mounts
    useEffect(() => {
        const token = Cookies.get('jwt');  // Fetch JWT from cookies
        if (token) {
            setJwt(token);  // Update the state with the fetched token
        } else {
            window.location.href = '/login';
        }
    }, []);  // Empty dependency array ensures this runs once after initial render

    return (
        <div className='dashboard-bg-container'>
            <div>
                <p>Profile</p>
                <p>Products / Services</p>
                <p>Add New Product/Service</p>
                <p>Buy Leads</p>
                <p>Premium Services</p>
                <p>Settings</p>
            </div>
            <div>
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
        </div>
    )
}

export default Dashboard