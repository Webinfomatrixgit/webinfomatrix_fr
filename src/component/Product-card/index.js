import React from 'react';
import './index.css';

function Productcard(product) {
    return(
        <div className='product-card-bg-container'>
            <div className='product-card-image-container'>
                <img src={product.product.image_url} className='product-card-image' alt={product.product.name}/>
            </div>
            <div>
                <h1 className='product-name-heading'>{product.product.name}</h1>
            </div>
            <div>
                <p className='company-name-paragraph'>{product.product.company_name}</p>
            </div>
            <div>
                <p>{product.product.address}</p>
            </div>
            <div>
                <h2 className='product-card-price-heading'>₹ {product.product.price} / Kg</h2>
            </div> 
            <div>
                <div>

                </div>
                <div>
                    <button className='product-card-best-price-button'>Get Best Price</button>
                </div>
            </div>
            
        </div>
    )

}

export default Productcard