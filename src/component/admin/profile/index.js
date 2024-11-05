import React, { useState, useEffect } from 'react';
import './index.css'
import Cookies from 'js-cookie';


const Profile = () => {
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

    return(
        <div>
            <h1>Profile</h1>
            <div>
                <div>
                    <p>Contact Details</p>
                    <p>Business Details</p>
                    <p>Statutory Details</p>
                    <p>Other Details</p>
                    <p>Ratings & Review</p>
                </div>
            </div>
        </div>
    )

}

export default Profile