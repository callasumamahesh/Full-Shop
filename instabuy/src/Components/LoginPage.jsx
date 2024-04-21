import React from 'react'
import { useState,useEffect } from 'react';
import LoginImage from '../assets/loginimg.png'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function LoginPage({isUser}) {

    const navigate = useNavigate();
    const [isMediumScreen, setIsMediumScreen] = useState(() => {
      return window.innerWidth >= 600 && window.innerWidth <= 1100
    }
      );

      useEffect(() => {
        const handleResize = () => {
          setIsMediumScreen(window.innerWidth >= 600 && window.innerWidth <= 1100);
        };
        window.addEventListener('resize', handleResize);   
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      const [mobileView,setMobileView] = useState(
        window.innerWidth <= 600,
      ) 
      const MobileScreenWidth = () =>{
        setMobileView(window.innerWidth <= 600)
      }
        useEffect(()=>{
          window.addEventListener('resize',MobileScreenWidth)
          return()=>{
            window.removeEventListener('resize',MobileScreenWidth)
          }
        },[])


      const loginPageStyles = {
        flexDirection: isMediumScreen ? 'column' : 'row',
        height:'500px',
      }

      const leftside = {
        marginTop : isMediumScreen ? '3rem':'0'
      }

      const rightside = {
        width : isMediumScreen ? '300px' : '500px',
      }

    const [userDetails,setUserDetails] = useState({
      'email': '',
      'password' : ''
    })

    const inputFields = {
        width:'250px',
        padding:'10px',
        borderRadius:'10px',
        fontSize : '14px',
        marginRight:'1rem',
        marginBottom:'2rem',
        marginTop:'1rem',
        border:'none',
    }
    const submitbutton ={
        display:'block',
        width:'300px',
        padding:'10px',
        borderRadius:'10px',
        backgroundColor:'blue',
        color:'white',
        border:'2px solid white',
        alignItems:'center',
    }
    const para={
        marginTop:'1rem',
    }
    const DynamicChange = {
      flexDirection : mobileView ? 'column' : 'row',
      justifyContent : mobileView ? 'center' : 'center',
      alignItems : mobileView ? 'center' : 'center',
      height : mobileView ? 'auto' : '500px',
    }
    const CombineChanges = {...loginPageStyles,...DynamicChange}
    const mobileImage = {
      width : mobileView ? '300px' : '300px',
      height : mobileView ? '300px' : '300px',
    }
    const CombineChanges1 = {...rightside,...mobileImage,}

    const Inputform = {
      width : mobileView ? '100%' : '',
      display : mobileView ? 'flex' : 'flex',
      flexDirection : mobileView ? 'column' : 'column',
      justifyContent : mobileView ? 'center' : '',
      alignItems : mobileView ? 'center' : '',
    }

    const InputformTotalStyle = {...leftside,...Inputform}

    const handleChange = (e) => {
      const {name, value} = e.target;
      setUserDetails(prevValues => ({
        ...prevValues,
        [name] : value
      })) 
    }

    const handleLogin = async () => {
      try{
        const data = await axios.get('',{ params : userDetails })
        const res = data.data;
        if(res === 'User Exict'){
          const InstaUser = true;
          localStorage.setItem('InstaUser',true)
          navigate('/products')
        }
        else if(res === 'Password Mismatch'){
          alert('Check Your Password')
        }
        else{
          alert('User Not Exist Please SignUp First')
          navigate('/signup')
        }
      }
      catch(err){
        if(err.message === 'Network Error'){
          alert('Network Error')
        }
      }
    }


  return (
    <div className='loginpage' style={CombineChanges} >
        <div className='left' style={InputformTotalStyle}>
            <h1>InstaBuy!</h1>
            <p style={{marginRight:'1rem',margin : mobileView ? '0rem 4rem' : ''}}>One place where brands come together form all across the world.</p>
            <input type="text" placeholder='Enter Username' 
            name = 'email'
            onChange={(e) => handleChange(e)} 
            style={inputFields}/>
            <input type="password"  placeholder='Enter Password' 
            name='password'
            onChange={(e) => handleChange(e)} style={inputFields}/>
            <button onClick = {() => handleLogin()} style={submitbutton}> Start Shopping </button>
            <p style={para}>No account, <a href="/signup" style={{textDecoration:'none',color:'white',}}>Click here!</a></p>
        </div>
        <div className='right'>
            <img src={LoginImage} alt="" style={CombineChanges1}/>
        </div>
    </div>
  )
}

export default LoginPage