import React, { useState } from "react";
import './Navbar.css'
import cart_icon from '../assets/cart.png'
import logo from '../assets/y_logo.jpg'
import { Link } from "react-router-dom";



const Navbar = () => {
    
    const [menu,setMenu] = useState('shop');

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration: 'none', color: '#ffff'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>} </li>
                <li onClick={()=>{setMenu('smartphones')}}><Link style={{textDecoration: 'none', color: '#ffff'}} to='/smartphones'>Smartphone</Link>{menu==='smartphones'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('smarthomes')}}><Link style={{textDecoration: 'none', color: '#ffff'}} to='/smarthomes'>Smart home</Link>{menu==='smarthomes'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('lifestyles')}}><Link style={{textDecoration: 'none', color: '#ffff'}} to='/lifestyles '>lifestyle</Link>{menu==='lifestyles'?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
                
            </div>
        </div>
    )
}

export default Navbar