import { useState } from "react";

function ProductDetails() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [total,settotal] = useState(0);

    
    function  Total()
    {
        settotal(price*quantity);
    }

    return (
        <>
            <h3>Working with state in React</h3>
            <hr/>

            <fieldset>
               
                Product Name : <input type="text" onChange={ (e) => setName(e.target.value)}  />
                <br /><br />

                Unit Price :   <input type="text" onChange={(e) => setPrice(e.target.value)}  />
                <br /><br />

                Quantity  :    <input type="text" onChange={(e) => setQuantity(e.target.value)}  />
                <br /><br />

                <input type="button" onClick={Total} value="Get total" />
               <p> Total amount : {total}</p>
            </fieldset>
        </>
    );
}

export default ProductDetails;