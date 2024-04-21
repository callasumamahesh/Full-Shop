import React from 'react'
import { useNavigate } from 'react-router-dom';
import Sellers from '../assets/Sellers.png'
// import Shoppers from '../assets/Shopers.png'
import axios from 'axios'
import { useState } from 'react';

function ShoperLogin() {
    const navigate = useNavigate()
    const [userDetails,setUserDetails] = useState({
        'email': '',
        'password' : ''
      })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails(prevValues => ({
            ...prevValues,
            [name]: value
        }))
    }

    const handleLogin = async () => {
        try {
            const data = await axios.get('http://localhost:5000/login', { params: userDetails })
            const res = data.data;
            if (res === 'User Exict') {
                const ShopersUser = true;
                localStorage.setItem('ShopersUser', true)
                navigate('/products')
            }
            else if (res === 'Password Mismatch') {
                alert('Check Your Password')
            }
            else {
                alert('User Not Exist Please SignUp First')
                navigate('/shopersignup')
            }
        }
        catch (err) {
            if (err.message === 'Network Error') {
                alert('Network Error')
            }
            else{
                alert(err)
            }
        }
    }

    return (
        <div className='sellersloginpage' id="ShopersPage">
            <div className='SellersLogin sp' id="shooperslogin">
                <img src={Sellers} alt="Sellers Image" />
                <button className='btn sellerbtn'>Shopers Login</button>
            </div>
            <div className='sellersloginform' id="shoopersPage">
                <input type="text" className='inputfield' placeholder='Enter Username'
                    name='email'
                    onChange={(e) => handleChange(e)}
                />
                <input type="password" className="inputfield" placeholder='Enter Password'
                    name='password'
                    onChange={(e) => handleChange(e)} />
                <button onClick={() => handleLogin()} className='btn loginbtn'> Login</button>
                <p>No account, <a href="/shopersignup">Click here!</a></p>
            </div>
        </div>
    )

}

export default ShoperLogin