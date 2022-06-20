import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      fetch('./tools.JSON')
      .then(res => res.json())
      .then(data => setProducts(data));
   }, [])

   const handleAddToCart = (product) => {
      console.log(product);
   }

   return (
      <div className='shop-container'>
         <div className="product-container">
            <h3>Products: {products.length}</h3>
            {
               products.map(product=> <Product 
                  key={product.id}
                  product={product}
                  handleAddToCart = {handleAddToCart}
                  ></Product> )
            }
         </div>
         <div className="cart-container">
            <h3>Alumni Added: </h3>
            <h5>Total Donation:</h5>
         </div>
      </div>
   );
};

export default Shop;