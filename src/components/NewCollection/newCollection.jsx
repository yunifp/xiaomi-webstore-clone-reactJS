import React from "react";
import './newCollection.css'
import new_collection from '../assets/new_collections'
import Item from '../items/item'

const NewCollection = () => {
    return (
        <div className="newcollection">
            <h1>
                NEW COLLECTION
            </h1>
            <hr />
            <div className="collections">
                {new_collection.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default NewCollection