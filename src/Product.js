import React from 'react';
import './css/Product.css';
import Star from '@material-ui/icons/Star';

export default function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div class="product__info">
        <p>{title}</p>
        <p class="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {
            Array(rating)
              .fill()
              .map(() => (
                <p><Star className="product__star" /></p>
              ))
          }
        </div>
      </div>
      <img src={image} alt="" />
      <button>Add to Basket</button>
    </div>
  )
}
