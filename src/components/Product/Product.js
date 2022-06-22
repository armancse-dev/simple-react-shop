import React from 'react';
import './Product.css';
import { Card } from 'react-bootstrap'; 
// import {Row} from 'react-bootstrap';
// import {Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
   // console.log(props);
   const {name, img, donate, email,gender,id,age} = props.product;
   const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
   return (

      <div className='product'>
         
         <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src={img} />
            <Card.Body>
               <Card.Title>Name:{name} </Card.Title>
               <Card.Text>Age:{age}</Card.Text>
               <Card.Text>Email: {email}</Card.Text>
               <Card.Text>Gender: {gender}</Card.Text>
               <Card.Text>Donate: {donate}</Card.Text>
               <Button variant="primary" onClick={() => props.handleAddToCart(props.product)} className='btn-regular' >{cartIcon}add to cart</Button>
            </Card.Body>
         </Card>

         

      </div>

      
   );
};



export default Product;