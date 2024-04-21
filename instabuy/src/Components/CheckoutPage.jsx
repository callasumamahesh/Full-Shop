import React from 'react'
import CheckoutImage from '../assets/doneicon.png'
function CheckoutPage() {
  return (
    <div style={{display:'flex',
    justifyContent:'center',
    alignItems:'center',}}>
        <img src={CheckoutImage} alt="" style={{
            width:'400px',
            height:'400px',
        }}/>
    </div>
  )
}

export default CheckoutPage