import React, { useContext } from "react";
import { ShopContext} from '../context/ShopContext'
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrums/breadcrum";
import ProductDisplay from "../components/productDisplay/productdisplay";
import DescriptionBox from "../components/descriptionbox/descriptionBox";
import RelatedProduct from "../components/relatedProduct/relatedProduct";

const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams(); 
    const product = all_product.find((e)=> e.id === Number(productId))
    return (
        <div>
             <Breadcrum product ={product}/>
             <ProductDisplay product={product}/>
             <DescriptionBox/>
             <RelatedProduct/>
        </div>
    )
}

export default Product