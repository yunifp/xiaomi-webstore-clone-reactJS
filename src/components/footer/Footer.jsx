import React from "react";
import './Footer.css'
import footer_logo from '../assets/y_logo.jpg'




const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <p>YnBox</p>
            </div>
            <ul className="footer-links">
                <li>Brand</li>
                <li>Product</li>
                <li>Store</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="icons-container">
                    <i class="fa-brands fa-instagram"></i>
                </div>
                <div className="icons-container">
                    <i class="fa-brands fa-facebook"></i>
                </div>
                <div className="icons-container">
                    <i class="fa-brands fa-whatsapp"></i>
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @yunif_aka_..1_darren.armani - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer