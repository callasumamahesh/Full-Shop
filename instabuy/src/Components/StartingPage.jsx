import React from 'react'
import '../StarShopper.css'
import Sellers from '../assets/Sellers.png'
import Shoppers from '../assets/Shopers.png'
import { useNavigate } from 'react-router-dom'
function StartingPage() {
    const navigate = useNavigate()
    return (
        <div className='StartP'>
            <div className='SellersLogin sp'>
                <img src={Shoppers} alt="Sellers Image" />
                <button className='btn sellerbtn' onClick={() => navigate('/sellerlogin')}>Sellers Login</button>
            </div>
            <div className='ShoopersLogin sp'>
                <img src={Sellers} alt="Sellers Image" />
                <button className='btn shopperbtn' onClick={() => navigate('/shoperslogin')}>Shoppers Login</button>
            </div>
        </div>
    )
}

export default StartingPage