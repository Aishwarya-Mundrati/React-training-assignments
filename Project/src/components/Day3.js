import axios from "axios";
import { useState } from "react";
function Day3() {
    const [customersArray,setCustomersArray ] = useState([]);
    var results = customersArray.map((item, index) => {
        return <tr>
            <td>{item.Name}</td>
            <td>{item.City}</td>
            <td>{item.Country}</td>
        </tr>;
    });

    function Buttonclick() {
        let url = "https://www.w3schools.com/angular/customers.php";
        axios.get(url).then(resData => {
            <p> This is for processing the data </p>
            console.log(resData);
            console.log(resData.data)
            console.log(resData.data.records);
            setCustomersArray(resData.data.records)

        });
    }
    

    return (

        <>
            <h3> Server communication in React js</h3>
            <button onClick={Buttonclick}>get data</button>
            <hr />
            <center><table border="2" width="500">
                <tr>
                    <th> Name</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
                {results}
            </table>
            </center>
        </>
    );
}

export default Day3;
