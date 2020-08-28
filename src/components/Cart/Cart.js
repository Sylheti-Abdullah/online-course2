import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart=props.cart;
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        totalPrice = totalPrice + course.price;
        
    }
    const total = totalPrice.toFixed(2);

    return (
        <div className="cart">
            <h5>Enrolled Items: {cart.length}</h5>
            <h3>Total Price: {total}</h3>
        </div>
    );
};

export default Cart;