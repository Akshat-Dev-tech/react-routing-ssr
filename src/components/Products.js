import React from "react" ;
import { useParams } from "react-router-dom";
import { productData } from "./constants";

const Products = () => {
    const { name } = useParams();
    const product = productData[name];
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h2>Phone Info</h2>
            {
                product.map((phoneInfo)=>
                    <>
                        {phoneInfo.name}
                        <br />
                    </>
                )
            }
            <h2>{}</h2>
        </div>
    );
}

export default Products;