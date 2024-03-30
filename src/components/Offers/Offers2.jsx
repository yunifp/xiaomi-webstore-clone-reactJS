import React from "react";
import './Offers2.css'
import { Link } from "react-router-dom";
const Offers2 = () => {
    return (
        <div className="offers2">
            <div className="offers2-left">
                <h1>Xiaomi Pad 6</h1>
                <p>Build for work, designed for ease</p>

                <Link to='/product/16' style={{ textDecoration: 'none' }}>
                    <button>Beli Sekarang</button>
                </Link>
            </div>
        </div>
    )
}

export default Offers2