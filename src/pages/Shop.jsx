import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/popular/popular";
import Offers from "../components/Offers/Offers";
import NewCollection from "../components/NewCollection/newCollection";
import NewsLetter from "../components/NewsLetter/newsLetter";
import Offers2 from "../components/Offers/Offers2";
import Popular2 from "../components/popular/popular2";
import Popular3 from "../components/popular/popular3";


const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Popular2/>
            <Popular3/>
            <Offers/>
            <Offers2/>
            <NewCollection/>
            <NewsLetter/>
        </div>
    )
}

export default Shop