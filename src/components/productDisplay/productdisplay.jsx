import React, { useContext } from "react";
import './productdisplay.css'
import star_icon from "../assets/star_icon.png"
import star_null_icon from "../assets/star_dull_icon.png"
import { ShopContext } from "../../context/ShopContext";


const ProductDisplay = (props) => {

    const { product } = props;
    const {addToCart} = useContext(ShopContext);
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_null_icon} alt="" />
                    <p>622</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, 
                    quia! Quod at impedit vitae dolorum numquam? Esse architecto sit, 
                    molestias harum magni cumque cum, ipsa aliquid culpa voluptatem commodi numquam?
                </div>
                <div className="productdisplay-right-color">
                    <h1>Select Color</h1>
                    <div className="productdisplay-right-colors">
                        <div>Black</div>
                        <div>White</div>
                        <div>Grey</div>
                        <div>Silver</div>
                        <div>Tosca</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
                <p className="productdisplay-right-category">Category :<span>{product.category}</span></p>
                <p className="productdisplay-right-category">Category :<span>Smartphone, Lifestyle, Smarthome</span></p>
            </div>
        </div>
    )
}

export default ProductDisplay