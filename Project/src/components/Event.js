
import { useState} from "react";

function  Event()
{ 
    const [count, setCount] = useState(1);

    function  updateCount()
    {
        let n = count + 1;     
        setCount(n);    // Update count state variable + re-render   
        alert(count);       
    }


    return (
        <>		
            <h3>Event Handling in React JS</h3>	      
            <hr/> 
            <button onClick={updateCount}>Update Count</button>
            <h1>Count :  {count}</h1>
            
        </>
    );
}

export default Event;
