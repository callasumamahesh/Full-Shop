import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Cart() {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const handledatafromdb = async () => {
            const response = await axios.get('http://localhost:5000/cartproducts')
            setProduct(response.data)
        }
        handledatafromdb()
    }, [])

    const handleDeleteFromCart = async (item) => {
        try {            
            const data = await axios.delete(`http://localhost:5000/deletefromcart/${item._id}`)
            alert(data.data.message)
        } catch (error) {
            alert(error)
        }
    }
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Your Cart</h1>
            <div className='allProductsfromcart'>
                {product.map((item, i) => {
                    return (
                        <div key={i} className='cartProduct'>
                            <img src={item.imagefordatabase} alt="" />
                            <h2>{item.title}</h2>
                            <p>${item.price}.00</p>
                            <p>{item.description.split(' ').slice(0, 11).join(' ')}</p>
                            <div className='cartButtons'>
                                <button className='PrimaryButton' onClick={() => {navigate(`/products/${item.Uniqueid}`,{state : item})}}>View Product</button>
                                <button className='PrimaryButton' onClick={() => handleDeleteFromCart(item)}>Remove From Cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Cart