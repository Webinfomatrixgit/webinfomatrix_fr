import React from 'react';
import './index.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample image paths (replace with your actual image paths)
const images = [
    {
        src: 'https://webinfomatrixfirst.s3.amazonaws.com/user/profile-image/6_walpaper%20img.jpg', // Replace with your first image path
        label: 'First slide label',
        description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
        src: 'https://webinfomatrixfirst.s3.amazonaws.com/user/profile-image/6_walpaper%20img.jpg', // Replace with your second image path
        label: 'Second slide label',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        src: 'https://webinfomatrixfirst.s3.amazonaws.com/user/profile-image/6_walpaper%20img.jpg', // Replace with your third image path
        label: 'Third slide label',
        description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    },
];

function Banner() {
    return (
        <div className='carousel-content-bg-container'>
            <Carousel className='carousel-bg-container'>
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block carousel-image"
                            src={image.src}
                            alt={image.label}
                        />
                        <Carousel.Caption>
                            <h3>{image.label}</h3>
                            <p>{image.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default Banner;
