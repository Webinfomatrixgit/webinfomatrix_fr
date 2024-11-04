import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Productcard from '../Product-card';

function Productlike() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://34.207.92.172:3000/api/product');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data.response); // Assuming data is an array of products
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []); // Empty dependency array means this runs once when the component mounts

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='product-like-bg-container'>
            <div>
                <h1 className='product-like-main-heading'>Products You May Like<Link to={"/all-product"}> <button className='product-like-view-all-button'>View All</button></Link></h1>
                
            </div>
            <div className='product-like-card-bg-container'>
                {products.products.map(product => (
                    <Productcard key={product.id} product={product} />
                ))}
            </div>

        </div>
    );
}

export default Productlike;
