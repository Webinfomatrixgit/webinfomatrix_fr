// ProductPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css'; // Add your styles here
import Productcard from '../Product-card';

const AllProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10); // Number of products per page
    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://34.207.92.172:3000/api/product?limit=${productsPerPage}&page=${currentPage}`);
                setProducts(response.data.response.products);
                setTotalProducts(response.data.response.totalProducts); // Assume the total is returned from the API
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [currentPage, productsPerPage]);

    // Calculate total pages
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    // Change page
    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    

    return (
        <div className="product-page">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && (
                <>
                    <h1 className='all-product-main-heading'>All Products</h1>
                    <div className="product-list">
                        {products.map(product => (
                            <Productcard product = {product}/>
                        ))}
                    </div>
                    <div className="pagination">
                        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default AllProduct;
