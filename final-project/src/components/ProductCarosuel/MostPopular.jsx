import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './MostPopular.css';

function MostPopular() {
  const products = [
    { id: 1, name: 'Handmade Soap', price: '$35.00', imgSrc: 'handmade-soap.jpg', alt: 'handmade soap' },
    { id: 2, name: 'Herb Candle', price: '$35.00', imgSrc: 'herb-candle.jpg', alt: 'herb candle' },
    { id: 3, name: 'Herbal Oil', price: '$35.00', imgSrc: 'herbaloil.jpg', alt: 'herbal oil' },
    { id: 4, name: 'Honey Soap', price: '$35.00', imgSrc: 'honeysoap.jpg', alt: 'honey soap' },
    { id: 5, name: 'Oils', price: '$35.00', imgSrc: 'oils.jpg', alt: 'oils' },
    { id: 6, name: 'Honey Soap', price: '$35.00', imgSrc: 'honeysoap.jpg', alt: 'honey soap' },
    { id: 7, name: 'Oils', price: '$35.00', imgSrc: 'oils.jpg', alt: 'oils' }
  ];

 

  return (
    <div className='Product-list'>
      <h1>MOST POPULAR</h1>
      
        {products.map(product => (
          <div key={product.id} className='card'>
            <img src={product.imgSrc} alt={product.alt} />
            <p className='pro-name'>{product.name}</p>
            <p className='pro-cost'>{product.price}</p>
            <button className='pro-cart-btn'>Add to Cart</button>
          </div>
        ))}
      
    </div>
  );
}

export default MostPopular;
