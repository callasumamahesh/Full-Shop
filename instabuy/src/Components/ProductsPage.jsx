import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProductsPage() {
    let navigate = useNavigate();
    const [products,setProducts] = useState([])
    const [productsfromapi,setProductsfromApi] = useState([])

    useEffect(()=>{
        async function getProducts(){
            let data = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=20');
            setProductsfromApi(data.data)
            let datafromdb = await axios.get("http://localhost:5000/getproductsfromdb")
            setProducts(datafromdb.data)
        }
        getProducts();
    },[])


    const [productsScreen,setProductsScreen] = useState(
        window.innerWidth <= 550,
    )
    useEffect(()=>{
        const setForMobiles = () => {
            setProductsScreen(window.innerWidth <= 550);
        }
        setForMobiles()
        window.addEventListener('resize',setForMobiles)
        return()=>{
            window.removeEventListener('resize',setForMobiles)
        }
    },[])

    const [productScreen,setProductScreen] = useState(
        window.innerWidth >= 600 && window.innerWidth <= 1100,
    )

    useEffect(()=>{
        const setForTab = () => {
            setProductScreen(window.innerWidth >= 600 && window.innerWidth <= 1100);
        }
        setForTab()
        window.addEventListener('resize',setForTab)
        return()=>{
            window.removeEventListener('resize',setForTab)
        }
    },[])

    const imgdiv = { 
        height:'200px',
        width:'200px',
        boxShadow : '8px 8px 9px gray',
        borderRadius:'15px',
    }
    const OneProduct = {
        width:'300px',
        height:'400px',
        display:'flex',
        flexDirection : 'column',
        alignItems:'center',
        justifyContent:'center' ,
    }
    const AllProducts = {
        display:'grid',
        gridTemplateColumns : 'repeat(4,1fr)',
    }
    const productTitle = {
        margin:'0.5rem 1rem',
        marginTop:'1rem',
    }
    const productCost ={
        margin:'0.5rem 1rem',
    }
    const viewDetails = {
        width:'120px',
        margin:'0.5rem 1rem',
        padding:'7px',
        backgroundColor:'blue',
        borderRadius:'10px',
        color:'white',
    }

    const styleForMobile = {
        display : productsScreen ? 'flex' : 'grid',
        flexDirection : productsScreen ? 'column' : 'row',
        justifyContent : productsScreen ? 'center' : 'center',
        alignItems : productsScreen ? 'center' :'center',
    }

    const styleForTab = {
        gridTemplateColumns : productScreen ? 'repeat(2, 1fr)' :'repeat(4, 1fr)',
    }

    const styleforEachItem = {
        marginLeft: productScreen ? '3rem 0rem' : '3rem 0re',
    }
    const styleeachitem = {...OneProduct,...styleforEachItem}

    const TotalStyles = {...AllProducts,...styleForMobile,...styleForTab}

    
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Find your Product</h1>
        <div style={TotalStyles}>
            {products.map((item, index)=>{
                return(
                        <div style={styleeachitem} key={index}>
                            <img src={item.ProductImage} alt="PhotoImg" style={imgdiv}/>
                            <p style={productTitle}>{item.ProductTitle}</p>
                            <h4 style={productCost}>${item.ProductPrice}.00</h4>
                            <button style={viewDetails} onClick={() => navigate(`/products/${item.Uniqueid}`, {state : item})}>View Product</button>
                        </div>
                )
            })}
            {
                productsfromapi.map((item,index) => {
                    return(
                        <div style={styleeachitem} key={index}>
                        <img src={item.images[0]} alt="PhotoImg" style={imgdiv}/>
                        <p style={productTitle}>{item.title}</p>
                        <h4 style={productCost}>${item.price}.00</h4>
                        <button style={viewDetails} onClick={() => navigate(`/products/${item.id}`, {state : item})}>View Product</button> 
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ProductsPage