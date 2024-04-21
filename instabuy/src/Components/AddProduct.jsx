import React from 'react'
import '../App.css'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function AddProduct() {
    const navigation = useNavigate()
    const [productDetails, setProductDetails] = useState({
        uniqueid:1,
        ProductTitle: '', ProductDescription: '', ProductPrice: '', ProductDiscount: '', ProductCategory: '', ProductImage: ''
    })

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setProductDetails((prevDetails) => ({ ...prevDetails, [name]: value }))
    }
    const handleImage = (e) => {
        const { name } = e.target;
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProductDetails((prevDetails) => ({
                    ...prevDetails,
                    [name]: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };
    // let UniqueId = ''
    const handleAddProduct = async (e) => {
        e.preventDefault()
        try {
            const data = await axios.post('http://localhost:5000/addproduct', productDetails)
            const response  = data.data.message;
            if(response === 'Product Added'){
                alert('Product Added Successfully')
                navigation('/sellerproducts')
            }
        } catch (error) {
            console.log(error);
        }
        setProductDetails({
            ProductTitle: '',
            ProductDescription: '',
            ProductPrice: '',
            ProductDiscount: '',
            ProductCategory: '',
            ProductImage: ''
        })
    }

    return (
        <div className='AddNewProduct'>
            <form action="/addproduct" className='AddProduct'>
                <input type="text" className='ptitle' placeholder='Product Title' name="ProductTitle" value={productDetails.ProductTitle} onChange={(e) => handleChanges(e)} />
                <textarea name="ProductDescription" id="pdescription" value={productDetails.ProductDescription} onChange={(e) => handleChanges(e)} cols="30" rows="10" placeholder='Product Description'></textarea>
                <div className="pricediv">
                    <input type="text" placeholder='Product Price' onChange={(e) => handleChanges(e)} value={productDetails.ProductPrice} name="ProductPrice" />
                    <input type="text" placeholder='Product Discount' onChange={(e) => handleChanges(e)} name="ProductDiscount" value={productDetails.ProductDiscount} />
                </div>
                <input type="text" className='ptitle' placeholder='Category' value={productDetails.ProductCategory} name="ProductCategory" onChange={(e) => handleChanges(e)} />
                <input type="file" name="ProductImage" onChange={(e) => handleImage(e)} />

                <div className='buts'>
                    {/* <button className='PrimaryButton' onClick={(e) => handleGoLive(e)}>Go Live</button> */}
                    <button className='PrimaryButton' onClick={(e) => handleAddProduct(e)}>Add Product</button>
                </div>
            </form>
            <section className='Review'>
                <h1>Live Preview</h1>
                {productDetails.ProductImage && <img className="ProductImage" src={productDetails.ProductImage} alt="ProductImage" />}
                <h2>{productDetails.ProductTitle}</h2>
                <p>{productDetails.ProductDescription}</p>
                <div className='flexbox'>
                    { productDetails.ProductPrice && <h3>{`$${productDetails.ProductPrice}`}</h3>}
                    { productDetails.ProductDiscount && <h4>{productDetails.ProductDiscount}off</h4>}
                </div>
                <p>{productDetails.ProductCategory}</p>
            </section>
        </div>
    )
}

export default AddProduct