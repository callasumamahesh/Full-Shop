import React, { useState, useEffect } from 'react'
import cartImage from '../assets/cartimage.png'
import '../App.css'
import { useNavigate } from 'react-router-dom'

function CartPage(cart) {
    const navigate = useNavigate()
    const [screen,setScreen] = useState(
        window.innerWidth <= 700
    )
        useEffect(()=>{
            const screenWidth = ()=> {
                setScreen(window.innerWidth <= 700);
            }
            window.addEventListener('resize',screenWidth);
            return() => {
                window.removeEventListener('resize',screenWidth);
            }
        },[])

    const [price,setPrice] = useState(0);
    const [quantity,setQuantity] = useState(0);

    useEffect(() => {
    let tempQuantity = 0;
    let tempPrice = 0;
    Object.keys(cart).map((cartId) => {
        const details = cart[cartId];
        const itemsArray = Object.values(details)
        return itemsArray.map((EachItem) => {
            const {title, price, quantity} = EachItem;
            tempQuantity  += quantity;
            console.log(tempQuantity)
            tempPrice += parseInt(quantity) * parseInt(price);
        })
      })   
      setPrice(tempPrice)
      setQuantity(tempQuantity)
    },[cart])

console.log(cart);
      
  return (
    <>
    <h3 style={{textAlign:'center'}}>Your Cart</h3>
    <div className='fromCart' style={screen ? {flexDirection : 'column'}:{flexDirection:'row'}}>
        {console.log(cart)}
            <table style={{border:'2px solid black'}}>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
        {/* {Object.keys(cart).map((cartId) => {
        const details = cart[cartId]
        const itemsArray = Object.values(details);
        return itemsArray.map((EachItem) => {
            const { title, price, quantity } = EachItem;
            return (
                <tr>
                    <td>{title}</td>
                    <td>{price}</td>
                    <td>{quantity}</td>
                </tr>
            );
            });
        })} */}
                {
                    
                }
                <tr>
                    <td>Total</td>
                    <td>{price}</td>
                    <td>{quantity}</td>
                </tr>
            </table>
        <div>
            <img className="cartImage" src={cartImage} alt="" style={screen?{width:'300px',height:'300px'}:{width:'450px',height:'450px'}}/>
        </div>
    </div>
    <div>
        <button style={{padding:'10px',width:'100px',
        borderRadius:'10px',
        backgroundColor:'blue',
        color:'white',
        marginLeft:'4rem',
        marginBottom:'5rem',
        }}
        onClick={()=>{
            navigate('/checkout')
        }}
        >Check out</button>
        <button style={{padding:'10px',width:'200px',
        borderRadius:'10px',
        backgroundColor:'blue',
        color:'white',
        marginLeft:'4rem',
        marginBottom:'5rem',
        }}
        onClick={()=>{
            navigate('/products')
        }}>
            Move to Products
        </button>
    </div>
    </>
  )
}

export default CartPage