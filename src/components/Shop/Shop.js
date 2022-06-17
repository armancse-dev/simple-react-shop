import React, { useEffect } from 'react';
import './Shop.css'

const Shop = () => {
   useEffect(() => {
      fetch('./tools.JSON')
      .then(res => res.json())
      .then(data => console.log(data));
   }, [])
   return (
      <div>
         
      </div>
   );
};

export default Shop;