// AddItem.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddItem() {
    const [amountValue, setAmount] = useState(0);
    const dispatch = useDispatch();

    function depositClick() {
        dispatch({ type: 'DEPOSIT', amount: amountValue });
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
            <button onClick={depositClick}>Add</button>
        </div>
    );
}

export default AddItem;
