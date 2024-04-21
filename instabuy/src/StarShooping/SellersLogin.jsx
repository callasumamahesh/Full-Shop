import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Shoppers from '../assets/Shopers.png'
import axios from 'axios'
function SellersLogin() {
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
                const SellersUser = true;
                localStorage.setItem('SellersUser', true)
                navigate('/sellerproducts')
            }
            else if (res === 'Password Mismatch') {
                alert('Check Your Password')
            }
            else {
                alert('User Not Exist Please SignUp First')
                navigate('/sellersignup')
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
        <div className='sellersloginpage'>
            <div className='SellersLogin sp'>
                <img src={Shoppers} alt="Sellers Image" />
                <button className='btn sellerbtn'>Sellers Login</button>
            </div>
            <div className='sellersloginform'>
                <input type="text" className='inputfield' placeholder='Enter Username'
                    name='email'
                    onChange={(e) => handleChange(e)}
                />
                <input type="password" className="inputfield" placeholder='Enter Password'
                    name='password'
                    onChange={(e) => handleChange(e)} />
                <button onClick={() => handleLogin()} className='btn loginbtn'> Login</button>
                <p>No account, <a href="/sellersignup">Click here!</a></p>
            </div>
        </div>
    )
}
export default SellersLogin