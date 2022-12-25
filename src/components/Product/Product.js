import React from 'react';

const Product = (props) => {
    const {product} = props;
    const {title,price, image, images,category, name} = product
    return (
        <div className='flex-1'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center">
    <h2 className="card-title">{title}</h2>
    <h3 className='font-black'>Price: ${price}</h3>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;