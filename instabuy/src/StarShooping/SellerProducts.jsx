import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SellerProducts() {
    const [yourproducts, setYourProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/getproductsfromdb');
                setYourProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
        <div className='allproductsfromdb'>
            {
            yourproducts.map((item, i) => (
                <div className='singleproductfromdb' key={i}>
                    <img className='imgfromdb' src={item.ProductImage} alt="Product Image" />
                    <h2>{item.ProductTitle}</h2>
                    <h5>${item.ProductPrice}.00</h5>
                    <p>{item.ProductDescription}</p>
                    <button className='PrimaryButton'>View Product</button>                </div>
            ))}
        </div>
        </>
    );
}

export default SellerProducts;
