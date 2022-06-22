import React from 'react';
import './Cart.css';


const Cart = (props) => {
   const {cart} = props;
   let total = 0;
   for (const product of cart){
      total = total + product.donate;
   }


   return (
      <div>
         <h3>Alumni Added: {props.cart.length}</h3>
            <h5>Total Donation: {total}</h5>
            <h5>Donate Name: {props.cart.name}</h5>

      </div>
   );
};

export default Cart;