// CartApp.js
import React from 'react';
import './CartApp.css';
import { useSelector, useDispatch } from 'react-redux';
import AddItem from './AddItem';
import RemoveItem from './RemoveItem';

function CartApp() {
    const currentBalance = useSelector((state) => state.balance);
    const dispatch = useDispatch();

    return (
        <div>
            <header>
                <img src="cart.jpg" width="150" alt="" />
                <br />
                React-Shopping Cart
            </header>
            <h1>The total number of items in your cart are {currentBalance.toFixed(0)}</h1>
            <AddItem />
            <RemoveItem />
        </div>
    );
}

export default CartApp;
