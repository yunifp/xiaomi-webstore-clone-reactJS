import React from "react";
import './Hero.css';
import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>
                    Xiaomi 13T
                </h2>
                <div>
                    <p>Masterpiece</p>
                    <p>in Sight</p>
                </div>
                <Link to='/product/4' style={{textDecoration: 'none'}}>
                    <div className="hero-latest-btn">
                        <div>Beli Sekarang</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Hero