import React, { useEffect } from 'react';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000, // Animation duration
        });
    }, []);

    return (
        <div className='about-us-bg-container'>
            <div data-aos="fade-up">
                <h1 className='about-us-main-heading'>Let's Do Business, the Easy Way.</h1>
                <p className='about-us-main-paragraph'>
                    Our mission is to <span className='about-us-main-paragraph-span'>'make doing business easy'</span> and
                    democratize business opportunities for all!
                </p>
            </div>
            <div data-aos="zoom-in">
                <img
                    src='https://corporate.indiamart.com/wp-content/themes/indiamart-child/images/about/industries-banner.png'
                    className='about-us-child-image'
                    alt='webinfomatrix'
                />
            </div>
            <div className='about-us-who-bg-container'>
                <div data-aos="fade-right" className='about-us-who-content-container'>
                    <h1 className='about-us-who-main-heading'>Who <br /> we are</h1>
                    <p>
                        We are India's largest marketplace and a one-stop expert solution for all business needs, empowering 81 lakh suppliers by connecting them with ~20 crore buyers across the nation. <br />
                        At the heart of IndiaMART is our commitment to creating value for Indian business communities through strong network effects. We make business effortless for all by ensuring access to a wider market, technology, and finance.
                    </p>
                </div>
                <div data-aos="fade-left">
                    <img
                        src='https://corporate.indiamart.com/wp-content/uploads/2024/09/who-we-are.png'
                        className='about-us-corporate-image'
                        alt='webinfomatrix'
                    />
                </div>
            </div>
            <div className='about-us-who-bg-container'>
                <div data-aos="fade-right">
                    <img
                        src='https://corporate.indiamart.com/wp-content/uploads/2024/09/what-we-do.png'
                        className='about-us-corporate-image'
                        alt='webinfomatrix'
                    />
                </div>
                <div data-aos="fade-left"  className='about-us-who-content-container'>
                    <h1 className='about-us-who-main-heading'>WHAT <br /> we do</h1>
                    <p>
                        With a focus on digital and financial inclusion, we empower businesses of all sizes by providing seamless access to a vast digital marketplace. Our platform allows suppliers to begin their online journey effortlessly, offering a comprehensive suite of tools and services designed to help them grow and succeed.
                    </p>
                    <div>
                        <h1>Key benefits include:</h1>
                        <ul>
                            <li>Enhanced business visibility</li>
                            <li>Increased brand credibility</li>
                            <li>Efficient lead management</li>
                        </ul>
                        <p>Buyers can easily explore a wide range of products and connect with verified suppliers, finding everything they need-from pins to planes-on a single platform.</p>
                    </div>
                </div>

                


            </div>
            <div className='about-us-who-bg-container'>
                <div data-aos="fade-right" className='about-us-who-content-container'>
                    <h1 className='about-us-who-main-heading'>Who <br /> we are</h1>
                    <p>
                        We are India's largest marketplace and a one-stop expert solution for all business needs, empowering 81 lakh suppliers by connecting them with ~20 crore buyers across the nation. <br />
                        At the heart of IndiaMART is our commitment to creating value for Indian business communities through strong network effects. We make business effortless for all by ensuring access to a wider market, technology, and finance.
                    </p>
                </div>
                <div data-aos="fade-left">
                    <img
                        src='https://corporate.indiamart.com/wp-content/uploads/2024/09/how-we-do-it.png'
                        className='about-us-corporate-image'
                        alt='webinfomatrix'
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
