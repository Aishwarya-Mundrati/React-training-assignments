import { useState } from 'react';
import { dataSericeObj } from '../services/data.service';

function  RelatedServiceFile()
{

  const [customersArray, setCustomersArray] = useState([]);

  function buttonClick()
  {
    //  let promiseObj =   axios.get(url);
      let promiseObj =   dataSericeObj.getAllCustomers();

      promiseObj.then(resData => {
        // console.log(resData.data.records);
        setCustomersArray(resData.data.records);
      });
  }

  var result =  customersArray.map( (item, index) => 
  <tr>  
     <td> {item.Name}  </td> 
     <td> {item.City}  </td> 
     <td> {item.Country}  </td> 
  </tr>);

    return (
        <>
          <h3>Server Communication in React JS</h3>
          <hr/>
          <button  onClick={buttonClick}>Get Data</button>
          <hr/>

          <table  border="2"  cellpadding="5"  cellSpacing="0" width="700">
                <tr>
                    <th>Customer Name</th>
                    <th>City Name</th>
                    <th>Country Name</th>                    
                </tr>
                {result}
            </table>

        </>
    );
}

export default RelatedServiceFile;