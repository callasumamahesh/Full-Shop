import React, { useEffect, useState } from 'react'
import '../App.css'
import  Carousel  from 'react-bootstrap/Carousel'
import  Row  from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col'
import Logo1 from '../assets/logo1.png'
import Logo2 from '../assets/logo2.png'
import Logo3 from '../assets/logo3.png'
import Logo4 from '../assets/logo4.png'
import Logo5 from '../assets/logo5.png'
import Logo6 from '../assets/logo6.png'
import Carousel1 from '../assets/Carousel1.png' 
import Carousel2 from '../assets/Carousel2.png' 
import Carousel3 from '../assets/Carousel3.png' 
import { useNavigate } from 'react-router-dom'

function HomePage({user}) {
  const screenSize = window.innerWidth <= 600;
  const [mediaScreen,setMediaScreen] = useState(
    screenSize
  )

  useEffect(()=>{
    const changeInScreen = () => {
      setMediaScreen(window.innerWidth <= 600)
    }
    window.addEventListener('resize',changeInScreen)
    return()=>{
      window.removeEventListener('resize',changeInScreen)
    }
  },[])
  const allIcons = {
    gridTemplaterows : mediaScreen ? '2' : '1',
  }
  const navigate = useNavigate();
  const handleClick = () => {
    if(user){
      navigate('/products')
    }
    else{
      navigate('/login')
    }
  }
  return (
    <>
        <Carousel style={{height:'600px'}}>
            <Carousel.Item>
                <Row className='EachRow'>
                    <Col className='leftSide'>
                      <div>
                        <h1 style={mediaScreen ? {marginLeft : '3rem'}:{marginLeft : '2rem'}}>SHOP WITH UTMOST</h1>
                        <h1 style={{ color: 'blue', marginLeft: mediaScreen ? '3rem' : '2rem' }}>STYLE</h1>                        
                        <p style={mediaScreen ? {marginLeft : '3rem',marginRight:'1rem'}:{marginLeft : '2rem'}}>Shops from the latest trendy clothes to the best gadgets.With Star Shopper you save 10% every time you shop!</p>
                        <button
                        onClick={handleClick}
                        className='BrowserButton'>Browse Products</button>
                        <h2 style={mediaScreen ? {marginLeft : '3rem'}:{marginLeft : '2rem'}}>Products available from : </h2>
                      </div>
                      <div className='logoSection' style={mediaScreen ? { gridTemplateRows: 'repeat(2, 1fr)', gridTemplateColumns: 'repeat(3, 1fr)' } : { gridTemplateRows: '1fr', gridTemplateColumns: 'repeat(6, 1fr)' }}>
                        <img src={Logo1} style={{width:'3rem'}}/>
                        <img src={Logo2} style={{width:'3rem'}}/>
                        <img src={Logo3} style={{width:'3rem'}}/>
                        <img src={Logo4} style={{width:'3rem'}}/>
                        <img src={Logo5} style={{width:'3rem'}}/>
                        <img src={Logo6} style={{width:'3rem'}}/>
                      </div>
                    </Col>
                    <Col  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={Carousel1} alt="" style={{width:mediaScreen ? '300px':'500px',height:mediaScreen ? '300px':'500px',marginTop:mediaScreen ? '2rem':'2rem'}}/>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row className='EachRow'>
                    <Col className='leftSide'>
                    <div>
                        <h1 style={mediaScreen ? {marginLeft : '3rem'}:{marginLeft : '2rem'}}>SHOP WITH UTMOST</h1>
                        <h1 style={{ color: 'blue', marginLeft: mediaScreen ? '3rem' : '2rem' }}>STYLE</h1>                        
                        <p style={mediaScreen ? {marginLeft : '3rem',marginRight:'1rem'}:{marginLeft : '2rem'}}>Shops from the latest trendy clothes to the best gadgets.With Star Shopper you save 10% every time you shop!</p>
                        <button
                        onClick={handleClick}
                        className='BrowserButton'>Browse Products</button>
                        <h2 style={mediaScreen ? {marginLeft : '3rem'}:{marginLeft : '2rem'}}>Products available from : </h2>
                      </div>
                      <div className='logoSection' style={mediaScreen ? { gridTemplateRows: 'repeat(2, 1fr)', gridTemplateColumns: 'repeat(3, 1fr)' } : { gridTemplateRows: '1fr', gridTemplateColumns: 'repeat(6, 1fr)' }}>
                        <img src={Logo1} style={{width:'3rem'}}/>
                        <img src={Logo2} style={{width:'3rem'}}/>
                        <img src={Logo3} style={{width:'3rem'}}/>
                        <img src={Logo4} style={{width:'3rem'}}/>
                        <img src={Logo5} style={{width:'3rem'}}/>
                        <img src={Logo6} style={{width:'3rem'}}/>
                      </div>
                    </Col>
                    <Col  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='CarouselImage'>
                      <img src={Carousel2} alt="" style={{width:mediaScreen ? '300px':'500px',height:mediaScreen ? '300px':'500px',marginTop:mediaScreen ? '2rem':'2rem'}}/></Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row className='EachRow'>
                    <Col className='leftSide'>
                    <div>
                        <h1 style={mediaScreen ? {marginLeft : '3rem'}:{marginLeft : '2rem'}}>SHOP WITH UTMOST</h1>
                        <h1 style={{ color: 'blue', marginLeft: mediaScreen ? '3rem' : '2rem' }}>STYLE</h1>                        
                        <p style={mediaScreen ? {marginLeft : '3rem',marginRight:'1rem'}:{marginLeft : '2rem'}}>Shops from the latest trendy clothes to the best gadgets.With Star Shopper you save 10% every time you shop!</p>
                        <button
                        onClick={handleClick}
                        className='BrowserButton'>Browse Products</button>
                        <h2 style={mediaScreen ? {marginLeft : '3rem'}:{marginLeft : '2rem'}}>Products available from : </h2>
                      </div>
                      <div className='logoSection' style={mediaScreen ? { gridTemplateRows: 'repeat(2, 1fr)', gridTemplateColumns: 'repeat(3, 1fr)' } : { gridTemplateRows: '1fr', gridTemplateColumns: 'repeat(6, 1fr)' }}>
                        <img src={Logo1} style={{width:'3rem'}}/>
                        <img src={Logo2} style={{width:'3rem'}}/>
                        <img src={Logo3} style={{width:'3rem'}}/>
                        <img src={Logo4} style={{width:'3rem'}}/>
                        <img src={Logo5} style={{width:'3rem'}}/>
                        <img src={Logo6} style={{width:'3rem'}}/>
                      </div>
                    </Col>
                    <Col className='CarouselImage'  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img src={Carousel3} alt="" style={{width:mediaScreen ? '300px':'500px',height:mediaScreen ? '300px':'500px',marginTop:mediaScreen ? '2rem':'2rem'}}/>
                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel>
    </>
  )
}

export default HomePage