import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, product) => total + product.price, 0)
    
    let shipping = 0;
    if(totalPrice > 35){
        shipping = 0;
    }
    else if(totalPrice > 15){
        shipping = 4.99;
    }else if(totalPrice > 0){
        shipping = 12.99;
    }
    const tax = (totalPrice/10).toFixed(2);
    const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2);

    const formatNumber = number => {
        const precision = number.toFixed(2);
        return Number(precision);
    }
    return (
        <div className= "grand-total">
            <h4>Order Summery </h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(totalPrice)}</p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p><small>Shiping Cost: {shipping}</small></p>
            <p>total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;