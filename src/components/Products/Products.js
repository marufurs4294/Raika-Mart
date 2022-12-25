import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = (props) => {
    const [products, setProducts] = useState([]);
    const {addToCartButton} = props;

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-400 p-5'>
           {products.map((product) =>(
            <Product product={product} key= {product.id} addToCartButton={addToCartButton}></Product>
           ))}
        </div>
    );
};

export default Products;