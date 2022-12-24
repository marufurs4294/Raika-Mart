import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
           {products.map((product) =>(
            
           ))}
        </div>
    );
};

export default Products;