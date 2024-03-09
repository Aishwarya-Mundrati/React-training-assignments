import { useState } from "react";

function ProductDetails2() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [total,settotal] = useState(0);


    function updatename(event)
    {        
       setName(event.target.value);
    }

    function updateprice(event)
    {        
       setPrice(event.target.value);
    }

    function updatequantity(event)
    {        
       setQuantity(event.target.value);
    }

    function  Total()
    {
        settotal(price*quantity);
    }

    return (
        <>
            <h3>Working with state in React</h3>
            <hr/>

            <fieldset>
               
                Product Name : <input type="text" onChange={updatename}  />
                <br /><br />

                Unit Price :   <input type="text" onChange={updateprice}  />
                <br /><br />

                Quantity  :    <input type="text" onChange={updatequantity}  />
                <br /><br />

                <input type="button" onClick={Total} value="Get total" />
               <p> Total amount : {total}</p>
            </fieldset>
        </>
    );
}

export default ProductDetails2;