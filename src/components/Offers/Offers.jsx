import React from "react";
import './Offers.css'
import { Link } from "react-router-dom";

const Offers = () => {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Redmi 12</h1>
                <p>Memori tergede, harga terkece</p>
                <Link to='/product/16' style={{ textDecoration: 'none' }}>
                    <button>Beli Sekarang</button>
                </Link>
            </div>
        </div>
    )
}

export default Offers