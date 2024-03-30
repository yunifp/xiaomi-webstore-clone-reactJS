import React from "react";
import './popular2.css'
import Item from "../items/item";
import data_product2 from "../assets/data2";

const Popular2 = () => {
    return (
        <div className="popular">
            <h1>POPULAR IN SMART HOME</h1>
            <hr />
            <div className="popular-item">
                {data_product2.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Popular2