import React from 'react'
import { useNavigate } from 'react-router-dom';
import Sellers from '../assets/Sellers.png'
// import Shoppers from '../assets/Shopers.png'
import { useState } from 'react';
import axios from 'axios';


function ShoperSignup() {
    const navigate = useNavigate()
    const [details,setDetails] = useState({
        'email' : '',
        'password': '',
        'Name' : '',
    })
    const handleInput = (e) => {
        const {name,value} = e.target;
        setDetails((prevDetails => ({
            ...prevDetails,
            [name] : value
        })))
    }

    const handleSubmit = async () => {
        if(details.email && details.password && details.Name){

            const data = await axios.post('http://localhost:5000/signup',details)
            const res = data.data;
            if(res === 'User Alredy Exist'){
                alert('User Alredy Exist')
            }
            else{
                alert('User Created')
            }
    
            setDetails({
                'email' : '',
                'password' : '',
                'Name' : ''
            })
            navigate('/shoperslogin')
        }
        else{
            alert('Please Fill All Fields')
        }
    }

    return (
        <div className='sellersloginpage' id="ShopersPage">
            <div className='SellersLogin sp' id="shooperslogin">
                <img src={Sellers} alt="Sellers Image" />
                <button className='btn sellerbtn'>Shoopers Login</button>
            </div>
            <div className='sellersloginform' id="shoopersPage" >
            <input type="text" className='inputfield' required placeholder='Enter Email' name='email' value = {details.email}
            onChange={(e) => handleInput(e)}
        />
            <input type="password" className='inputfield' required placeholder='Passowrd' name='password' value= {details.password}
            onChange={(e) => handleInput(e)}
            />
            <input type="text" className='inputfield' required placeholder='Enter Full Name' name='Name' value={details.Name} onChange={(e) => handleInput(e)}/>
            <button className='btn loginbtn'  
            onClick = { () => {
                handleSubmit()
              }}
            >Join the club</button>
            <p>Already a memeber? <a href='/shoperslogin'>Click here</a></p>
        </div>
        </div>
    )
}

export default ShoperSignup