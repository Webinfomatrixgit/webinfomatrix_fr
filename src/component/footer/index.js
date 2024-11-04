import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer-bg-container'>
            <div className='footer-main-container'>
                <div>
                    <h1 className='footer-main-heading'>We are here to help you!</h1>
                </div>
                <div>
                    <RiWhatsappFill className='whatsapp-logo'/>
                    <FaLinkedinIn className='LinkedinIn-logo'/>
                </div>
            </div>
            <div className='footer-content-container'>
                <ul className='footer-unorder-list-container'>

                    <li><Link to={"/about-us"} className='link'>About Us </Link></li>
                    <li>Join Sales</li>
                    <li>Success Stories</li>
                    <li>Press Section</li>
                    <li>Advertise with Us</li>
                    <li>investor Section</li>
                </ul>
                <ul className='footer-unorder-list-container'>
                    <li>Help</li>
                    <li>Feedback</li>
                    <li>Complaints</li>
                    <li>Customer Care</li>
                    <li>Jobs & Careers</li>
                    <li>Contact Us</li>
                </ul>
                <div className='footer-list-container'>
                    <h1 className='footer-list-heading'>Suppliers Tool Kit</h1>
                    <ul className='footer-unorder-list-container'>
                        <li>Sell on Webinfomatrix</li>
                        <li>Latest BuyLead</li>
                        <li>Learning Centre</li>
                        <li>Ship With webinfomatrix</li>
                    </ul>
                </div>
                <div className='footer-list-container'>
                    <h1 className='footer-list-heading'>Buyers Tool Kit</h1>
                    <ul className='footer-unorder-list-container'>
                        <li>Post Your Requirement</li>
                        <li>Products You Buy</li>
                        <li>Search Products & Suppliers</li>
                    </ul>
                </div>
                <div className='footer-list-container'>
                    <h1 className='footer-list-heading'>Accounting Solutions</h1>
                    <ul className='footer-unorder-list-container'>
                        <li>Accounting Software</li>
                        <li>Taily on Mobile</li>
                        <li>GST e-Invoice</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}


export default Footer