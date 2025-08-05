import React from "react" ;
import { useParams , useSearchParams } from "react-router-dom";
import { productData } from "./constants";

const Products = () => {

    // useParams is used to access the route parameters in the URL
    // For example, if the URL is /products/phone,
    // useParams will allow you to access the 'phone' parameter
    const { name } = useParams();

    //useSearchParams is used to access the query parameters in the URL
    // For example, if the URL is /products/phone?sort=price,
    // useSearchParams will allow you to access the 'sort' parameter
    const [searchParams] = useSearchParams();


    //Product rendering logic
    const product = productData[name];
    console.log('Product:', product);
    if (!product) {
        return <div>Product not found</div>;
    }


    //Product Sorting logic
    const sort = searchParams.get('sort') || '';
    console.log('Search Params:', searchParams, searchParams.get('sort'));
    const getSortedData = () => {
        if(sort==='asc'){
            product.sort((a, b) => a.price - b.price);
        }
        else if(sort==='desc'){
            product.sort((a, b) => b.price - a.price);
        }
    }


    return (
        <div>
            <h2>Phone Info</h2>
            {
                product.map((phoneInfo)=>
                    <>
                        {`${phoneInfo.name} ${phoneInfo.price} `}
                        <br />
                    </>
                )
            }
            {
                sort && (getSortedData())
            }
            <h2>{}</h2>
        </div>
    );
}

export default Products;