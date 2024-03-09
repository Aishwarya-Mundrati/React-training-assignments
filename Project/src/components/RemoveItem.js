// RemoveItem.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function RemoveItem() {
    const [amountValue, setAmount] = useState(0);
    const dispatch = useDispatch();

    function withdrawClick() {
        dispatch({ type: 'WITHDRAW', amount: amountValue });
        setAmount(0);
    }

    return (
        <div className="atm">
            <input
                type="text"
                placeholder="Enter Amount"
                value={amountValue}
                name="amount"
                onChange={(e) => setAmount(e.target.value)}
            />
            <br />
            <button onClick={withdrawClick}>Remove</button>
        </div>
    );
}

export default RemoveItem;
