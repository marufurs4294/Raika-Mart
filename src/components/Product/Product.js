import React from 'react';
import './Product.css'
import Modal from '../Modal/Modal';

const Product = (props) => {
    const {product, addToCartButton} = props;
    const {title,price, image, images,category, name} = product
    return (
        <div className='flex-1 pt-2 gap-4 product-card'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center">
    <h2 className="card-title">{title.slice(0, 26)}</h2>
    <h3 className='font-black'>Price: ${price}</h3>
    <div className="card-actions">
      <button onClick={() => addToCartButton()} className="btn btn-primary">Add to Cart</button>
      <Modal product={product}></Modal>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;