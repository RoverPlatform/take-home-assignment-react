import React from "react";
import { Product } from "../types/types";
import ProductSingle from "./ProductSingle";
import {ProductListProps} from "../types/types";

//grabbing the productlist from the dummy data
const products = {}

const ProductList = () => {
    return (
        <div>
            <div className="card">
                <button>Log Out</button>
            </div>
            <div className="card">
                {products.map(function(product){
                    <ProductSingle product={product}/>
                })}
            </div>
        </div>
    )
};
export default ProductList;