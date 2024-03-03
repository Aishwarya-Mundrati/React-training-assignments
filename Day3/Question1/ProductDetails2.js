import { useState } from "react";

function ProductDetails2() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [total,setTotal] = useState(0);


    function updateName(event)
    {        
       setName(event.target.value);
    }

    function updatePrice(event)
    {        
       setPrice(event.target.value);
    }

    function updateQuantity(event)
    {        
       setQuantity(event.target.value);
    }

    function  Total()
    {
        setTotal(price*quantity);
    }

    return (
        <>
            <h3>Working with state in React</h3>
            <hr/>

            <fieldset>
               
                Product Name : <input type="text" onChange={updateName}  />
                <br /><br />

                Unit Price :   <input type="text" onChange={updatePrice}  />
                <br /><br />

                Quantity  :    <input type="text" onChange={updateQuantity}  />
                <br /><br />

                <input type="button" onClick={Total} value="Get total" />
               <p> Total amount : {total}</p>
            </fieldset>
        </>
    );
}

export default ProductDetails2;