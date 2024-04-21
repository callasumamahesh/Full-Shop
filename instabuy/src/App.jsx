
import './App.css'
import './StarShopper.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import instaicon from './assets/instaicon.png'
import LoginPage from './Components/LoginPage'
import SignUpPage from './Components/SignUpPage'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProductsPage from './Components/ProductsPage'
import SingleProductPage from './Components/SingleProductPage'
import CartPage from './Components/CartPage'
import carticon from './assets/carticon.png'
import CheckoutPage from './Components/CheckoutPage'
import { Badge } from 'react-bootstrap'
import AddProduct from './Components/AddProduct'
import Cart from './Components/Cart'
import StartingPage from './Components/StartingPage'
import SellersLogin from './StarShooping/SellersLogin'
import SellersSignup from './StarShooping/SellersSignup'
import ShoperLogin from './StarShooping/ShoperLogin'
import ShoperSignup from './StarShooping/ShoperSignup'
import SellerProducts from './StarShooping/SellerProducts'
function App() {
  const navigate = useNavigate();
  const [isuser, setIsUser] = useState(false)
  const [user, setUser] = useState('');
  const [cart, setCart] = useState({});

  // const [screen, setScreen] = useState(
  //   window.width <= 600,
  // )
  // const screenSize = () => {
  //   setScreen(window.width <= 600)
  // }

  // useEffect(() => {
  //   window.addEventListener('resize', screenSize)
  //   return () => {
  //     window.removeEventListener('resize', screenSize)
  //   }
  // }, [])

  const handleCart = (item) => {
    setCart({ ...cart, ...item })
  }

  let UserExict = localStorage.getItem('SellersUser')
  let ShoerspUser = localStorage.getItem('ShopersUser')

  return (
    <>
      <nav>
        <div className='title'>
          <img src={instaicon} alt="logo" onClick={() => { navigate('/');
                localStorage.clear('SellersUser,ShopersUser')
        }} className='Icon' />
          <h2>Free Shopping!</h2>
        </div>
        <div className="loginButton">

          {
            UserExict || ShoerspUser ? (<div className='headerClass'>
              {
                UserExict ? (
                  <button onClick={() => navigate('/addproduct')} className='PrimaryButton'> + Product</button>
                ) : (
                  <img onClick={() => navigate('/cartproducts')} className='carticon' src='./src/assets/carticon.png' alt="carticon" />
                )
              }
              <button onClick={() => {
                localStorage.clear('SellersUser,ShopersUser')
                navigate('/')
              }}>Logout</button>
            </div>) : (<div>
              <button onClick={() => {
                navigate('/')
              }}>Login</button>
            </div>)
          }
        </div>
      </nav>
      <Routes>
        {/* <Route path="/" element={<HomePage user={user}/>}/> */}
        <Route path='/' element={<StartingPage />}></Route>
        <Route path='/sellerlogin' element={<SellersLogin />}></Route>
        <Route path='/sellersignup' element={<SellersSignup />}></Route>
        <Route path='/shoperslogin' element={<ShoperLogin />}></Route>
        <Route path='/shopersignup' element={<ShoperSignup />}></Route>
        <Route path='/sellerproducts' element={<SellerProducts />}></Route>
        {/* <Route path="/login" element={<LoginPage isUser = {setIsUser}/>}/>
      <Route path="/signup" element={<SignUpPage setUser={setUser}/>}/> */}

        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<SingleProductPage setCart={setCart} handleCart={handleCart} />} />
        <Route path='/cartproducts' element={<Cart />}></Route>
        <Route path="/cart" element={<CartPage cart={cart} />} />
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route path="/addproduct" element={<AddProduct />}></Route>
      </Routes>
    </>
  )
}

export default App
